import React from 'react';
import { connect } from 'react-redux';
import debounce from 'react-debouncing';
import { Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton, AccordionItemPanel } from 'react-accessible-accordion';
import { editorService } from '../../service/editor-service';
import { setEditingElement } from '../../store/actions/editor-actions';
import { EditText } from './editor-sections/EditText';
import { EditOrientation } from './editor-sections/EditOrientation';
import { EditBoxStyling } from './editor-sections/EditBoxStyling';

export class _ElementEditor extends React.Component {
    editFieldsWithPx = editorService.getFieldsWithPx();
    editFieldsWithDebounce = editorService.getFieldsWithDebounce();

    handleSpecialInputChange = (field, val) => {
        const { element } = this.props;

        if (this.editFieldsWithDebounce.includes(field)) return this.handleChangeWithDebounce({ element, field, val });

        const updatedElement = editorService.getNewElement(element, field, val);
        console.log(updatedElement)
        this.editElement(updatedElement);
    }

    handleRegInputChange = (ev) => {
        const { element } = this.props;
        const field = ev.target.name;
        let val = ev.target.value;

        if (this.editFieldsWithDebounce.includes(field)) return this.handleChangeWithDebounce({ element, field, val });

        const updatedElement = editorService.getNewElement(element, field, val);
        this.editElement(updatedElement);
    }

    handleChangeWithDebounce = debounce((editProps) => {
        const updatedElement = editorService.getNewElement(editProps.element, editProps.field, editProps.val);

        this.editElement(updatedElement);
    }, 10);

    editElement = (updatedElement) => {
        const { elementParentId, setEditingElement, onUpdateElement } = this.props;

        setEditingElement(updatedElement, elementParentId);
        onUpdateElement(updatedElement, elementParentId);
    }


    render() {
        const { element } = this.props;
        if (!element) return <div>Select an element for start editing</div>;
        const { txt, prefs } = element;
        // const { txt, prefs, role } = element;
        let { style: {
            // Text style
            textAlign, fontStyle, textDecoration, fontSize, color, fontWeight, fontFamily, letterSpacing,
            // Box styling
            backgroundColor, backgroundImage, borderRadius,
            height, width,
            // Box Orientation
            paddingBlockStart, paddingBlockEnd, paddingInlineStart, paddingInlineEnd, marginBlockStart, marginBlockEnd, marginInlineStart, marginInlineEnd
            // backgroundColor } = {}, src } = prefs;
        } = {} } = prefs;

        return (
            <Accordion allowZeroExpanded="true" allowMultipleExpanded="true">
                {("txt" in element) &&
                    <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                Text
                                </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <EditText
                                txt={txt}
                                textAlign={textAlign}
                                fontStyle={fontStyle}
                                textDecoration={textDecoration}
                                fontSize={fontSize}
                                color={color}
                                fontWeight={fontWeight}
                                fontFamily={fontFamily}
                                letterSpacing={letterSpacing}
                                onChangeSpecialInput={this.handleSpecialInputChange}
                                onChangeValue={this.handleRegInputChange} />
                        </AccordionItemPanel>
                    </AccordionItem>}

                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            Styling
                            </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <EditBoxStyling
                            backgroundColor={backgroundColor}
                            backgroundImage={backgroundImage}
                            borderRadius={borderRadius}
                            height={height}
                            width={width}
                            onChangeSpecialInput={this.handleSpecialInputChange}
                            onChangeValue={this.handleRegInputChange} />
                    </AccordionItemPanel>
                </AccordionItem>

                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            Orientation
                            </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <EditOrientation
                            role={`${"txt" in element ? 'text' : 'section'}`}
                            marginBlockStart={marginBlockStart}
                            marginBlockEnd={marginBlockEnd}
                            marginInlineStart={marginInlineStart}
                            marginInlineEnd={marginInlineEnd}
                            paddingBlockStart={paddingBlockStart}
                            paddingBlockEnd={paddingBlockEnd}
                            paddingInlineStart={paddingInlineStart}
                            paddingInlineEnd={paddingInlineEnd}
                            onChangeSpecialInput={this.handleSpecialInputChange} />
                    </AccordionItemPanel>
                </AccordionItem>
            </Accordion>
        )
    }
}


function mapStateToProps(state) {
    return {
        element: state.editorModule.editingElement,
        elementParentId: state.editorModule.editingElementParentId
    }
}

const mapDispatchToProps = {
    setEditingElement
}

export const ElementEditor = connect(mapStateToProps, mapDispatchToProps)(_ElementEditor)
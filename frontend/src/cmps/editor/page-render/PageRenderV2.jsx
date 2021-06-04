import React from 'react';
import { connect } from 'react-redux';
import { setEditingElement } from '../../../store/actions/editor-actions';
import { setData } from '../../../store/actions/data-actions';
import { utilService } from '../../../service/util-service';
import { ChildsPreview } from './ChildsPreview';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

class _PageRenderV2 extends React.Component {

    reorder = (startIndex, endIndex) => {
        const { childs } = this.props;
        let elDragged = childs.splice(startIndex, 1)
        elDragged = elDragged[0];
        childs.splice(endIndex, 0, elDragged)
        return childs
    }

    onDragEnd = (result) => {
        if (!result.destination) return
        this.reorder(
            result.source.index,
            result.destination.index
        )
    }


    render() {
        const { childs, onReorderingElement, onRemoveElement, setEditingElement, editingElement } = this.props;
        if (childs.length === 0) {
            //if there is no childs in store it shows msg.
            return (
                <>
                    { localStorage.removeItem('website')}
                    <section
                        data-id={utilService.makeId()}
                        className="site-container">
                        <ChildsPreview
                            child={
                                {
                                    type: "div",
                                    role: "childless",
                                    prefs: {
                                        style: {
                                            fontFamily: "Oxanium",
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            color: "#888",
                                            marginBlockStart: "20px",
                                            width: '100%',
                                            border: '5px dotted #888',
                                            padding: '200px 20px',
                                            fontSize: '2rem',
                                            pointerEvents: 'none'

                                        }
                                    },
                                    txt: "Choose Your Design from Create Menu"

                                }}
                            isEdit={true}
                        />
                    </section>
                </>
            )
        }

        //if the user choose, it shows the choosen element
        return (
            <DragDropContext onDragEnd={this.onDragEnd} >
                <Droppable droppableId="childs">
                    {(provided) => (
                        <section
                            data-id={utilService.makeId()}
                            className="site-container"
                            {...provided.droppableProps}
                            ref={provided.innerRef}
                        >
                            {childs.map((child, idx) => {
                                return <ChildsPreview
                                    child={child}
                                    editingElement={editingElement}
                                    key={child.id}
                                    isContainer={child.isContainer}
                                    setEditingElement={setEditingElement}
                                    onReorderingElement={onReorderingElement}
                                    onRemoveElement={onRemoveElement}
                                    idx={idx}
                                    isEdit={true}
                                />
                            })}
                            {provided.placeholder}
                        </section>
                    )}
                </Droppable>
            </DragDropContext>

        )
    }
}

const mapDispatchToProps = {
    setEditingElement,
    setData
}

function mapStateToProps(state) {
    return {
        editingElement: state.editorModule.editingElement
    }
}

export const PageRender = connect(mapStateToProps, mapDispatchToProps)(_PageRenderV2)
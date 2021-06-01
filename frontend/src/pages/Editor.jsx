import React from 'react';
import { connect } from 'react-redux';
import { setData, addSection } from '../store/actions/data-actions';
import { elementService } from '../service/element-service';
import { Loading } from '../cmps/Loading'
import { EditorSideBar } from '../cmps/editor/EditorSideBar';
import { PageRender } from '../cmps/editor/page-render/PageRenderV2';
import { storageService } from '../service/storage-service';
import { UserMsg } from '../cmps/UserMsg';
import { OptionsCircle } from '../cmps/editor/OptionsCircle';

class _Editor extends React.Component {

    state = {
        isUserMsg: false,
    }

    componentDidMount() {
        if (this.props.data.childs.length) {
            return;
        } else {
            const savedData = storageService.loadFromStorage('website')
            if (savedData) {
                this.props.setData({ data: savedData });
            }
        }
    }

    onAddSection = (section, src = null) => {
        const addedSection = elementService.getElement(section, src);
        this.props.addSection(addedSection);
        this.saveWebsiteToStorage();
    }

    onAddElement = (elementType, src = null) => {
        const { data, editingElement } = this.props;
        if (!editingElement || !editingElement.childs) {
            console.log('trying to push element to a chidless element...');
            return;
        }
        const { id } = editingElement
        const newData = JSON.parse(JSON.stringify(elementService.addElement(data, id, elementType, src)));
        this.props.setData({ data: newData });
        this.saveWebsiteToStorage();
    }

    onUpdateElement = (newElement) => {
        const elementId = newElement.id;
        const newData = JSON.parse(JSON.stringify(elementService.editElement(this.props.data, elementId, newElement)));
        this.props.setData({ data: newData });
        this.saveWebsiteToStorage();
    }

    onRemoveElement = (elementId) => {
        const newData = JSON.parse(JSON.stringify(elementService.removeElementById(this.props.data, elementId)));
        this.props.setData({ data: newData });
        this.saveWebsiteToStorage();
    }

    onReorderingElement = (elementId, val) => {
        const newData = JSON.parse(JSON.stringify(elementService.reorderElement(this.props.data, elementId, val)));
        this.props.setData({ data: newData });
        this.saveWebsiteToStorage();
    }

    saveWebsiteToStorage = () => {
        storageService.saveToStorage('website', this.props.data);
    }

    render() {
        let { data } = this.props;
        if (!data) return <Loading />;
        const { childs } = data;
        const { isUserMsg } = this.state;

        return (
            <>
                <section className="flex column justify-center align-center text-center editor-prevent-mobile">Sorry, the editor is available only on tablets and wider screens.</section>
                <section className="flex editor-container">
                    <EditorSideBar onAddElement={this.onAddElement} onAddSection={this.onAddSection} onUpdateElement={this.onUpdateElement} />
                    <PageRender onReorderingElement={this.onReorderingElement} onRemoveElement={this.onRemoveElement} childs={childs} />
                </section>
                {isUserMsg && <UserMsg msg={'Saved!'} />}
                <OptionsCircle />
            </>
        );
    }
}

const mapDispatchToProps = {
    setData,
    addSection
}

function mapStateToProps(state) {
    return {
        data: state.dataModule.data,
        editingElement: state.editorModule.editingElement
    }
}

export const Editor = connect(mapStateToProps, mapDispatchToProps)(_Editor)
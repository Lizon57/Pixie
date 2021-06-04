import React from 'react';
import { connect } from 'react-redux';
import { setData, addSection } from '../store/actions/data-actions';
import { removeEditingElement } from '../store/actions/editor-actions';
import { isEditorMode } from '../store/actions/app-actions';
import { elementService } from '../service/element-service';
import { storageService } from '../service/storage-service';
import { Loading } from '../cmps/Loading';
import { EditorSideBar } from '../cmps/editor/EditorSideBar';
import { PageRender } from '../cmps/editor/page-render/PageRenderV2';
import { PublishTool } from '../cmps/editor/PublishTool';
import { UserMsg } from '../cmps/UserMsg';

class _Editor extends React.Component {ע

    state = {
        isUserMsg: false,
        msg: '',
    }

    componentDidMount() {
        const { isEditorMode } = this.props;
        isEditorMode(true);

        if (this.props.data.childs.length) {
            return;
        } else {
            const savedData = storageService.loadFromStorage('website')
            if (savedData) {
                this.props.setData({ data: savedData });
            }
        }
    }

    componentWillUnmount() {
        const { isEditorMode } = this.props;
        isEditorMode(false);
    }

    userMsgShow = (msg) => {
        this.setState(prevState => ({ ...prevState, isUserMsg: true, msg: msg }))
        setTimeout(() => {
            this.setState(prevState => ({ ...prevState, isUserMsg: false, msg: '' }))
        }, 2000)
    }

    onAddSection = async (section, src = null) => {
        const addedSection = elementService.getElement(section, src);
        await this.props.addSection(addedSection);
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
        this.props.removeEditingElement();
        this.saveWebsiteToStorage();
    }

    onReorderingElement = (elementId, val) => {
        const newData = JSON.parse(JSON.stringify(elementService.reorderElement(this.props.data, elementId, val)));
        this.props.setData({ data: newData });
        this.saveWebsiteToStorage();
    }

    saveWebsiteToStorage = () => {
        storageService.saveToStorage('website', this.props.data)
    }

    render() {
        let { data, isLoading } = this.props;
        if (isLoading) return <Loading />;
        const { childs } = data;
        const { isUserMsg, msg } = this.state;

        return (
            <>
                <section className="flex column justify-center align-center text-center editor-prevent-mobile">Sorry, the editor is available only on tablets and wider screens.</section>
                <section className="flex editor-container">
                    <EditorSideBar onAddElement={this.onAddElement} onAddSection={this.onAddSection} onUpdateElement={this.onUpdateElement} />
                    <PageRender onReorderingElement={this.onReorderingElement} onRemoveElement={this.onRemoveElement} childs={childs} />
                </section>
                {isUserMsg && <UserMsg msg={msg} />}
                <PublishTool userMsgShow={this.userMsgShow} />
            </>
        );
    }
}

const mapDispatchToProps = {
    setData,
    addSection,
    isEditorMode,
    removeEditingElement,
}

function mapStateToProps(state) {
    return {
        data: state.dataModule.data,
        editingElement: state.editorModule.editingElement,
        isLoading: state.webModule.isLoading
    }
}

export const Editor = connect(mapStateToProps, mapDispatchToProps)(_Editor)
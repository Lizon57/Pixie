import React from 'react';
import { EditorNav } from './EditorNav';
import { ElementsList } from './ElementsList';
import { ElementEditor } from './ElementEditor';

export class EditorSideBar extends React.Component {
    state = {
        mode: 'addElement'
    }

    changeMode = (mode) => {
        this.setState({ mode });
    }


    render() {
        const { mode } = this.state;
        const { onAddSection, onUpdateElement, onAddElement, saveWebsiteToStorage } = this.props;

        return (
            <div className="editor-side-nav-container">
                <EditorNav mode={mode} onChangeMode={this.changeMode} />
                {(mode === 'addElement') && <ElementsList onAddElement={onAddElement} onAddSection={onAddSection} />}
                {(mode === 'editElement') && <ElementEditor onUpdateElement={onUpdateElement} />}
                <div onClick ={() => {saveWebsiteToStorage()}} className="save">SAVE!</div>
            </div>
        );
    }
}
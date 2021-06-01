import React from 'react'
import { connect } from 'react-redux'

class _EditorNav extends React.Component {
    state = {
    }

    componentDidMount(){
    }

    render() {

        const { mode, onChangeMode } = this.props

        return (
            <div className="text-center flex space-between editor-nav-container">
                <div
                    onClick={() => onChangeMode('addElement')}
                    className={"pointer" + (mode === 'addElement' ? ' active' : '')}>
                    <span className="fas create-el-icn"></span>
                    Create
                </div>

                <div
                    onClick={() => onChangeMode('editElement')}
                    className={"pointer" + (mode === 'editElement' ? ' active' : '')}>
                    <span className="fas edit-el-icn"></span>
                    Edit
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = {
}

function mapStateToProps(state) {
    return {
        editorMode: state.editorModule.editorMode
    }
}

export const EditorNav = connect(mapStateToProps, mapDispatchToProps)(_EditorNav)
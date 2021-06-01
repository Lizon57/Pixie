export function setEditingElement(element, parentId) { // Action Creator
    return dispatch => {
        dispatch({ type: 'SET_EDITING_CMP', element, parentId });
        dispatch({ type: 'SET_EDITOR_MODE', editorMode: 'editElement' });
    }
}

export function setEditorMode(editorMode) { // Action Creator
    return dispatch => {
        dispatch({ type: 'SET_EDITOR_MODE', editorMode });
    }
}
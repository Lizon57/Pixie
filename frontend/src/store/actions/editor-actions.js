export function setEditingElement(element) { // Action Creator
    return dispatch => {
        dispatch({ type: 'SET_EDITING_CMP', element, parentId });
    }
}

export function setEditorMode(editorMode) { // Action Creator
    return dispatch => {
        dispatch({ type: 'SET_EDITOR_MODE', editorMode });
    }
}
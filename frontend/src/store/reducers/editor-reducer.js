const initialState = {
    editingElement: null,
    editingElementParentId: null,
    editorMode: 'addElement'
}

export function editorReducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_EDITING_CMP':
            return { ...state, editingElement: action.element, editingElementParentId: action.parentId };
        case 'SET_EDITOR_MODE':
            return { ...state, editorMode: action.editorMode };
        default:
            return state;
    }
}
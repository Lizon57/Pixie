const initialState = {
    editingElement: null,
    editingElementParentId: null
}

export function editorReducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_EDITING_CMP':
            return { editingElement: action.element, editingElementParentId: action.parentId };

        default:
            return state;
    }
}
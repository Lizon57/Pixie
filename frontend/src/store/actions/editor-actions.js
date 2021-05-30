export function setEditingElement(element, parentId) { // Action Creator
    return dispatch => {
        dispatch({ type: 'SET_EDITING_CMP', element, parentId });
    }
}
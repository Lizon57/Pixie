const initialState = {
    isPageView: false
}

export function appReducer(state = initialState, action) {
    switch (action.type) {
        case 'CHANGE_VIEW':
            return { ...state, isPageView: action.isPageView }
        default:
            return state
    }
}

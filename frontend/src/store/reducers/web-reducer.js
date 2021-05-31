const initialState = {
    webSites: [],
}

export function webReducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_WEBS':
            return { ...state, webSites: action.webSites }
        case 'SAVE_WEB':
            return { ...state, webSites: [...state.webSites, action.webSites] }
        case 'REMOVE_WEB':
            return { ...state, webSites: state.webSites.filter(web => web._id !== action.webId) }
        default:
            return state
    }
}

const initialState = {
    tamplates: [],
}

export function tamplateReducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_TAMPLATES':
            return { ...state, tamplates: action.tamplates }
        case 'SAVE_TAMPLATE':
            return { ...state, tamplates: [...state.tamplates, action.savedTamplate] }
        case 'REMOVE_TAMPLATE':
            return { ...state, tamplates: state.tamplates.filter(tamplate => tamplate._id !== action.tamplateId) }
        default:
            return state
    }
}

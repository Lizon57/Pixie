import { tamplateService } from '../../service/tamplate-service'

export function loadTamplates() { // Action Creator
    return async dispatch => {
        const tamplates = await tamplateService.query()
        const action = {
            type: 'SET_TAMPLATES',
            tamplates
        }
        dispatch(action)

    }
}
export function removeTamplate(tamplateId) { // Action Creator
    return async dispatch => {
        await tamplateService.remove(tamplateId)
        const action = {
            type: 'REMOVE_TAMPLATE',
            tamplateId
        }
        dispatch(action)
    }
}

export function saveTamplate(tamplateInfo) { // Action Creator
    return async dispatch => {
        const savedTamplate = await tamplateService.save(tamplateInfo)
        const action = {
            type: 'SAVE_TAMPLATE',
            savedTamplate
        }
        dispatch(action)

    }
}
import { userService } from '../../service/user-service';

export function loadUser(credentials) {
    return async dispatch => {
        try {
            const user = await userService.getUser(credentials)
            dispatch({ type: `LOGIN_USER`, user })
        } catch (err) {
            console.log(err)
            throw err
        }
    }
}

export function logOut() {
    return async dispatch => {
        try {
            await userService.logOut()
            const user = { user: '' }
            dispatch({ type: `LOGOUT_USER`, user })
        } catch (err) {
            console.log(err)
            throw err
        }
    }
}



export function signUp(userInfo) {
    return async dispatch => {
        try {
            const user = await userService.signUp(userInfo)
            dispatch({ type: `LOGIN_USER`, user })
        } catch (err) {
            console.log(err)
            throw err
        }

    }
}
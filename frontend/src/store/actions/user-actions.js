import { userService } from '../../service/user-service';



export function loadUser(credentials) {
    return async dispatch => {
        const user = await userService.getUser(credentials)
        console.log(user)
        dispatch({ type: `LOGIN_USER`, user })
    }
}

export function logOut() {
    return async dispatch => {
        await userService.logOut()
        const user = { user: '' }
        dispatch({ type: `LOGOUT_USER`, user })
    }
}



export function signUp(userInfo) {
    return async dispatch => {
        const user = await userService.signUp(userInfo)
        dispatch({ type: `LOGIN_USER`, user })
    }
}
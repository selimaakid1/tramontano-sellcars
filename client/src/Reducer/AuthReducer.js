import { LOGIN_SUCCESS, LOGIN_FAIL, AUTH_ERROR, CLEAR_ERROR, LOGOUT, USER_LOADED } from '../Actions/types'

const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    user: null,
    error: null
}

const AuthReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_LOADED:
            return {
                ...state,
                isAuthenticated: true,
                user: action.payload,
                error : null
            }
        case LOGIN_SUCCESS:
        case LOGOUT:
        case LOGIN_FAIL:
        case AUTH_ERROR:
        case CLEAR_ERROR:
            return {
                ...state,
                error: null
            }
        default:
            return state
    }
}

export default AuthReducer
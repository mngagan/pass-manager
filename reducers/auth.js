import { REGISTER_SUCCESS, REGISTER_FAILED, USER_LOADED, AUTH_ERROR } from "../actions/types";

const intialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    loading: true,
    user: null
}

export default (state = intialState, action) => {
    const { type, payload } = action
    switch (type) {
        case USER_LOADED : 
            return {
                ...state,
                isAuthenticated : true,
                loaded : false,
                user : payload
            }
        case REGISTER_SUCCESS:
            localStorage.setItem('token', payload.token)
            return { ...state, ...payload, isAutheticated: true, loading: false }
            break;
        case REGISTER_FAILED:
        case AUTH_ERROR:
            localStorage.removeItem('token')
            return { ...state, token: null, isAutheticated: false, loading: false }
            break;

        default:
            return state
    }

}
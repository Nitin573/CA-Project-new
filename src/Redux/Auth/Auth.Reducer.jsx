import { ERROR_LOGIN, ERROR_REGISTER, LOADING_LOGIN, LOADING_REGISTER, SUCCESS_LOGIN, SUCCESS_LOGOUT, SUCCESS_REGISTER } from "./Auth.Type"

const initialState = {
    loading: false,
    registerData: [],
    // loginData: [],
    error: false,
    // token: localStorage.get(token) || null,

}

export const Auth_Reducer = (state = initialState, { type, payload }) => {

    switch (type) {
        case LOADING_REGISTER: {
            return { ...state, loading: true, error: false };
        }
        case SUCCESS_REGISTER: {
            return { ...state, error: false, loading: false, registerData: payload };
        }
        case ERROR_REGISTER: {
            return { ...state, error: true, loading: false }
        }
        // case LOADING_LOGIN: {
        //     return { ...state, loading: true, error: false };
        // }
        // case SUCCESS_LOGIN: {
        //     localStorage.set('token', loginData.token);
        //     return { ...state, loading: false, error: false, loginData: payload, token: loginData.token }

        // }
        // case ERROR_LOGIN: {
        //     return { ...state, loading: false, error: true }
        // }

        // case SUCCESS_LOGOUT: {
        //     localStorage.set('token', null);

        //     return { ...state, loading: false, error: false, token: null }
        // }

        default: {
            return state;
        }
    }

}
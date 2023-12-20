
import { ERROR_LOGIN, LOADING_LOGIN, SUCCESS_LOGIN, SUCCESS_LOGOUT } from "./Signin.Type";

const initialState = {
    loading: false,
    loginData: [],
    error: false,
    token: localStorage.getItem("token") || null,

}

export const Signin_Reducer = (state = initialState, { type, payload }) => {

    switch (type) {

        case LOADING_LOGIN: {
            return { ...state, loading: true, error: false };
        }
        case SUCCESS_LOGIN: {
            // localStorage.setItem('token', payload.data.token);
            sessionStorage.setItem("userDetails" ,JSON.stringify(payload.data) )
            // console.log("paysdkjccdwjf", payload.data)
            return { ...state, loading: false, error: false, loginData: payload, token: payload.data.token }

        }
        case ERROR_LOGIN: {
            // console.log("paysdkjccdwjf", payload)
            return { ...state, loading: false, error: true, loginData: payload }

        }

        case SUCCESS_LOGOUT: {
            localStorage.removeItem('token');

            return { ...state, loading: false, error: false, token: "" }
        }

        default: {
            return state;
        }
    }

}

// import { ERROR_VENDOR_LOGIN, LOADING_VENDOR_LOGIN, SUCCESS_VENDOR_LOGIN, SUCCESS_LOGOUT } from "./Signin.Type";

import { ERROR_VENDOR_LOGIN, LOADING_VENDOR_LOGIN, SUCCESS_LOGOUT, SUCCESS_VENDOR_LOGIN } from "./Vendor.Type";

const initialState = {
    loading: false,
    VENDOR_loginData: [],
    error: false,
    token: localStorage.getItem("token") || null,

}

export const Vendor_Reducer = (state = initialState, { type, payload }) => {

    switch (type) {

        case LOADING_VENDOR_LOGIN: {
            return { ...state, loading: true, error: false };
        }
        case SUCCESS_VENDOR_LOGIN: {
            localStorage.setItem('token', payload.data.token);
            console.log("paysdkjccdwjf", payload.data)
            return { ...state, loading: false, error: false, VENDOR_loginData: payload, token: payload.data.token }

        }
        case ERROR_VENDOR_LOGIN: {
            // console.log("paysdkjccdwjf", payload)
            return { ...state, loading: false, error: true, VENDOR_loginData: payload }

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
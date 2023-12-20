import { ERROR_Profile, Get_Profile, LOADING_Profile, SUCCESS_Profile } from "./Profile.Type";


const initialState = {
    loading: false,
    profileData: [],
    error: false,
    token: localStorage.getItem('token')||null,

}

export const Profile_Reducer = (state = initialState, { type, payload }) => {

    switch (type) {
        case LOADING_Profile: {
            return { ...state, loading: true, error: false };
        }
        case SUCCESS_Profile: {
            return { ...state, error: false, loading: false, profileData: payload,token:payload.token };
        }
        case ERROR_Profile: {
            return { ...state, error: true, loading: false,profileData: payload};
        }
        case Get_Profile: {
            return { ...state, error: false, loading: false, profileData: payload };
        }
        default: {
            return state;
        }
    }

}
// Firm.Action.js
import axios from "axios";
import { ERROR_FIRM_REGISTER, LOADING_FIRM_REGISTER, SET_FIRM_ID, SET_FIRM_NAME, SUCCESS_FIRM_REGISTER, SUCCESS_GET_FIRM_REGISTER } from "./Firm.Type";
import { LIVE_URL2 } from "../config/Commen"; // Assuming the correct import for LIVE_URL2
import { toast } from "react-toastify";

export const getFirmData = (token) => async (dispatch) => {
    dispatch({ type: LOADING_FIRM_REGISTER });

    try {
        const headers = {
            'Content-Type': 'application/json',
            'token': token
        };

        const response = await axios.get(`${LIVE_URL2}/firm_registration`, { headers });

        dispatch({ type: SUCCESS_GET_FIRM_REGISTER, payload: response.data });
        // console.log("firm data get", response.data);
    } catch (error) {
        dispatch({ type: ERROR_FIRM_REGISTER, payload: error });
        console.error(error);
    }
};

export const firmRegisterAction = (formData, token) => async (dispatch) => {
    dispatch({ type: LOADING_FIRM_REGISTER });

    try {
        const headers = {
            'Content-Type': 'multipart/form-data', // Update content type for FormData
            'token': token
        };

        const response = await axios.post(`${LIVE_URL2}/firm_registration`, formData, { headers });

        dispatch({ type: SUCCESS_FIRM_REGISTER, payload: response.data });

        if (response.status === 201) {
            toast.success("Successfully registered");
            dispatch(getFirmData(token));
            // Consider using React Router for navigation instead of direct window location change
            // Example: history.push("/HomeDash");
            window.location = "/HomeDash";
        }
    } catch (error) {
        dispatch({ type: ERROR_FIRM_REGISTER, payload: error });

        if (error.response?.data?.message) {
            toast.error(error.response.data.message);
        } else {
            toast.error(error.message);
        }
        console.error(error);
    }
};

export const setFirmId = (firmId) => (dispatch) => {
    dispatch({ type: SET_FIRM_ID, payload: firmId });
};

export const setFirmName = (firmName) => (dispatch) => {
    dispatch({ type: SET_FIRM_NAME, payload: firmName });
};

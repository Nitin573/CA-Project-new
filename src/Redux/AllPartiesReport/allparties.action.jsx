
import axios from "axios";
import { LIVE_URL2 } from "../config/Commen";
import { toast } from "react-toastify";
import {
    DELETE_ALLPARTIES,
    ERROR_ALLPARTIES,
    GET_ALLPARTIES,
    INDUVIDUAL_ALLPARTIES,
    LOADING_ALLPARTIES,
    SUCCESS_ALLPARTIES,
    UPDATE_ALLPARTIES
} from "./allparties.types";

export const getAllPartiesAction = (token) => (dispatch) => {
    console.log("hi from all parties action")
    console.log(token, "ABC token")
    const headers = {
        'token': token
    };
    dispatch({ type: LOADING_ALLPARTIES });
    try {
        const url = `https://ca-api-testing.onrender.com/party`;
        axios.get(url, { headers }).then((res) => {
            console.log("🚀 ~ file: allparties.action.js:19 ~ axios.get ~ res:", res)
            dispatch({ type:GET_ALLPARTIES, payload: res.data });
        });
    } catch (error) {
        console.log(error);
        dispatch({ type: ERROR_ALLPARTIES, payload: error });
    }
};

export const getInduvidualPartiesAction = (token, id) => (dispatch) => {
    const headers = {
        token: `${token}`,
    };
    dispatch({ type: LOADING_ALLPARTIES });
    try {
        const url = `${LIVE_URL2}/allparties/${id}`;
        axios.get(url, { headers }).then((res) => {
            dispatch({ type: INDUVIDUAL_ALLPARTIES, payload: res.data.party });
            console.log("abcd", res.data);
        });
    } catch (error) {
        console.log(error);
        dispatch({ type: ERROR_ALLPARTIES, payload: error });
    }
};

export const postAllPartiesAction = (creds, token, firmId) => (dispatch) => {
    const headers = {
        token: `${token}`,
    };
    dispatch({ type: LOADING_ALLPARTIES });
    try {

        const url = `${LIVE_URL2}/party`;
        axios.post(url, creds, { headers }).then((res) => {
            dispatch({ type: SUCCESS_ALLPARTIES, payload: res.data });
            console.log(res);
            if (res.status === 200 || 201) {
                toast.success("All Parties Detail Successfull");
                dispatch(getAllPartiesAction(token, firmId));
            }
        });
    } catch (error) {
        console.log(error);
        if (error?.response?.data?.message) {
            toast.error(error?.response?.data?.message)
        } else {
            toast.error(error?.message)
        }
        dispatch({ type: ERROR_ALLPARTIES, payload: error });
    }
};

export const updateAllPartiesAction = (creds, token, firmId, id) => (dispatch) => {
    const headers = {
        token: `${token}`,
    };
    dispatch({ type: LOADING_ALLPARTIES });
    try {
        const url = `${LIVE_URL2}/allparties/${firmId}/${id}`;
        axios.patch(url, creds, { headers }).then((res) => {
            dispatch({ type: UPDATE_ALLPARTIES, payload: res.data });
            console.log(res);
        });
    } catch (error) {
        console.log(error);
        dispatch({ type: ERROR_ALLPARTIES, id, firmId, payload: error });
    }
};

export const deleteAllPartiesAction = (token, id, firmId) => (dispatch) => {
    const headers = {
        "token": `${token}`
    }
    dispatch({ type: LOADING_ALLPARTIES });
    try {
        const url = `${LIVE_URL2}/allparties/${firmId}/${id}`
        axios.delete(url, { headers }).then((res) => {
            dispatch({ type: DELETE_ALLPARTIES, payload: res.data.party });
            console.log("delete", res.data.party)

            dispatch(getAllPartiesAction(token, firmId, id));
        });
    } catch (error) {
        console.log(error);
        dispatch({ type: ERROR_ALLPARTIES, payload: error });
    }
};




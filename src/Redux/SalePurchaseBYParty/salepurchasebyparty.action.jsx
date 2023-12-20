import axios from "axios";
import { LIVE_URL2 } from "../config/Commen";
import { toast } from "react-toastify";
import {
    DELETE_SALEPURCHASEBYPARTY,
    ERROR_SALEPURCHASEBYPARTY,
    GET_SALEPURCHASEBYPARTY,
    INDUVIDUAL_SALEPURCHASEBYPARTY,
    LOADING_SALEPURCHASEBYPARTY,
    SUCCESS_SALEPURCHASEBYPARTY,
    UPDATE_SALEPURCHASEBYPARTY
} from "./salepurchasebyparty.types";

export const getSalePurchasebyPartyAction = (token, firmId) => (dispatch) => {
    const headers = {
        token: `${token}`,
    };
    dispatch({ type: LOADING_SALEPURCHASEBYPARTY });
    try {
        const url = `${LIVE_URL2}/report/${firmId}/purchase`
        axios.get(url, { headers }).then((res) => {
            console.log("success from salesalepurchase by party");
            dispatch({ type: GET_SALEPURCHASEBYPARTY, payload: res.data });
        });
    } catch (error) {
        console.log(error);
        dispatch({ type: ERROR_SALEPURCHASEBYPARTY, payload: error });
    }
};

export const getInduvidualSalePurchasebyPartyAction = (token, id) => (dispatch) => {
    const headers = {
        token: `${token}`,
    };
    dispatch({ type: LOADING_SALEPURCHASEBYPARTY });
    try {
        const url = `${LIVE_URL2}/party/${id}`;
        axios.get(url, { headers }).then((res) => {
            dispatch({ type: INDUVIDUAL_SALEPURCHASEBYPARTY, payload: res.data.party });
        });
    } catch (error) {
        console.log(error);
        dispatch({ type: ERROR_SALEPURCHASEBYPARTY, payload: error });
    }
};

export const postSalePurchasebyPartyAction = (creds, token, firmId) => (dispatch) => {
    const headers = {
        token: `${token}`,
    };
    dispatch({ type: LOADING_SALEPURCHASEBYPARTY });
    try {
        const url = `${LIVE_URL2}/addPurchase/purchase`;
        axios.post(url, creds, { headers }).then((res) => {
            dispatch({ type: SUCCESS_SALEPURCHASEBYPARTY, payload: res.data });
            if (res.status === 200 || res.status === 201) {
                toast.success("Details Fetched Successfully");
                dispatch(getSalePurchasebyPartyAction(token, firmId));
            }
        });
    } catch (error) {
        console.log(error);
        if (error?.response?.data?.message) {
            toast.error(error?.response?.data?.message);
        } else {
            toast.error(error?.message);
        }
        dispatch({ type: ERROR_SALEPURCHASEBYPARTY, payload: error });
    }
};

export const updateSalePurchasebyPartyAction = (creds, token, firmId, id) => (dispatch) => {
    const headers = {
        token: `${token}`,
    };
    dispatch({ type: LOADING_SALEPURCHASEBYPARTY });
    try {
        const url = `${LIVE_URL2}/add/${firmId}/${id}`;
        axios.patch(url, creds, { headers }).then((res) => {
            dispatch({ type: UPDATE_SALEPURCHASEBYPARTY, payload: res.data });
        });
    } catch (error) {
        console.log(error);
        dispatch({ type: ERROR_SALEPURCHASEBYPARTY, id, firmId, payload: error });
    }
};

export const deleteSalePurchasebyPartyAction = (token, id, firmId) => (dispatch) => {
    const headers = {
        "token": `${token}`
    };
    dispatch({ type: LOADING_SALEPURCHASEBYPARTY });
    try {
        const url = `${LIVE_URL2}/add/${firmId}/${id}`;
        axios.delete(url, { headers }).then((res) => {
            dispatch({ type: DELETE_SALEPURCHASEBYPARTY, payload: res.data.party });
            dispatch(getSalePurchasebyPartyAction(token, firmId, id));
        });
    } catch (error) {
        console.log(error);
        dispatch({ type: ERROR_SALEPURCHASEBYPARTY, payload: error });
    }
};

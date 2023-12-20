import axios from "axios";
import {
    DELETE_REPORT,
    ERROR_REPORT,
    GET_REPORT,
    LOADING_REPORT,
    SUCCESS_REPORT,
    UPDATE_REPORT,
} from "./Report.type";

import { LIVE_URL2 } from "../config/Commen";

export const getReport = (token, firmId) => (dispatch) => {
    const headers = {
        "token": `${token}`
    };

    dispatch({ type: LOADING_REPORT });
    const url = `${LIVE_URL2}/report/${firmId}/getAll`;

    axios
        .get(url, { headers })
        .then((res) => {
            dispatch({ type: GET_REPORT, payload: res.data });
            console.log(res.data)
        })
        .catch((error) => {
            console.log(error);
            dispatch({ type: ERROR_REPORT, payload: error });
        });
};

export const updateReport = (creds, token, firmId, id) => (dispatch) => {
    const headers = {
        "token": `${token}`
    };
    dispatch({ type: LOADING_REPORT });

    const url = `${LIVE_URL2}/report/${firmId}/${id}/update`;

    axios
        .put(url, creds, { headers })
        .then((res) => {
            dispatch({ type: UPDATE_REPORT, payload: res.data });
            console.log(res);
        })
        .catch((error) => {
            console.log(error);
            dispatch({ type: ERROR_REPORT, payload: error });
        });
};


export const deleteSaleInvoice = (token, firmId, id) => (dispatch) => {
    const headers = {
        "token": `${token}`
    }
    dispatch({ type: LOADING_REPORT });
    try {
        const url = `${LIVE_URL2}/report/${firmId}/${id}/delete`;
        axios.post(url, { headers }).then((res) => {
            dispatch({ type: DELETE_REPORT, payload: res.data });
            console.log(res)
        });
    } catch (error) {
        console.log(error);
        dispatch({ type: ERROR_REPORT, payload: error });
    }
};
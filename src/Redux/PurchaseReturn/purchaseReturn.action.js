import axios from "axios";
import {
    LOADING_PURCHASE_RETURN,
    SUCCESS_PURCHASE_RETURN,
    ERROR_PURCHASE_RETURN,
    GET_PURCHASE_RETURN,
    UPDATE_PURCHASE_RETURN,
    DELETE_PURCHASE_RETURN,
} from "./purchaseReturn.types";


export const getPurchaseReturnAction = (token, firmId) => {
    return (dispatch) => {
        const headers = {
            token: `${token}`,
        };
        dispatch({ type: LOADING_PURCHASE_RETURN });
        const url = `https://ca-api-testing.onrender.com/addReturn/return/${firmId}`;
        axios.get(url, { headers }).then((res) => {
            console.log("🚀 ~ file: purchase.action.js:19 ~ axios.get ~ res:", res)
            dispatch({ type: GET_PURCHASE_RETURN, payload: res });
        }).catch(error => {
            console.log(error);
            dispatch({ type: ERROR_PURCHASE_RETURN, payload: error });
        })
    }

};

export const postPurchaseReturnAction = (creds, token, firmId) => (dispatch) => {
    const headers = {
        token: `${token}`,
    };
    dispatch({ type: LOADING_PURCHASE_RETURN });
    try {
        const url = `https://ca-api-testing.onrender.com/addReturn/return/${firmId}`;
        axios.post(url, creds, { headers }).then((res) => {
            dispatch({ type: SUCCESS_PURCHASE_RETURN, payload: res.data });
            console.log(res);
            if (res.status === 200 || 201) {
                alert("Purchase Success");
                dispatch(getPurchaseReturnAction(token, firmId));
            }
        });
    } catch (error) {
        console.log(error);
        dispatch({ type: ERROR_PURCHASE_RETURN, payload: error });
    }
};

export const updatePurchaseReturnAction = (creds, token, firmId, id) => (dispatch) => {
    const headers = {
        token: `${token}`,
    };
    dispatch({ type: LOADING_PURCHASE_RETURN });
    try {
        const url = `https://ca-api-testing.onrender.com/addReturn/return/${id}/${firmId}`;
        axios.patch(url, creds, { headers }).then((res) => {
            dispatch({ type: UPDATE_PURCHASE_RETURN, payload: res.data });
            console.log(res);
        });
    } catch (error) {
        console.log(error);
        dispatch({ type: ERROR_PURCHASE_RETURN, payload: error });
    }
};

export const deletePurchaseReturnAction = (token, id, firmId) => (dispatch) => {
    const headers = {
        "token": `${token}`
    }
    dispatch({ type: LOADING_PURCHASE_RETURN });
    try {
        const url = `https://ca-api-testing.onrender.com/addReturn/return/${id}/${firmId}`
        axios.delete(url, { headers }).then((res) => {
            dispatch({ type: DELETE_PURCHASE_RETURN, payload: res.data.party });
            dispatch(getPurchaseReturnAction(token, firmId));
        });
    } catch (error) {
        console.log(error);
        dispatch({ type: ERROR_PURCHASE_RETURN, payload: error });
    }
};




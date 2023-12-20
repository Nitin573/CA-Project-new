import axios from "axios";
import {
    LOADING_PURCHASEOUT,
    SUCCESS_PURCHASEOUT,
    ERROR_PURCHASEOUT,
    GET_PURCHASEOUT,
    UPDATE_PURCHASEOUT,
    DELETE_PURCHASEOUT
} from "./purchaseout.types";
import { LIVE_URL2 } from "../config/Commen";
import { toast } from "react-toastify";
 const  userDetails =  JSON.parse(sessionStorage.getItem("userDetails")) ?JSON.parse(sessionStorage.getItem("userDetails")):null


export const getPurchaseOutAction = (token, firmId) => (dispatch) => {
    const headers = {
        token: `${userDetails?.token}`,
    };
    dispatch({ type: LOADING_PURCHASEOUT });
    try {
        // const url = `${LIVE_URL2}/purchaseout/${firmId}/purchaseout`;
        const url = `${LIVE_URL2}/addTran/tran`;
        axios.get(url, { headers }).then((res) => {
            dispatch({ type: SUCCESS_PURCHASEOUT, payload: res.data });
        });
    } catch (error) {
        console.log(error);
        dispatch({ type: ERROR_PURCHASEOUT, payload: error });
    }
};

export const postPurchaseOutAction = (creds, token, firmId) => (dispatch) => {
    const headers = {
        token: `${token}`,
    };
    dispatch({ type: LOADING_PURCHASEOUT });
    try {
        // const url = `${LIVE_URL2}/purchaseout/insertpurchaseout/${firmId}`;
        const url = `${LIVE_URL2}/addTran/tran`;
        axios.post(url, creds, { headers }).then((res) => {
            dispatch({ type: SUCCESS_PURCHASEOUT, payload: res.data });
            console.log(res);
            if (res.status === 200 || 201) {
                toast.success("Purchaseout Details Success");
                dispatch(getPurchaseOutAction(token, firmId));
                window.location = "/Payment_Out"
            }
        });
    } catch (error) {
        console.log(error);
        if(error.response?.data?.message){
            toast.error(error.response?.data?.message)
        }else{
            toast.error(error?.message)
        }
        dispatch({ type: ERROR_PURCHASEOUT, payload: error });
    }
};

export const updatePurchaseOutAction = (creds, token , firmId , id) => (dispatch) => {
    const headers = {
        token: `${token}`,
    };
    dispatch({ type: LOADING_PURCHASEOUT });
    try {
        // const url = `${LIVE_URL2}/purchaseout/updatepurchaseout/${firmId}/${id}`;
        const url = `${LIVE_URL2}/addTran/tran/${id}`;
        axios.patch(url, creds, { headers }).then((res) => {
            dispatch({ type: UPDATE_PURCHASEOUT, payload: res.data });
            // console.log(res);
        });
    } catch (error) {
        console.log(error);
        dispatch({ type: ERROR_PURCHASEOUT, payload: error });
    }
};

export const deletePurchaseOutAction = (token, id, firmId) => (dispatch) => {
    const headers = {
        "token": `${token}`
    }
    dispatch({ type: LOADING_PURCHASEOUT });
    try {
        // const url = `${LIVE_URL2}/purchaseout/deletepurchaseout/${firmId}/${id}`
        const url = `${LIVE_URL2}/addTran/tran/${id}`
        axios.delete(url, { headers }).then((res) => {
            dispatch({ type: DELETE_PURCHASEOUT, payload: res.data.party });
            dispatch(getPurchaseOutAction(token, firmId));
        });
    } catch (error) {
        console.log(error);
        dispatch({ type: ERROR_PURCHASEOUT, payload: error });
    }
};




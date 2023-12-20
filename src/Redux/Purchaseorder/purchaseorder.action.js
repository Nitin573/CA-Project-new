import axios from "axios"; 
import {
    LOADING_PURCHASEORDER,
    SUCCESS_PURCHASEORDER,
    ERROR_PURCHASEORDER,
    GET_PURCHASEORDER,
    INDUVIDUAL_PURCHASEORDER,
    UPDATE_PURCHASEORDER,
    DELETE_PURCHASEORDER
} from "./purchaseorder.types";
import { LIVE_URL2 } from "../config/Commen";
import { toast } from "react-toastify";


// ================================================================================
export const getPurchaseOrderAction = (token,firmId) => (dispatch) => {
    const headers = {
        token: `${token}`,
    };
    dispatch({ type: LOADING_PURCHASEORDER });
    try {

        // const url = `${LIVE_URL2}/purchase/${firmId}/purchase`;
        const url = `${LIVE_URL2}/addOrder/order/${firmId}`;
        axios.get(url, { headers }).then((res) => {
            // console.log("🚀 ~ file: purchase.action.js:19 ~ axios.get ~ res:", res)

            dispatch({ type: SUCCESS_PURCHASEORDER, payload: res.data });
        });
    } catch (error) {
        console.log(error);
        dispatch({ type: ERROR_PURCHASEORDER, payload: error });
    }
};

export const getInduvidualPurchaseOrderAction = (token,firmId, id) => (dispatch) => {
    const headers = {
      token: `${token}`,
    };
    dispatch({ type:LOADING_PURCHASEORDER  });
    try {
    const url = `${LIVE_URL2}/addOrder/order/${firmId}/${id}`;
      axios.get(url, { headers }).then((res) => {
        dispatch({ type: INDUVIDUAL_PURCHASEORDER, payload: res.data.party });
        console.log("abcd", res.data);
      });
    } catch (error) {
      console.log(error);
      dispatch({ type: ERROR_PURCHASEORDER, payload: error });
    }
  };

  export const postPurchaseOrderAction = (creds, token, firmId) => (dispatch) => {
    const headers = {
        token: `${token}`,
    };
    dispatch({ type: LOADING_PURCHASEORDER });
    try {
        // const url = `${LIVE_URL2}/purchase/insertpurchase/${firmId}`;
        const url = `${LIVE_URL2}/addOrder/order/${firmId}`;
        axios.post(url, creds, { headers }).then((res) => {
            dispatch({ type: SUCCESS_PURCHASEORDER, payload: res.data });
            console.log(res);
            if (res.status === 200 || 201) {
                toast.success("Purchase Order Success");
                dispatch(getPurchaseOrderAction(token, firmId));
            }
        });
    } catch (error) {
        console.log(error);
        if(error?.response?.data?.message){
            toast.error(error?.response?.data?.message)
        }else{
            toast.error(error?.message)
        }
        dispatch({ type: ERROR_PURCHASEORDER, payload: error });
    }
};

export const updatePurchaseOrderAction = (creds, token , firmId , id) => (dispatch) => {
    const headers = {
        token: `${token}`,
    };
    dispatch({ type: LOADING_PURCHASEORDER});
    try {
        const url = `${LIVE_URL2}/purchaseorder/updatepurchase/${firmId}/${id}`;
        axios.patch(url, creds, { headers }).then((res) => {
            dispatch({ type: UPDATE_PURCHASEORDER, payload: res.data });
            console.log(res);
        });
    } catch (error) {
        console.log(error);
        dispatch({ type: ERROR_PURCHASEORDER,id, firmId,payload: error });
    }
};

export const deletePurchaseOrderAction = (token, id, firmId) => (dispatch) => {
    const headers = {
        "token": `${token}`
    }
    dispatch({ type: LOADING_PURCHASEORDER });
    try {
        const url = `${LIVE_URL2}/purchaseorder/deletepurchase/${firmId}/${id}`
        axios.delete(url, { headers }).then((res) => {
            dispatch({ type: DELETE_PURCHASEORDER, payload: res.data.party });
            console.log("deLETE",res.data.party)

            dispatch(getPurchaseOrderAction(token, firmId,id));
        });
    } catch (error) {
        console.log(error);
        dispatch({ type: ERROR_PURCHASEORDER, payload: error });
    }
};


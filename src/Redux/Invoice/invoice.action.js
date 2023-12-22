import axios from "axios";
import {
  DELETE_INVOICE,
  ERROR_INVOICE,
  GET_INVOICE,
  LOADING_INVOICE,
  SUCCESS_INVOICE,
  UPDATE_INVOICE,
  GET_ONE_INVOICE
} from "./invoice.type";
import { LIVE_URL2 } from "../config/Commen";
import { toast } from "react-toastify";

export const postInvoiceAction =(creds, firmId, token) => (dispatch) => {
  const headers = {
    "token": `${token}`
  }
  dispatch({ type: LOADING_INVOICE });
  try {
    console.log("Hi from invoice before axios hit!");
    // https://ca-api-testing.onrender.com/invoice/firm/6548fee931efc222a0c04f62/saleinvoice
    const url = `https://ca-api-testing.onrender.com/invoice/firm/${firmId}/saleinvoice`
    axios.post(url, creds, { headers }).then((res) => {
      dispatch({ type: SUCCESS_INVOICE, payload: res.data });
      console.log("hi from invoice action",res);
      if (res.status === 201) {
        toast.success(res.data.message)
        // window.location = "/Sale"
      }
    });
  } catch (error) {
    console.log(error);
    toast.error(error?.message)
    dispatch({ type: ERROR_INVOICE, payload: error });
  }
};


export const getInvoiceAction = (token , firmId) => (dispatch) => {
  const headers = {
    "token": `${token}`
  }
  dispatch({ type: LOADING_INVOICE });
  try {
    const url = `${LIVE_URL2}/invoice/firm/${firmId}/saleinvoice`
    console.log("👲👲👲👲", firmId,  url);
    axios.get(url, { headers }).then((res) => {
      // console.log('✅✅✅✅✅', res)
      dispatch({ type: GET_INVOICE, payload: res.data });
    });
  } catch (error) {
    console.log(error);
    dispatch({ type: ERROR_INVOICE, payload: error });
  }
};

export const getOneInvoiceAction = (token , firmId , id) => (dispatch) => {
  const headers = {
    "token": `${token}`
  }
  dispatch({ type: LOADING_INVOICE });
  try {
    const url = `${LIVE_URL2}/invoice/firm/${firmId}/saleinvoice/${id}`
    axios.get(url, { headers }).then((res) => {
      dispatch({ type: GET_ONE_INVOICE, payload: res.data });
      console.log("abcd", res.data );
    });
  } catch (error) {
    console.log(error);
    dispatch({ type: ERROR_INVOICE, payload: error });
  }
};



export const updateInvoiceAction = (creds, token) => (dispatch) => {
  const headers = {
    "token": `${token}`
  }
  dispatch({ type: LOADING_INVOICE });
  try {
    const url = `${LIVE_URL2}/party/id`
    axios.put(url, creds, { headers }).then((res) => {
      dispatch({ type: UPDATE_INVOICE, payload: res.data });
      console.log(res);

    });
  } catch (error) {
    console.log(error);
    dispatch({ type: ERROR_INVOICE, payload: error });
  }
};


//   export const deleteInvoiceAction = (token) => (dispatch) => {
    // const headers={
    //     "token":`${token}`
    // }
//     dispatch({ type: LOADING_INVOICE });
//     try {
//       const url=`https://tax-service.onrender.com/party/${id}`
//       axios.post(url,{ headers }).then((res) => {
//         dispatch({ type: DELETE_INVOICE, payload: res.data });
//         console.log(res)
//       });
//     } catch (error) {
//       console.log(error);
//       dispatch({ type: ERROR_INVOICE, payload: error });
//     }
//   };
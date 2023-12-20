import axios from "axios";
import {
    DELETE_PURCHASE_REPORT,
    ERROR_PURCHASE_REPORT,
    GET_PURCHASE_REPORT,
    LOADING_PURCHASE_REPORT,
    SUCCESS_PURCHASE_REPORT,
    UPDATE_PURCHASE_REPORT,
} from "./PurchaseReport.type";

import { LIVE_URL2 } from "../config/Commen";


export const postPurchaseReport = (creds, firmId, token) => (dispatch) => {
    const headers = {
        "token": `${token}`
    };
    dispatch({ type: LOADING_PURCHASE_REPORT });
    const url = `${LIVE_URL2}/report/${firmId}/purchase`;

    axios
        .post(url, creds, { headers })
        .then((res) => {
            dispatch({ type: SUCCESS_PURCHASE_REPORT, payload: res.data });
            console.log(res);
            if (res.status === 201) {
                alert(res.data.message);
            }
        })
        .catch((error) => {
            console.log(error);
            dispatch({ type: ERROR_PURCHASE_REPORT, payload: error });
        });
};

export const getPurchaseReport = (firmId, token) => (dispatch) => {
    const headers = {
        "token": `${token}`
    };

    dispatch({ type: LOADING_PURCHASE_REPORT });
  
    const url = `${LIVE_URL2}/report/${firmId}/purchase`;

    axios
        .get(url, { headers })
        .then((res) => {
            dispatch({ type: GET_PURCHASE_REPORT, payload: res.data });
            console.log(res.data)
        })
        .catch((error) => {
            console.log(error);
            dispatch({ type: ERROR_PURCHASE_REPORT, payload: error });
        });
};

export const updatePurchaseInvoice = (creds, firmId, token) => (dispatch) => {
    const headers = {
        "token": `${token}`
    };
    dispatch({ type: LOADING_PURCHASE_REPORT });
    const url = `${LIVE_URL2}/report/${firmId}/purchase`;

    axios
        .put(url, creds, { headers })
        .then((res) => {
            dispatch({ type: UPDATE_PURCHASE_REPORT, payload: res.data });
            console.log(res);
        })
        .catch((error) => {
            console.log(error);
            dispatch({ type: ERROR_PURCHASE_REPORT, payload: error });
        });
};


//   export const deletePurchaseInvoice = (token) => (dispatch) => {
// const headers={
//     "token":`${token}`
// }
//     dispatch({ type: LOADING_PURCHASE_REPORT });
//     try {
//       const url=`https://tax-service.onrender.com/PURCHASEinvoice/id`
//       axios.post(url,{ headers }).then((res) => {
//         dispatch({ type: DELETE_PURCHASE_REPORT, payload: res.data });
//         console.log(res)
//       });
//     } catch (error) {
//       console.log(error);
//       dispatch({ type: ERROR_PURCHASE_REPORT, payload: error });
//     }
//   };
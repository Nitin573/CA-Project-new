import axios from "axios";
import {
    DELETE_SALE_REPORT,
    ERROR_SALE_REPORT,
    GET_SALE_REPORT,
    LOADING_SALE_REPORT,
    SUCCESS_SALE_REPORT,
    UPDATE_SALE_REPORT,
} from "./saleReport.type";

import { LIVE_URL2 } from "../config/Commen";


export const postSaleReport = (creds, firmId, token) => (dispatch) => {
    const headers = {
        "token": `${token}`
    };
    dispatch({ type: LOADING_SALE_REPORT });
    const url = `${LIVE_URL2}/report/${firmId}/sale`;

    axios
        .post(url, creds, { headers })
        .then((res) => {
            dispatch({ type: SUCCESS_SALE_REPORT, payload: res.data });
            console.log(res);
            if (res.status === 201) {
                alert(res.data.message);
            }
        })
        .catch((error) => {
            console.log(error);
            dispatch({ type: ERROR_SALE_REPORT, payload: error });
        });
};

export const getSaleReport = (firmId, token) => (dispatch) => {
    const headers = {
        "token": `${token}`
    };

    dispatch({ type: LOADING_SALE_REPORT });
  
    const url = `${LIVE_URL2}/report/${firmId}/sale`;

    axios
        .get(url, { headers })
        .then((res) => {
            dispatch({ type: GET_SALE_REPORT, payload: res.data });
            console.log(res.data)
        })
        .catch((error) => {
            console.log(error);
            dispatch({ type: ERROR_SALE_REPORT, payload: error });
        });
};

export const updateSaleInvoice = (creds, firmId, token) => (dispatch) => {
    const headers = {
        "token": `${token}`
    };
    dispatch({ type: LOADING_SALE_REPORT });
    const url = `${LIVE_URL2}/report/${firmId}/sale`;

    axios
        .put(url, creds, { headers })
        .then((res) => {
            dispatch({ type: UPDATE_SALE_REPORT, payload: res.data });
            console.log(res);
        })
        .catch((error) => {
            console.log(error);
            dispatch({ type: ERROR_SALE_REPORT, payload: error });
        });
};


//   export const deleteSaleInvoice = (token) => (dispatch) => {
// const headers={
//     "token":`${token}`
// }
//     dispatch({ type: LOADING_SALE_REPORT });
//     try {
//       const url=`https://tax-service.onrender.com/saleinvoice/id`
//       axios.post(url,{ headers }).then((res) => {
//         dispatch({ type: DELETE_SALE_REPORT, payload: res.data });
//         console.log(res)
//       });
//     } catch (error) {
//       console.log(error);
//       dispatch({ type: ERROR_SALE_REPORT, payload: error });
//     }
//   };
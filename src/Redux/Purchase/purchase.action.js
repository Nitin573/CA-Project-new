import axios from "axios";
import {
  LOADING_PURCHASE,
  SUCCESS_PURCHASE,
  ERROR_PURCHASE,
  GET_PURCHASE,
  INDUVIDUAL_PURCHASE, // Updated action type name
  UPDATE_PURCHASE,
  DELETE_PURCHASE
} from "./purchase.types";
import { LIVE_URL2 } from "../config/Commen";
import { toast } from "react-toastify";

export const getPurchaseAction = (token, firmId) => {
  return async (dispatch) => {
    dispatch({ type: LOADING_PURCHASE });
    try {
      const headers = {
        token: token,
      };
      const url = `${LIVE_URL2}/addOrder/order/${firmId}`;
      const response = await axios.get(url, { headers });
      dispatch({ type: SUCCESS_PURCHASE, payload: response.data });
    } catch (error) {
      console.log(error);
      dispatch({ type: ERROR_PURCHASE, payload: error });
    }
  };
};

export const getInduvidualPurchaseAction = (token, firmId, id) => {
  return async (dispatch) => {
    dispatch({ type: LOADING_PURCHASE });
    try {
      const headers = {
        token: token,
      };
      const url = `${LIVE_URL2}/addOrder/order/${id}${firmId}`;
      const response = await axios.get(url, { headers });
      dispatch({ type: INDUVIDUAL_PURCHASE, payload: response.data.party });
      console.log("abcd", response.data);
    } catch (error) {
      console.log(error);
      dispatch({ type: ERROR_PURCHASE, payload: error });
    }
  };
};

export const postPurchaseAction = (creds, token, firmId) => {
  return async (dispatch) => {
    dispatch({ type: LOADING_PURCHASE });
    try {
      const headers = {
        token: token,
      };
      
      const url = `${LIVE_URL2}/addOrder/order/${firmId}`;
      console.log(firmId,"creds");
      const response = await axios.post(url, creds, { headers });
      
      console.log(response);
      if (response.status === 200 || response.status === 201) {
        dispatch({ type: SUCCESS_PURCHASE, payload: response.data });
        toast.success("Purchase Success");
        dispatch(getPurchaseAction(token, firmId));
      }
    } catch (error) {
      console.log(error);
      if (error?.response?.data?.message) {
        toast.error(error?.response?.data?.message);
      } else {
        toast.error(error?.message);
      }
      dispatch({ type: ERROR_PURCHASE, payload: error });
    }
  };
};

// export const updatePurchaseAction = (creds, token, firmId, id) => {
//   return async (dispatch) => {
//     dispatch({ type: LOADING_PURCHASE });
//     try {
//       const headers = {
//         token: token,
//       };
//       const url = `${LIVE_URL2}/purchase/updatepurchase/${firmId}/${id}`;
//       const response = await axios.patch(url, creds, { headers });
//       dispatch({ type: UPDATE_PURCHASE, payload: response.data });
//       console.log(response);
//     } catch (error) {
//       console.log(error);
//       dispatch({ type: ERROR_PURCHASE, id, firmId, payload: error });
//     }
//   };
// };

export const deletePurchaseAction = (token, id, firmId) => {
  return async (dispatch) => {
    dispatch({ type: LOADING_PURCHASE });
    try {
      const headers = {
        token: token,
      };
      const url = `${LIVE_URL2}/addOrder/order/${id}${firmId}`;
      const response = await axios.delete(url, { headers });
      dispatch({ type: DELETE_PURCHASE, payload: response.data.party });
      console.log("DELETE", response.data.party);

      dispatch(getPurchaseAction(token, firmId, id));
    } catch (error) {
      console.log(error);
      dispatch({ type: ERROR_PURCHASE, payload: error });
    }
  };
};
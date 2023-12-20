import axios from "axios";
import {
  DELETE_STOCKS,
  ERROR_STOCKS,
  GET_STOCKS,
  LOADING_STOCKS,
  SUCCESS_STOCKS,
  UPDATE_STOCKS,
} from "./stock.types";
import { LIVE_URL2 } from "../config/Commen";
import { toast } from "react-toastify";

export const getStockAction = (token, firmId) => (dispatch) => {
  const headers = {
    token: `${token}`,
  };
  dispatch({ type: LOADING_STOCKS });

  const url = `${LIVE_URL2}/item/${firmId}/products`;
  console.log("hi from stock action",url);
  axios
    .get(url, { headers })
    .then((res) => {
      dispatch({ type: GET_STOCKS, payload: res.data });
    })
    .catch((error) => {
      dispatch({ type: ERROR_STOCKS, payload: error });
    });
};

export const postStockAction = (creds, token) => (dispatch) => {
  const headers = {
    token: `${token}`,
  };
  dispatch({ type: LOADING_STOCKS });

  const url = `${LIVE_URL2}/item/insertproduct`;
  axios
    .post(url, creds, { headers })
    .then((res) => {
      dispatch({ type: SUCCESS_STOCKS, payload: res.data });
      // console.log(res);
      if (res.status === 201) {
        toast.success("Item added successfully")
        // alert();
        dispatch(getStockAction(token, creds?.firmId));
      }
    })
    .catch((error) => {
      dispatch({ type: ERROR_STOCKS, payload: error });
      if(error.response?.data?.message){
        toast.error(error.response.data?.message)
      }
    });
};

export const updateStockAction = (creds, token) => (dispatch) => {
  const headers = {
    token: `${token}`,
  };
  dispatch({ type: LOADING_STOCKS });
  try {
    const url = `${LIVE_URL2}/items/id`;
    axios.put(url, creds, { headers }).then((res) => {
      dispatch({ type: UPDATE_STOCKS, payload: res.data });
      console.log(res);
    });
  } catch (error) {
    console.log(error);
    dispatch({ type: ERROR_STOCKS, payload: error });
  }
};

export const deleteStockAction = (token, id) => (dispatch) => {
  const headers = {
    "token": `${token}`
  }
  dispatch({ type: LOADING_STOCKS });
  try {
    const url = `${LIVE_URL2}/item/product/${id}`
    axios.delete(url, { headers }).then((res) => {
      dispatch({ type: DELETE_STOCKS, payload: res.data });
    });
  } catch (error) {
    console.log(error);
    dispatch({ type: ERROR_STOCKS, payload: error });
  }
};

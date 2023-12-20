
import axios from "axios";
import { LIVE_URL2 } from "../config/Commen";
import { toast } from "react-toastify";
import { DELETE_PARTYREPORTBYITEM, ERROR_PARTYREPORTBYITEM, INDUVIDUAL_PARTYREPORTBYITEM, LOADING_PARTYREPORTBYITEM, SUCCESS_PARTYREPORTBYITEM, UPDATE_PARTYREPORTBYITEM } from "./partyreportbyitem.types";

export const getpartyReportByAction = (token) => (dispatch) => {
    console.log("hi from party report by item")
    const headers = {
        token: `${token}`,
    };
    dispatch({ type: LOADING_PARTYREPORTBYITEM });
    try {

        const url = `${LIVE_URL2}/additem`;
        axios.get(url, { headers }).then((res) => {
            console.log("🚀 res:", res)
            dispatch({ type: SUCCESS_PARTYREPORTBYITEM, payload: res.data });
        });
    } catch (error) {
        console.log(error);
        dispatch({ type: ERROR_PARTYREPORTBYITEM, payload: error });
    }
};

export const getInduvidualPartyReportByItemAction = (token, id) => (dispatch) => {
    const headers = {
      token: `${token}`,
    };
    dispatch({ type:LOADING_PARTYREPORTBYITEM  });
    try {
    const url = `${LIVE_URL2}/add/${id}`;
      axios.get(url, { headers }).then((res) => {
        dispatch({ type: INDUVIDUAL_PARTYREPORTBYITEM, payload: res.data.party });
        console.log("abcd", res.data);
      });
    } catch (error) {
      console.log(error);
      dispatch({ type: ERROR_PARTYREPORTBYITEM, payload: error });
    }
  };

  export const postPartyReportByItemAction = (creds, token, firmId) => (dispatch) => {
    const headers = {
        token: `${token}`,
    };
    dispatch({ type: LOADING_PARTYREPORTBYITEM });
    try {
        const url = `${LIVE_URL2}/add`;
        axios.post(url, creds, { headers }).then((res) => {
            dispatch({ type: SUCCESS_PARTYREPORTBYITEM, payload: res.data });
            console.log(res);
            if (res.status === 200 || 201) {
                toast.success("Report Get Success");
                dispatch(getpartyReportByAction(token, firmId));
            }
        });
    } catch (error) {
        console.log(error);
        if(error?.response?.data?.message){
            toast.error(error?.response?.data?.message)
        }else{
            toast.error(error?.message)
        }
        dispatch({ type: ERROR_PARTYREPORTBYITEM, payload: error });
    }
};

export const updatePartyReportByAction = (creds, token , firmId , id) => (dispatch) => {
    const headers = {
        token: `${token}`,
    };
    dispatch({ type: LOADING_PARTYREPORTBYITEM });
    try {
        const url = `${LIVE_URL2}/add/${firmId}/${id}`;
        axios.patch(url, creds, { headers }).then((res) => {
            dispatch({ type: UPDATE_PARTYREPORTBYITEM, payload: res.data });
            console.log(res);
        });
    } catch (error) {
        console.log(error);
        dispatch({ type: ERROR_PARTYREPORTBYITEM,id, firmId,payload: error });
    }
};

export const deletepartyReportByAction = (token, id, firmId) => (dispatch) => {
    const headers = {
        "token": `${token}`
    }
    dispatch({ type: LOADING_PARTYREPORTBYITEM });
    try {
        const url = `${LIVE_URL2}/add/${firmId}/${id}`
        axios.delete(url, { headers }).then((res) => {
            dispatch({ type: DELETE_PARTYREPORTBYITEM, payload: res.data.party });
            console.log("deLETE",res.data.party)

            dispatch(getpartyReportByAction(token, firmId,id));
        });
    } catch (error) {
        console.log(error);
        dispatch({ type: ERROR_PARTYREPORTBYITEM, payload: error });
    }
};




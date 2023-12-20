
import axios from "axios";
import { LIVE_URL2 } from "../config/Commen";
import { toast } from "react-toastify";
import {
  DELETE_PARTIES_PROFITLOSS,
  ERROR_PARTIES_PROFITLOSS,
  GET_PARTIES_PROFITLOSS,
  INDUVIDUAL_PARTY_PROFITLOSS,
  LOADING_PARTIES_PROFITLOSS,
  SEARCH_PARTIES_PROFITLOSS,
  SUCCESS_PARTIES_PROFITLOSS,
  UPDATE_PARTIES_PROFITLOSS,
  GET_PARTY_ID
} from "./partyprofitloss.types";



export const getPartiesAction = (token, firmId) => (dispatch) => {
  const headers = {
    token: `${token}`,
  };
  dispatch({ type: LOADING_PARTIES_PROFITLOSS });
  //${LIVE_URL2}/${firmId}/party
  try {
    const url = `${LIVE_URL2}/${firmId}/party`;
    axios.get(url, { headers }).then((res) => {
      dispatch({ type: GET_PARTIES_PROFITLOSS, payload: res.data });
      console.log("abcd", res.data);
    });
  } catch (error) {
    dispatch({ type: ERROR_PARTIES_PROFITLOSS, payload: error });
    if (error.response.data?.message) {
      toast.error(error.response.data?.message)
    }
  }
};

export const getInduvidualPartiesAction = (token, firmId, id) => (dispatch) => {

  const headers = {
    token: `${token}`,
  };
  dispatch({ type: LOADING_PARTIES_PROFITLOSS });
  try {
    const url = `${LIVE_URL2}/${firmId}/party/${id}`;
    axios.get(url, { headers }).then((res) => {
      dispatch({ type: INDUVIDUAL_PARTY_PROFITLOSS, payload: res.data });
      console.log("abcd", res.data);
    });
  } catch (error) {
    dispatch({ type: ERROR_PARTIES_PROFITLOSS, payload: error });
  }
};

export const postPartiesAction = (creds, token, firmId, modal1) => (dispatch) => {
  console.log(token)
  console.log("hi", modal1, firmId)
  const headers = {
    token: `${token}`,
  };
  dispatch({ type: LOADING_PARTIES_PROFITLOSS });
  try {
    const url = `${LIVE_URL2}/${firmId}/party`;
    axios.post(url, creds, { headers }).then((res) => {
      dispatch({ type: SUCCESS_PARTIES_PROFITLOSS, payload: res.data });
      // console.log(res);
      if (res.status === 201 || 200) {
        toast.success("party register success");
        modal1.onClose()
        dispatch(getPartiesAction(token, firmId));
      }
    });
  } catch (error) {
    console.log(error, "<<<16AABCU9603R1ZQ");
    // modal1.onClose()
    if (error.response.data?.message) {
      toast.error(error.response.data?.message ? error.response.data?.message : "Please try another email")
    } else {
      toast.error(error?.message)
    }
    dispatch({ type: ERROR_PARTIES_PROFITLOSS, payload: error });
  }
};

export const updatePartiesAction = (creds, token) => (dispatch) => {
  const headers = {
    token: `${token}`,
  };
  dispatch({ type: LOADING_PARTIES_PROFITLOSS });
  try {
    const url = `${LIVE_URL2}/party/id`;
    axios.put(url, creds, { headers }).then((res) => {
      dispatch({ type: UPDATE_PARTIES_PROFITLOSS, payload: res.data });
      // console.log(res);
    });
  } catch (error) {
    console.log(error);
    dispatch({ type: ERROR_PARTIES_PROFITLOSS, payload: error });
  }
};

export const searchParty = (partyName, token, firmId) => (dispatch) => {
  const headers = {
    token: `${token}`,
  };
  dispatch({ type: LOADING_PARTIES_PROFITLOSS });
  try {
    const url = `${LIVE_URL2}/${firmId}/party/search?name=${partyName}`;
    axios.put(url, partyName, { headers }).then((res) => {
      dispatch({ type: SEARCH_PARTIES_PROFITLOSS, payload: res.data });
      // console.log(res);
    });
  } catch (error) {
    console.log(error);
    dispatch({ type: ERROR_PARTIES_PROFITLOSS, payload: error });
  }
};

export const deletePartiesAction = (token, id, firmId) => (dispatch) => {
  const headers = {
    "token": `${token}`
  }
  dispatch({ type: LOADING_PARTIES_PROFITLOSS });
  try {
    const url = `${LIVE_URL2}/party/${id}`
    axios.post(url, { headers }).then((res) => {
      dispatch({ type: DELETE_PARTIES_PROFITLOSS, payload: res.data });
      dispatch(getPartiesAction(token, firmId));

    });
  } catch (error) {
    dispatch({ type: ERROR_PARTIES_PROFITLOSS, payload: error });
    if (error.response.data?.message) {
      toast.error(error.response.data?.message)
    }
  }
};


export const setPartyId = (partyId) => (dispatch) => {
  dispatch({ type: GET_PARTY_ID, payload: partyId })
}

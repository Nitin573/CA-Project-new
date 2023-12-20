import axios from "axios";
import { DELETE_PARTIES, ERROR_PARTIES, 
  GET_PARTIES, 
  GET_PARTY_ID, INDUVIDUAL_PARTY, LOADING_PARTIES, SEARCH_PARTIES,
   SUCCESS_PARTIES, UPDATE_PARTIES } from "./parties.types";
import { LIVE_URL2 } from "../config/Commen";
import { toast } from "react-toastify";

export const getPartiesAction = (token, firmId) => (dispatch) => {
  const headers = {
    token: `${token}`,
  };
  dispatch({ type: LOADING_PARTIES });
  //${LIVE_URL2}/${firmId}/party
  try {
    const url = `${LIVE_URL2}/${firmId}/party`;
    axios.get(url, { headers }).then((res) => {
      dispatch({ type: GET_PARTIES, payload: res.data.party });
    });
  } catch (error) {
    dispatch({ type: ERROR_PARTIES, payload: error });
    if(error.response.data?.message){
      toast.error(error.response.data?.message)
    }
  }
};

export const getInduvidualPartiesAction = (token, firmId , id) => (dispatch) => {
  const headers = {
    token: `${token}`,
  };
  dispatch({ type: LOADING_PARTIES });
  try {
    const url = `${LIVE_URL2}/${firmId}/party/${id}`;
    axios.get(url, { headers }).then((res) => {
      dispatch({ type: INDUVIDUAL_PARTY, payload: res.data.party });
    });
  } catch (error) {
    dispatch({ type: ERROR_PARTIES, payload: error });
  }
};

export const postPartiesAction = (creds, token, firmId) => (dispatch) => {
  const headers = {
    token: `${token}`,
  };
  console.log('postPratiesAction', headers)
  dispatch({ type: LOADING_PARTIES });

  const url = `${LIVE_URL2}/${firmId}/party`;
  
  axios.post(url, creds, { headers })
    .then((res) => {
      dispatch({ type: SUCCESS_PARTIES, payload: res.data });

      if (res.status === 201 || res.status === 200) {
        alert("party register success");
        dispatch(getPartiesAction(token, firmId));
      }
    })
    .catch((error) => {
      dispatch({ type: ERROR_PARTIES, payload: error });
      if (error.response && error.response.data?.message) {
        toast.error(error.response.data.message);
      } else {
        toast.error("An error occurred while adding the party.");
      }
    });
};


export const updatePartiesAction = (creds, token) => (dispatch) => {
  const headers = {
    token: `${token}`,
  };
  dispatch({ type: LOADING_PARTIES });
  try {
    const url = `${LIVE_URL2}/party/id`;
    axios.put(url, creds, { headers }).then((res) => {
      dispatch({ type: UPDATE_PARTIES, payload: res.data });

    });
  } catch (error) {
    dispatch({ type: ERROR_PARTIES, payload: error });
  }
};

export const searchParty = (partyName, token , firmId) => (dispatch) => {
  const headers = {
    token: `${token}`,
  };
  dispatch({ type: LOADING_PARTIES });
  try {
    const url = `${LIVE_URL2}/${firmId}/party/search?name=${partyName}`;
    axios.put(url, partyName, { headers }).then((res) => {
      dispatch({ type: SEARCH_PARTIES, payload: res.data });

    });
  } catch (error) {
    dispatch({ type: ERROR_PARTIES, payload: error });
  }
};

export const deletePartiesAction = (token,id,firmId) => (dispatch) => {
const headers={
    "token":`${token}`
}
    dispatch({ type: LOADING_PARTIES });
    try {
      const url=`${LIVE_URL2}/party/${id}`
      axios.post(url,{ headers }).then((res) => {
        dispatch({ type: DELETE_PARTIES, payload: res.data.party });
        dispatch(getPartiesAction(token, firmId));

      });
    } catch (error) {
      dispatch({ type: ERROR_PARTIES, payload: error });
      if(error.response.data?.message){
        toast.error(error.response.data?.message)
      }
    }
  };


export const setPartyId=(partyId)=>(dispatch)=>{
     dispatch({type:GET_PARTY_ID,payload:partyId})
}
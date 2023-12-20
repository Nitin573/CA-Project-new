
import axios from "axios";
import { LIVE_URL2 } from "../config/Commen";
import { toast } from "react-toastify";
// import { createAsyncThunk } from '@reduxjs/toolkit';
import { ERROR_PARTIES_STATEMENT, GET_INDIVIDUAL_PARTIES_STATEMENT, GET_PARTIES_STATEMENT, 
    LOADING_PARTIES_STATEMENT,  GET_TRANSACTIONS_FULFILLED, SET_PARTY_ID } from "./partystatement.types";

    
export const getPartiesStatement = (token, firmId) => (dispatch) => {
    const headers = {
        token: `${token}`,
    };
    dispatch({ type: LOADING_PARTIES_STATEMENT });
    try {
        const url = `https://ca-api-testing.onrender.com/report/${firmId}/getAll`;
        axios.get(url, { headers }).then((res) => {
            dispatch({ type: GET_PARTIES_STATEMENT, payload: res.data });
            console.log("Party Statement: ", res.data);
        });
    } catch (error) {
        dispatch({ type: ERROR_PARTIES_STATEMENT, payload: error });
        if (error.response?.data?.message) {
            toast.error(error.response.data.message);
        }
    }
};

export const getIndividualPartiesStatement = (token, firmId,id) => (dispatch) => {
    const headers = {
        token: `${token}`,
    };
    dispatch({ type: LOADING_PARTIES_STATEMENT });
    try {
        const url = `${LIVE_URL2}/${firmId}/party/${id}`;
        axios.get(url, { headers }).then((res) => {
            dispatch({ type: GET_INDIVIDUAL_PARTIES_STATEMENT, payload: res.data });
            console.log("Party Statement Data: ", res.data);
        });
    } catch (error) {
        dispatch({ type: ERROR_PARTIES_STATEMENT, payload: error });
        if (error.response?.data?.message) {
            toast.error(error.response.data.message);
        }
    }
};


export const getPartiesStatementByDate = (token, firmId, startDate, endDate) => (dispatch) => {
    const headers = {
        token: `${token}`,
    };
    dispatch({ type: LOADING_PARTIES_STATEMENT });
    try {
        console.log("hi from statement date action", startDate, endDate, firmId, token)
        // https://ca-api-testing.onrender.com/:firmId/party/gettransactions
        const url = `https://ca-api-testing.onrender.com/report/${firmId}/party/date?startDate=${startDate}&endDate=${endDate}`;
        axios.get(url, { headers }).then((res) => {
            dispatch({ type: GET_PARTIES_STATEMENT, payload: res.data });
            console.log("Party data with date ", res.data);
           
            
        });
    } catch (error) {
        dispatch({ type: ERROR_PARTIES_STATEMENT, payload: error });
        if (error.response?.data?.message) {
            toast.error(error.response.data.message);
        }
    }
};


export const setPartyId=(partyId)=>(dispatch)=>{
    dispatch({type:SET_PARTY_ID, payload: partyId})
}






export const getTransactions = (token, firmId, partyId) => {
    return async (dispatch) => {
      try {
        console.log(firmId)
        const response = await axios.get(`${firmId}/party/${partyId}/gettransactions`, {
          headers: {
            Authorization: `Bearer ${token}`,
          }
        //   params: {
        //     firmId: firmId,
        //   },
        });
        console.log(firmId)
        dispatch({ type: GET_TRANSACTIONS_FULFILLED, payload: response.data });
//       console.log('transaction data ', response.data);
        // Dispatch success action if needed
      }  catch (error) {
        // Dispatch error action
        console.error('Axios Error:', error);
        console.error('Response Data:', error.response ? error.response.data : 'No response data');
        dispatch({ type: 'GET_TRANSACTIONS_ERROR', payload: error.message });
      }
    };
  };
  

// export const getTransactions = (token, firmId, partyId) => async (dispatch) => {
//     const headers = {
//       token: `${token}`,
//     };
  
//     dispatch({ type: LOADING_PARTIES_STATEMENT });
  
//     try {
//       const url = `https://ca-api-testing.onrender.com/${firmId}/party/${partyId}gettransactions`;
//       const response = await axios.get(url, { headers });
  
//       dispatch({ type: GET_TRANSACTIONS_FULFILLED, payload: response.data });
//       console.log('transaction data ', response.data);
//     } catch (error) {
//       console.error("Error fetching transactions:", error);
//       dispatch({ type: ERROR_PARTIES_STATEMENT, payload: error });
  
//       if (error.response) {
//         console.error("Response data:", error.response.data);
//       }
  
//       if (error.response?.data?.message) {
//         toast.error(error.response.data.message);
//       }
//     }
//   };
  
  


// export const getTransactions = (token, firmId) => async (dispatch) => {
//     const headers = {
//         token: `${token}`,
//     };
//     // console.log("partyId from action", partyId)
//     console.log("token from action", token)
//     dispatch({ type: LOADING_PARTIES_STATEMENT });
//     try {
//       console.log("partyId from action in function",  token, firmId)
//       const url = `https://ca-api-testing.onrender.com/${firmId}/party/gettransactions`;
//       const response = await axios.get(url, {},{ headers });
//       dispatch({ type: GET_TRANSACTIONS_FULFILLED, payload: response.data });
//       console.log('transaction data ', response.data);
//     } catch (error) {
//         console.error("Error fetching transactions:", error);
//         dispatch({ type: ERROR_PARTIES_STATEMENT, payload: error });
      
//         if (error.response) {
//           console.error("Response data:", error.response.data);
//         }
      
//         if (error.response?.data?.message) {
//           toast.error(error.response.data.message);
//         }
//       }
//   };

//   export const fetchData = () => async (dispatch) => {
//     dispatch({ type: FETCH_DATA_REQUEST });
  
//     try {
//       const data = await fetchDataFromAPI();
//       dispatch({ type: FETCH_DATA_SUCCESS, payload: data });
//     } catch (error) {
//       dispatch({ type: FETCH_DATA_FAILURE, payload: error });
//     }
//   };
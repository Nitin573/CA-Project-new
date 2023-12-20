import {
    DELETE_TRANSACTION,
    ERROR_TRANSACTION,
    GET_TRANSACTION,
    LOADING_TRANSACTION,
    SUCCESS_TRANSACTION,
    UPDATE_TRANSACTION,
  } from "./transaction.types";
  import { LIVE_URL2 } from "../config/Commen";
  
  const initialState = {
    loading: false,
    error: false,
   transactionData: [],
  };
  export const transactionReducer = (state = initialState, { type, payload }) => {
    switch (type) {
      case LOADING_TRANSACTION: {
        return { ...state, loading: true, error: false };
      }
      case SUCCESS_TRANSACTION: {
        return { ...state, loading: false, error: false,transactionData: payload };
      }
     
      case GET_TRANSACTION: {
        return { ...state, loading: false, error: false,transactionData: payload };
      }
      case UPDATE_TRANSACTION: {
        return { ...state, loading: false, error: false,transactionData: payload };
      }
      case DELETE_TRANSACTION: {
        return { ...state, loading: false, error: false,transactionData: payload };
      }
      case ERROR_TRANSACTION: {
        return { ...state, loading: false, error: true,transactionData: payload};
      }
      default: {
        return state;
      }
    }
  };
  
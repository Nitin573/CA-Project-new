import {
    LOADING_PURCHASEOUT,
    SUCCESS_PURCHASEOUT,
    ERROR_PURCHASEOUT,
    GET_PURCHASEOUT,
    UPDATE_PURCHASEOUT,
    DELETE_PURCHASEOUT,
  } from "./purchaseout.types";
  
  const initialState = {
    loading: false,
    error: false,
    purchaseOutData: [],
  }
  export const purchaseOutReducer = (state = initialState, { type, payload }) => {
    switch (type) {
      case LOADING_PURCHASEOUT: {
        return { ...state, loading: true, error: false };
      }
      case SUCCESS_PURCHASEOUT: {
        console.log(payload);
        return { ...state, loading: false, error: false, purchaseOutData: payload };
      }
      case ERROR_PURCHASEOUT: {
        return { ...state, loading: false, error: false, purchaseOutData: payload };
      }
      case UPDATE_PURCHASEOUT: {
        return { ...state, loading: false, error: false, purchaseOutData: payload };
      }
      case DELETE_PURCHASEOUT: {
        return { ...state, loading: false, error: false , purchaseOutData: payload };
      }
      default: {
        return state;
      }
    }
  };
  
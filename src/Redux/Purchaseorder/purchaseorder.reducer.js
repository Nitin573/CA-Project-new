import {
    LOADING_PURCHASEORDER,
    SUCCESS_PURCHASEORDER,
    ERROR_PURCHASEORDER,
    GET_PURCHASEORDER,
    UPDATE_PURCHASEORDER,
    DELETE_PURCHASEORDER,
  } from "./purchaseorder.types";
  
  const initialState = {
    loading: false,
    error: false,
    purchaseOrderData: [],
  }

  export const purchaseOrderReducer = (state = initialState, { type, payload }) => {
    
    switch (type) {
      case LOADING_PURCHASEORDER: {
        return { ...state, loading: true, error: false };
      }
      case SUCCESS_PURCHASEORDER: {
        console.log(payload);
        return { ...state, loading: false, error: false, purchaseOrderData: payload };
      }
      case ERROR_PURCHASEORDER: {
        return { ...state, loading: false, error: false, purchaseOrderData: payload };
      }
      case UPDATE_PURCHASEORDER: {
        return { ...state, loading: false, error: false, purchaseOrderData: payload };
      }
      case DELETE_PURCHASEORDER: {
        return { ...state, loading: false, error: false , purchaseOrderData: payload };
      }
      default: {
        return state;
      }
    }
    
  };
  
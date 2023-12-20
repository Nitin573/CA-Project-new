import {
  LOADING_PURCHASE_RETURN,
  SUCCESS_PURCHASE_RETURN,
  ERROR_PURCHASE_RETURN,
  GET_PURCHASE_RETURN,
  UPDATE_PURCHASE_RETURN,
  DELETE_PURCHASE_RETURN,
} from "./purchaseReturn.types";

const initialState = {
  loading: false,
  error: false,
  purchaseReturnData: [],
  getPurchaseReturnData: [], // Add this line back to the initial state
};

export const purchaseReturnReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOADING_PURCHASE_RETURN: {
      return { ...state, loading: true, error: false };
    }
    case GET_PURCHASE_RETURN: {
      return { ...state, loading: false, error: false, getPurchaseReturnData: payload };
    }
    case SUCCESS_PURCHASE_RETURN: {
      return { ...state, loading: false, error: false, purchaseReturnData: payload };
    }
    case ERROR_PURCHASE_RETURN: {
      return { ...state, loading: false, error: false, purchaseReturnData: payload };
    }
    case UPDATE_PURCHASE_RETURN: {
      return { ...state, loading: false, error: false, purchaseReturnData: payload };
    }
    case DELETE_PURCHASE_RETURN: {
      return { ...state, loading: false, error: false, purchaseReturnData: payload };
    }
    default: {
      return state;
    }
  }
};

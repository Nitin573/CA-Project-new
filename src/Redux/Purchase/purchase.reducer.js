import {
  LOADING_PURCHASE,
  SUCCESS_PURCHASE,
  ERROR_PURCHASE,
  GET_PURCHASE,
  UPDATE_PURCHASE,
  DELETE_PURCHASE,
  INDUVIDUAL_PURCHASE
} from "./purchase.types";

const initialState = {
  loading: false,
  error: false,
  purchaseData: [],
  individualPurchase: null,
};

export const purchaseReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOADING_PURCHASE: {
      return { ...state, loading: true, error: false };
    }
    case INDUVIDUAL_PURCHASE: {
      return { ...state, loading: false, error: false, individualPurchase: payload };
    }
    case SUCCESS_PURCHASE: {
      return { ...state, loading: false, error: false, purchaseData: payload };
    }
    case ERROR_PURCHASE: {
      return { ...state, loading: false, error: true };
    }
    case UPDATE_PURCHASE: {
      return { ...state, loading: false, error: false, purchaseData: payload };
    }
    case DELETE_PURCHASE: {
      return { ...state, loading: false, error: false, purchaseData: payload };
    }
    default: {
      return state;
    }
  }
};
import {
    DELETE_STOCKS,
    ERROR_STOCKS,
    GET_STOCKS,
    LOADING_STOCKS,
    SUCCESS_STOCKS,
    UPDATE_STOCKS,
  } from "./stock.types";
  
  const initialState = {
    loading: false,
    error: false,
    stockData: [],
    getStockData:[]
  };
  export const stockReducer = (state = initialState, { type, payload }) => {
    switch (type) {
      case LOADING_STOCKS: {
        return { ...state, loading: true, error: false };
      }
      case SUCCESS_STOCKS: {
        return { ...state, loading: false, error: false, stockData: payload };
      }
      case GET_STOCKS: {
        return { ...state, loading: false, error: false, getStockData: payload };
      }
      case UPDATE_STOCKS: {
        return { ...state, loading: false, error: false, stockData: payload };
      }
      case DELETE_STOCKS: {
        return { ...state, loading: false, error: false, stockData: payload };
      }
      case ERROR_STOCKS: {
        return { ...state, loading: false, error: true, stockData: payload};
      }
      default: {
        return state;
      }
    }
  };
  
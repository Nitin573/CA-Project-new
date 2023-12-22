import {
  DELETE_SALE_INVOICE,
  ERROR_SALE_INVOICE,
  GET_SALE_INVOICE,
  LOADING_SALE_INVOICE,
  SUCCESS_SALE_INVOICE,
  UPDATE_SALE_INVOICE,
} from "./saleInvoice.type";

const initialState = {
  loading: false,
  error: false,
  saleInvoiceData: [],
};
export const saleInvoiceReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOADING_SALE_INVOICE: {
      return { ...state, loading: true, error: false };
    }
    case SUCCESS_SALE_INVOICE: {
      return { ...state, loading: false, error: false, saleInvoiceData: payload };
    }
    case GET_SALE_INVOICE: {
      return { ...state, loading: false, error: false, saleInvoiceData: payload };
    }
    case UPDATE_SALE_INVOICE: {
      return { ...state, loading: false, error: false, saleInvoiceData: payload };
    }
    case DELETE_SALE_INVOICE: {
      return { ...state, loading: false, error: false, saleInvoiceData: payload };
    }
    case ERROR_SALE_INVOICE: {
      return { ...state, loading: false, error: true, errorMessage: payload.message };
    }
    default: {
      return state;
    }
  }
};

import {
  DELETE_SALE_REPORT,
  ERROR_SALE_REPORT,
  GET_SALE_REPORT,
  LOADING_SALE_REPORT,
  SUCCESS_SALE_REPORT,
  UPDATE_SALE_REPORT,
} from "./saleReport.type";

const initialState = {
  loading: false,
  error: false,
  saleReportData: [],
};
export const saleReportReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOADING_SALE_REPORT: {
      return { ...state, loading: true, error: false };
    }
    case SUCCESS_SALE_REPORT: {
      return { ...state, loading: false, error: false, saleReportData: payload };
    }
    case GET_SALE_REPORT: {
      return { ...state, loading: false, error: false, saleReportData: payload };
    }
    case UPDATE_SALE_REPORT: {
      return { ...state, loading: false, error: false, saleReportData: payload };
    }
    case DELETE_SALE_REPORT: {
      return { ...state, loading: false, error: false, saleReportData: payload };
    }
    case ERROR_SALE_REPORT: {
      return { ...state, loading: false, error: true, saleReportData: payload };
    }
    default: {
      return state;
    }
  }
};

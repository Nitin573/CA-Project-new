import {
  DELETE_PURCHASE_REPORT,
  ERROR_PURCHASE_REPORT,
  GET_PURCHASE_REPORT,
  LOADING_PURCHASE_REPORT,
  SUCCESS_PURCHASE_REPORT,
  UPDATE_PURCHASE_REPORT,
} from "./PurchaseReport.type";

const initialState = {
  loading: false,
  error: false,
  purcahseReportData: [],
};
export const purchaseReportReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOADING_PURCHASE_REPORT: {
      return { ...state, loading: true, error: false };
    }
    case SUCCESS_PURCHASE_REPORT: {
      return { ...state, loading: false, error: false, purcahseReportData: payload };
    }
    case GET_PURCHASE_REPORT: {
      return { ...state, loading: false, error: false, purcahseReportData: payload };
    }
    case UPDATE_PURCHASE_REPORT: {
      return { ...state, loading: false, error: false, purcahseReportData: payload };
    }
    case DELETE_PURCHASE_REPORT: {
      return { ...state, loading: false, error: false, purcahseReportData: payload };
    }
    case ERROR_PURCHASE_REPORT: {
      return { ...state, loading: false, error: true, purcahseReportData: payload };
    }
    default: {
      return state;
    }
  }
};

import {
  DELETE_REPORT,
  ERROR_REPORT,
  GET_REPORT,
  LOADING_REPORT,
  SUCCESS_REPORT,
  UPDATE_REPORT,
} from "./Report.type";

const initialState = {
  loading: false,
  error: false,
  reportData: [],
};
export const reportReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOADING_REPORT: {
      return { ...state, loading: true, error: false };
    }
    case SUCCESS_REPORT: {
      return { ...state, loading: false, error: false, reportData: payload };
    }
    case GET_REPORT: {
      return { ...state, loading: false, error: false, reportData: payload };
    }
    case UPDATE_REPORT: {
      return { ...state, loading: false, error: false, reportData: payload };
    }
    case DELETE_REPORT: {
      return { ...state, loading: false, error: false, reportData: payload };
    }
    case ERROR_REPORT: {
      return { ...state, loading: false, error: true, reportData: [] };
    }
    default: {
      return state;
    }
  }
};

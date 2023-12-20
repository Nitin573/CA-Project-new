import { DELETE_PARTYREPORTBYITEM, ERROR_PARTYREPORTBYITEM, INDUVIDUAL_PARTYREPORTBYITEM, LOADING_PARTYREPORTBYITEM, SUCCESS_PARTYREPORTBYITEM, UPDATE_PARTYREPORTBYITEM } from "./partyreportbyitem.types";

  const initialState = {
    loading: false,
    error: false,
    purchaseData: [],
    getPurchaseData:[],
  }
  export const partyReportByReducer = (state = initialState, { type, payload }) => {
    switch (type) {
      case LOADING_PARTYREPORTBYITEM: {
        return { ...state, loading: true, error: false };
      }
      case INDUVIDUAL_PARTYREPORTBYITEM: {
        return { ...state, loading: false, error: false, induvidualParty: payload };
      }
      case SUCCESS_PARTYREPORTBYITEM: {
        console.log(payload);
        return { ...state, loading: false, error: false, purchaseData: payload };
      }
      case ERROR_PARTYREPORTBYITEM: {
        return { ...state, loading: false, error: false, purchaseData: payload };
      }
      case UPDATE_PARTYREPORTBYITEM: {
        return { ...state, loading: false, error: false, purchaseData: payload };
      }
      case DELETE_PARTYREPORTBYITEM: {
        return { ...state, loading: false, error: false , purchaseData: payload };
      }
      default: {
        return state;
      }
    }
  };
  
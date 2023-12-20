
import { 
  DELETE_SALEPURCHASEBYPARTY, 
  ERROR_SALEPURCHASEBYPARTY, 
  GET_SALEPURCHASEBYPARTY, 
  INDUVIDUAL_SALEPURCHASEBYPARTY, 
  LOADING_SALEPURCHASEBYPARTY, 
  SUCCESS_SALEPURCHASEBYPARTY, 
  UPDATE_SALEPURCHASEBYPARTY 
} from "./salepurchasebyparty.types";

  
  const initialState = {
    loading: false,
    error: false,
    salePurchaseData: [],
    getSalePurchaseData:[],
  }
  export const salepurchasebypartyReducer = (state = initialState, { type, payload }) => {
    switch (type) {
      case LOADING_SALEPURCHASEBYPARTY: {
        return { ...state, loading: true, error: false };
      }
      case INDUVIDUAL_SALEPURCHASEBYPARTY: {
        return { ...state, loading: false, error: false, induvidualParty: payload };
      }
      case SUCCESS_SALEPURCHASEBYPARTY: {
        console.log(payload);
        return { ...state, loading: false, error: false, salePurchaseData: payload };
      }
      case GET_SALEPURCHASEBYPARTY: {
        return { ...state, loading: false, error: false , getSalePurchaseData: payload };
      }
      case ERROR_SALEPURCHASEBYPARTY: {
        return { ...state, loading: false, error: false, salePurchaseData: payload };
      }
      case UPDATE_SALEPURCHASEBYPARTY: {
        return { ...state, loading: false, error: false, salePurchaseData: payload };
      }
      case DELETE_SALEPURCHASEBYPARTY: {
        return { ...state, loading: false, error: false , salePurchaseData: payload };
      }
      default: {
        return state;
      }
    }
  };
  
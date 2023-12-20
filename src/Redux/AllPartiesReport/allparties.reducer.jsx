
import { 
  DELETE_ALLPARTIES, 
  ERROR_ALLPARTIES, 
  GET_ALLPARTIES, 
  INDUVIDUAL_ALLPARTIES, 
  LOADING_ALLPARTIES, 
  SUCCESS_ALLPARTIES, 
  UPDATE_ALLPARTIES 
} from "./allparties.types";

  const initialState = {
    loading: false,
    error: false,
    allPartiesData: [],
    getAllPartiesData:['helloworld'],
  }
  export const allpartiesReducer = (state = initialState, { type, payload }) => {
    switch (type) {
      case LOADING_ALLPARTIES: {
        return { ...state, loading: true, error: false };
      }
      case INDUVIDUAL_ALLPARTIES: {
        return { ...state, loading: false, error: false, induvidualParty: payload };
      }
      case SUCCESS_ALLPARTIES: {
        console.log(payload);
        return { ...state, loading: false, error: false, allPartiesData: payload };
      }
      case GET_ALLPARTIES: {
        return { ...state, loading: false, error: false, getAllPartiesData: payload };
      }
      case ERROR_ALLPARTIES: {
        return { ...state, loading: false, error: false, allPartiesData: payload };
      }
      case UPDATE_ALLPARTIES: {
        return { ...state, loading: false, error: false, allPartiesData: payload };
      }
      case DELETE_ALLPARTIES: {
        return { ...state, loading: false, error: false , allPartiesData: payload };
      }
      default: {
        return state;
      }
    }
  };
  
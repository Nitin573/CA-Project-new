
import { ERROR_PARTIES_PROFITLOSS, GET_PARTIES_PROFITLOSS, GET_PARTY_ID, INDUVIDUAL_PARTY_PROFITLOSS, LOADING_PARTIES_PROFITLOSS, SEARCH_PARTIES_PROFITLOSS, SUCCESS_PARTIES_PROFITLOSS, UPDATE_PARTIES_PROFITLOSS } from "./partyprofitloss.types";

  
  const initialState = {
    loading: false,
    error: false,
    partiesData: [],
    getPartiesData:[],
    induvidualParty:[],
    searchPartiesData:[],
    partyId:"",
  }
  export const partyProfitLossReducer = (state = initialState, { type, payload }) => {
    switch (type) {
      case LOADING_PARTIES_PROFITLOSS: {
        return { ...state, loading: true, error: false };
      }
      case SUCCESS_PARTIES_PROFITLOSS: {
        return { ...state, loading: false, error: false, partiesData: payload };
      }
      case GET_PARTIES_PROFITLOSS: {
        return { ...state, loading: false, error: false, getPartiesData: payload };
      }
      case UPDATE_PARTIES_PROFITLOSS: {
        return { ...state, loading: false, error: false, partiesData: payload };
      }
      case SEARCH_PARTIES_PROFITLOSS: {
        return { ...state, loading: false, error: false, searchPartiesData: payload };
      }
      case INDUVIDUAL_PARTY_PROFITLOSS: {
        return { ...state, loading: false, error: false, induvidualParty: payload };
      }
      // case DELETE_PARTIES: {
      //   return { ...state, loading: false, error: false };
      // }
      case ERROR_PARTIES_PROFITLOSS: {
        return { ...state, loading: false, error: true, partiesData: payload};
      }
  
  
      case GET_PARTY_ID:{
        return {...state,loading: false, error: false,partyId:payload}
      }
      default: {
        return state;
      }
    }
  };
  
import { ERROR_PARTIES, GET_PARTIES, GET_PARTY_ID, INDUVIDUAL_PARTY, LOADING_PARTIES, SEARCH_PARTIES, SUCCESS_PARTIES, UPDATE_PARTIES } from "./parties.types";


const initialState = {
  loading: false,
  error: false,
  partiesData: [],
  getPartiesData:[],
  induvidualParty:[],
  searchPartiesData:[],
  partyId:"",
}
export const partiesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOADING_PARTIES: {
      return { ...state, loading: true, error: false };
    }
    case SUCCESS_PARTIES: {
      return { ...state, loading: false, error: false, partiesData: payload };
    }
    case GET_PARTIES: {
      return { ...state, loading: false, error: false, getPartiesData: payload };
    }
    case UPDATE_PARTIES: {
      return { ...state, loading: false, error: false, partiesData: payload };
    }
    case SEARCH_PARTIES: {
      return { ...state, loading: false, error: false, searchPartiesData: payload };
    }
    case INDUVIDUAL_PARTY: {
      return { ...state, loading: false, error: false, induvidualParty: payload };
    }
    // case DELETE_PARTIES: {
    //   return { ...state, loading: false, error: false };
    // }
    case ERROR_PARTIES: {
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
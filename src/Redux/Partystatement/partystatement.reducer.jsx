
import {LOADING_PARTIES_STATEMENT, GET_PARTIES_STATEMENT, ERROR_PARTIES_STATEMENT, 
  GET_INDIVIDUAL_PARTIES_STATEMENT, SET_PARTY_ID, GET_TRANSACTIONS_FULFILLED} from "./partystatement.types"
const initialState = {
  loading: false,
  error: null,
  partiesStatementData: [],
  individualPartiesStatementData: [],
  partyId: null,
  transactions: [],
};

export const partystatementReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOADING_PARTIES_STATEMENT:
      return { ...state, loading: true, error: null };
    case GET_PARTIES_STATEMENT:
     
      return { ...state, loading: false, partiesStatementData: payload, error: null };

    case GET_INDIVIDUAL_PARTIES_STATEMENT:
        return { ...state, loading: false, individualPartiesStatementData: payload, error: null };

    case ERROR_PARTIES_STATEMENT:
      return { ...state, loading: false, error: payload };

    case SET_PARTY_ID:
      return {...state, loading: false, partyId: payload, error: null};

    
      case GET_TRANSACTIONS_FULFILLED:
        return {
          ...state,
          loading: false,
          transactions: payload,
          error: null
        };

    //     FETCH_DATA_REQUEST
    //     FETCH_DATA_FAILURE
    // case FETCH_DATA_REQUEST: 
    // return {...state, loading: false, partyId: payload, error: null};

    default:
      return state;
  }
};

import {
  ERROR_FIRM_REGISTER,
  LOADING_FIRM_REGISTER,
  SET_FIRM_ID,
  SET_FIRM_NAME,
  SUCCESS_FIRM_REGISTER,
  SUCCESS_GET_FIRM_REGISTER,
} from "./Firm.Type";

const initialState = {
  loading: false,
  Firm_registerData: [],
  error: false,
  get_firm_data: [],
  firmId:"",
  firmName:"",
};

export const Firm_Reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOADING_FIRM_REGISTER: {
      return { ...state, loading: true, error: false };
    }
    case SUCCESS_FIRM_REGISTER: {
      return {
        ...state,
        error: false,
        loading: false,
        Firm_registerData: payload,
      };
    }
    case ERROR_FIRM_REGISTER: {
      return { ...state, error: true, loading: false };
    }
    case SUCCESS_GET_FIRM_REGISTER: {
      return { ...state, error: false, loading: false, get_firm_data: payload };
    }
    case SET_FIRM_ID:{
        return { ...state, error: false, loading: false, firmId: payload };
    }

    case SET_FIRM_NAME:{
      return { ...state, error: false, loading: false, firmName: payload };
  }

    default: {
      return state;
    }
  }
};

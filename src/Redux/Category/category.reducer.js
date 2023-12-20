// category.reducer.js
import {
    LOADING_CATEGORIES,
    ERROR_CATEGORIES,
    GET_CATEGORIES,
    SUCCESS_CATEGORIES,
    GET_CATEGORY_ID,
} from "./category.types";

const initialState = {
    loading: false,
    categories: [],
    error: null,
    selectedCategoryId: null,
};

export const categoryReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case LOADING_CATEGORIES:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case GET_CATEGORIES:
            return {
                ...state,
                loading: false,
                categories: payload,
                error: null,
            };
        case SUCCESS_CATEGORIES:
            return {
                ...state,
                loading: false,
                error: null,
            };
        case ERROR_CATEGORIES:
            return {
                ...state,
                loading: false,
                error: payload,
            };
        case GET_CATEGORY_ID:
            return {
                ...state,
                selectedCategoryId: payload,
            };
        default:
            return state;
    }
};


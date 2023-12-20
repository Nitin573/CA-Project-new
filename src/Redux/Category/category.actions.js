// category.actions.js
import axios from "axios";
import {
  LOADING_CATEGORIES,
  ERROR_CATEGORIES,
  GET_CATEGORIES,
  SUCCESS_CATEGORIES,
  UPDATE_CATEGORIES,
  DELETE_CATEGORIES
} from "./category.types";
import { LIVE_URL2 } from "../config/Commen";
import { toast } from "react-toastify";

export const getCategoriesAction = (token, firmId) => (dispatch) => {
  const headers = {
    token: `${token}`,
  };
  dispatch({ type: LOADING_CATEGORIES });
  try {
    const url = `${LIVE_URL2}/category/getcategory/${firmId}`;
    axios.get(url, { headers }).then((res) => {
      dispatch({ type: GET_CATEGORIES, payload: res.data });
      
    });
  } catch (error) {
    console.log(error);
    dispatch({ type: ERROR_CATEGORIES, payload: error });
  }
};

export const postCategoryAction = (creds, token, firmId) => (dispatch) => {
  const headers = {
    token: `${token}`,
  };
  dispatch({ type: LOADING_CATEGORIES });
  try {
    const url = `${LIVE_URL2}/category/createcategory/${firmId}`;
    axios.post(url, creds, { headers }).then((res) => {
      dispatch({ type: SUCCESS_CATEGORIES, payload: res.data });
      // console.log(res);
     
      if (res.status === 200) {
        toast.success("Category registered successfully")
        dispatch(getCategoriesAction(token, firmId));
      }
    });
  } catch (error) {
    console.log(error);
    dispatch({ type: ERROR_CATEGORIES, payload: error });
  }
};

export const updateCategoryAction = (creds, token , firmId) => (dispatch) => {
  const headers = {
    token: `${token}`,
  };
  dispatch({ type: LOADING_CATEGORIES });
  try {
    const url = `${LIVE_URL2}/category/updatecategory/${firmId}/id`;
    axios.put(url, creds, { headers }).then((res) => {
      dispatch({ type: UPDATE_CATEGORIES, payload: res.data });
      console.log(res);
    });
  } catch (error) {
    console.log(error);
    dispatch({ type: ERROR_CATEGORIES, payload: error });
  }
};

export const deleteCategoryAction = (categoryId, token, firmId) => (dispatch) => {
    const headers = {
      token: `${token}`,
    };
    dispatch({ type: LOADING_CATEGORIES });
    try {
      const url = `${LIVE_URL2}/category/deletecategory/${firmId}/id`;
      axios.delete(url, { headers }).then((res) => {
        dispatch({ type: DELETE_CATEGORIES, payload: categoryId }); // Dispatch the deleted categoryId
        console.log(res);
        if (res.status === 200) {
          toast.success("Category deleted successfully")
          // alert("Category deleted successfully");
        }
      });
    } catch (error) {
      console.log(error);
      dispatch({ type: ERROR_CATEGORIES, payload: error });
    }
  };
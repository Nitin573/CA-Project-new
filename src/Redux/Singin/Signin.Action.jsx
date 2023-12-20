import axios from "axios";
import { ERROR_LOGIN, LOADING_LOGIN, SUCCESS_LOGIN } from "./Signin.Type";
import { LIVE_URL2 } from "../config/Commen";
import { toast } from "react-toastify";

export const LoginAction = (creds, navigate) => (dispatch) => {
  dispatch({ type: LOADING_LOGIN });

  axios
    .post(`${LIVE_URL2}/signin`, creds)
    .then((res) => {
      dispatch({ type: SUCCESS_LOGIN, payload: res });
      if (res.status === 200) {
        toast.success("Login success")
        // console.log(res.data.data, "<<<res.data.data");
        navigate("/Inventory_Software");
      }
    }).catch((err) => {
      dispatch({ type: ERROR_LOGIN, payload: err });
      if(err.response.data?.message){
        toast.error(err.response.data?.message)
      }
      // console.log(err);
    });
};

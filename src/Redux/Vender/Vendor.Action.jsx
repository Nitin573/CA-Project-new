import axios from "axios";
import { ERROR_VENDOR_LOGIN, LOADING_VENDOR_LOGIN, SUCCESS_VENDOR_LOGIN } from "./Vendor.Type";
import { LIVE_URL2 } from "../config/Commen";
// import { ERROR_VENDOR_LOGIN, LOADING_VENDOR_LOGIN, SUCCESS_VENDOR_LOGIN } from "./Signin.Type";


export const VENDOR_LoginAction = (creds, navigate) => (dispatch) => {

    dispatch({ type: LOADING_VENDOR_LOGIN })



    axios.post(`${LIVE_URL2}/vendor/login`, creds).then(res => {

        dispatch({ type: SUCCESS_VENDOR_LOGIN, payload: res });
        console.log( res);
        alert("Login successful!");
        // VendorAllClint
        if (res.status === 200) {
            navigate("/VendorAllClint")
        }
        // navigate("/VendorAllClint")


    })

        .catch(err => {
            dispatch({ type: ERROR_VENDOR_LOGIN, payload: err });
            console.log("error : ", err.response.data.message)
            alert(err.response.data.message);
            console.log(err);
        })
}


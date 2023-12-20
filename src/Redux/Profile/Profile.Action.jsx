import axios from "axios";
import { ERROR_Profile, LOADING_Profile, SUCCESS_Profile } from "./Profile.Type";


// export const ProfileAction = (token) => (dispatch) => {
//     const headers = {
//         'token': `${token}`
//     };
//     dispatch({ type: LOADING_Profile })


//     try {

//         axios.get(`https://tax-service.onrender.com/profile_get`, { headers }).then(res => {
//             dispatch({ type: SUCCESS_Profile, payload: res.data.profile_data});
//             // console.log("res", res.data.profile_data);
//         })

//     }
//     catch (err) {
//         dispatch({ type: ERROR_Profile, payload: err });

//         console.log(err);
//     }
// }

export const ProfileActionUpdate = (token, creds) => (dispatch) => {
    console.log("acid", creds);
    const headers = {
        'token': `${token}`
    };
    dispatch({ type: LOADING_Profile })

    

    try {

        axios.put(`${LIVE_URL2}/profile_update`, creds,{ headers }).then(res => {
            dispatch({ type: SUCCESS_Profile, payload: res.data.profile_data });
            console.log("resup", res);
        })

    }
    catch (err) {
        dispatch({ type: ERROR_Profile, payload: err });

        console.log(err);
    }
}
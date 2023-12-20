

import axios from "axios";
import { LIVE_URL2, userDetails } from "../../Redux/config/Commen";


export const postRequest = async (endPoint, body , token) => {
    let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: `${LIVE_URL2}${endPoint}`,
        headers: { 
          'Content-Type': 'application/json',
          'token': `${token ?token :null}`
        },
        data : body
      };
    const res = await axios.request(config)
    if (res.status != 200) {
        let message;
        if (res?.data?.response?.message) {
            message = res?.data.response?.message
        } else {
            message = res.data
        }
        return { error: true, message }
    }

    return res
}
export const getRequest = async (endPoint ,token) => {

    // console.log(userDetails , );
    const res = await axios.get(`${LIVE_URL2}${endPoint}`,
        {
            headers: {
                "content-type": "application/json",
                'token': `${token ? token : null}`
            }
        })

    // console.log(res , "<<<<");

    if (res.status != 200) {
        let message = "an error occured !"
        if (res?.data.response.message) {
            message = res?.data.response.message
        } else {
            message = res.data
        }
        return { error: true, message }
    }
    return res
}
export const deleteRequest = async (endPoint ,token) => {

    // console.log(userDetails , );
    const res = await axios.delete(`${LIVE_URL2}${endPoint}`,
        {
            headers: {
                "content-type": "application/json",
                'token': `${token ? token : null}`
            }
        })

    // console.log(res , "<<<<");

    if (res.status != 200) {
        let message = "an error occured !"
        if (res?.data.response.message) {
            message = res?.data.response.message
        } else {
            message = res.data
        }
        return { error: true, message }
    }
    return res
}



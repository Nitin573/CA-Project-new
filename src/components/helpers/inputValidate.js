import { useState } from "react";
import { focusOnFeild } from "./Frontend";
export const Inputvalidate = (inputNameArray, post, setErrors) => {
    const newError = {};
    let positionFocus = "";
    // console.log(inputNameArray ,post, "<<<<<<");
    var regex = /^[0-9]+$/
    const emailRE = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    inputNameArray?.map((item) => {

        if(item == "password"){
            const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]+$/;
            if (!post?.[item] ) {
                newError[item] = "Required";
                positionFocus = positionFocus || item;
            } else if (!passwordRegex.test(post?.[item])) {
                newError[item] = "Password should include one spacial letter and Capital letter";
                positionFocus = positionFocus || item;
            }
        }

        if (item == "email") {
            if (!post?.[item] ) {
                newError[item] = "Required";
                positionFocus = positionFocus || item;
            } else if (!emailRE.test(post?.[item])) {
                newError[item] = "Enter a valid email";
                positionFocus = positionFocus || item;
            }
        } else {
            if (!post?.[item]) {
                newError[item] = "Required";
                positionFocus = positionFocus || item;
            }
        }
    })
    setErrors(newError);
    if (positionFocus) {
        focusOnFeild(positionFocus);
        return false;
    }
    return true;
}
export const signupInputvalidate = (inputNameArray, post, setErrors) => {
    const newError = {};
    let positionFocus = "";
    // console.log(inputNameArray ,post, "<<<<<<");
    var regex = /^[0-9]+$/
    const emailRE = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    inputNameArray?.map((item) => {
        if (item == "email") {
            if (!post?.[item] || !post?.[item].trim()) {
                newError[item] = "Required";
                positionFocus = positionFocus || item;
            } else if (!emailRE.test(post?.[item])) {
                newError[item] = "Enter a valid email";
                positionFocus = positionFocus || item;
            }
        } else {
            if (!post?.[item] || !post?.[item].trim()) {
                newError[item] = "Required";
                positionFocus = positionFocus || item;
            }
        }
    })
    setErrors(newError);
    if (positionFocus) {
        focusOnFeild(positionFocus);
        return false;
    }
    return true;
}
export const validateGstnumber = (inputNameArray, post, setErrors) => {
    const newError = {};
    let positionFocus = "";
    console.log(inputNameArray ,post, "<<<<<<");
    const emailRE = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const gstinNumberRegex = /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/;
    inputNameArray?.map((item) => {
        console.log(item , "<<<<");
        if (item == "gstNo") {
            if (!gstinNumberRegex.test(post?.[item])) {
                newError[item] = "Enter a valid gst number";
                positionFocus = positionFocus || item;
            }
        } 
        if (item == "phoneNumber") {
            const phoneNumberRegex = /^\d{10}$/;
            if (!phoneNumberRegex.test(post?.[item])) {
                newError[item] = "Invalid phone number should be 10 digits";
                positionFocus = positionFocus || item;
            }
        } 
       
    })



    // GSTIN number validation

    setErrors(newError);
    if (positionFocus) {
        focusOnFeild(positionFocus);
        return false;
    }
    return true;
}



import React, { useEffect, useState } from 'react'
import {
    Box, Button, Flex, FormControl, Image, Input, Text, VStack,


} from '@chakra-ui/react'
import { Link, useNavigate, useParams } from "react-router-dom";
import edit from "../../assets/edit.svg"
import "../styles.css"
import { useDispatch, useSelector } from 'react-redux';
import { store } from '../../../Store/Store';
import { SUCCESS_LOGOUT } from '../../../Redux/Singin/Signin.Type';
import { ProfileAction, ProfileActionUpdate } from '../../../Redux/Profile/Profile.Action';
import axios from 'axios';

const Profile = () => {
    
    // const { profileData } = useSelector(store => store.Profile)
    const [profileData, setProfileData] = useState({
        userName: "",
        fullName: "",
        email: "",
        password: "",
    })
    // console.log(profileData)
    // const [form, setForm] = useState(profileData)
    // console.log(form)
    // const { token } = useSelector(store => store.Signin);
    // const data = useSelector(store => store.Signin);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = []

    let { id } = useParams()
    
    // const user = profileData[0]
    // console.log(form)
    
    const handelLogOut = () => {

        if (token) {
            dispatch({ type: SUCCESS_LOGOUT })
            navigate("/")
        } else {
            navigate("/Login")
        }
    }
    // useEffect(() => { dispatch(ProfileAction(token)); }, [])

    
    useEffect(() => {
        const headers = {
            'token': `${token}`
        }
        axios.get(`https://tax-service.onrender.com/profile_get`, { headers })
            .then((res) => {
                setProfileData(res.data.profile_data);
                // console.log('profile update', res.data,profileData)
            })
    }, [])
    const handleUpdateChange = () => {
        // e.preventDefault()
        dispatch(ProfileActionUpdate(token,profileData));
    }

    console.log("okdd",profileData)
    const handleChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        console.log(name,value)
        setProfileData({ ...profileData, [name]: value })
        // console.log(form)

    }

   
    const { token } = useSelector(store=>store.Signin)
    console.log(token)
    return (
        <Flex key={profileData._id} className="container" margin="auto" flexDirection={{ base: "column-reverse", md: "row", lg: "row" }}
            fontSize={{ base: "12px", md: "13", lg: "15px" }}>
            <Box className="container" margin={"auto"} boxShadow="rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px" width={{ base: "80%", md: "30%", lg: "20%" }} marginTop="10px" marginBottom="10px" borderRadius={"20px"}>
                <VStack height={"80%"} padding={"10px"} >
                    <Box cursor={"pointer"} backgroundColor={"orange"} width="90%" borderRadius={"10px"} >
                        <h3>Profile</h3>
                    </Box >
                    <Link to="/HomeDash" ><Box cursor={"pointer"} id='hb' >
                        <h3>Inventory Software</h3>
                    </Box>
                    </Link>
                </VStack>
                <Box cursor={"pointer"} justifyContent={"baseline"} color={"red"} id='hb' onClick={handelLogOut}>
                    <h3 justifySelf={"baseline"} >Log Out</h3>
                </Box>
            </Box >

            <Box className="container" margin={"auto"} boxShadow="rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px" width={{ base: "80%", md: "50%", lg: "50%" }} height="400px" marginTop="10px" marginBottom="10px" padding={"20px"} fontSize={{ base: "12px", md: "13", lg: "15px" }} borderRadius={"10px"}>

                <FormControl>
                    <label htmlFor="Username">
                        User Name
                        <Input type="text" disabled name="userName" value={profileData?.userName} onChange={handleChange}></Input>
                    </label>
                </FormControl>
                <FormControl>
                    <label htmlFor="fullName">
                        full Name
                        <Input type="text" name="fullName" value={profileData?.fullName} onChange={handleChange}></Input>
                    </label>
                </FormControl>
                <FormControl>
                    <label htmlFor="email">
                        Email
                        <Input type="email" name="email" disabled value={profileData?.email} onChange={handleChange}></Input>
                    </label>
                </FormControl>
                <FormControl>
                    <label htmlFor="phoneNumber">
                        PhoneNumber
                        <Input type="tel" name="phoneNumber" value={ profileData?.phoneNumber} onChange={handleChange}></Input>
                    </label>
                </FormControl>


                {/* <Button m="20px auto" onClick={handleUpdateChange}>Update</Button> */}
            </Box>


        </Flex >
    )
}

export default Profile

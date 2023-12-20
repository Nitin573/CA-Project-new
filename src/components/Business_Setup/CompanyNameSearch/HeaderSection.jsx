import { Box, Button, FormControl, Image, Input, Select, Text } from "@chakra-ui/react";
import "../../../styles/BussinessSetup/HeaderForlimitedLiablity.css";
import "../../../styles/BussinessSetup/HeaderForPrivateLimited.css";
import { useReducer } from "react";
import google_third from "../../assets/google_third.svg";
import mouthshut_first from "../../assets/mouthshut_first.svg";
import trustpilot_second from "../../assets/trustpilot_second.svg";
import blue_whitetick from "../../assets/blue_whitetick_b2b.svg";
import man from "../../assets/companymanss.svg";
import youtube_play from "../../assets/youtube_play.svg";
import trademark from "../../assets/trademarkcompaniessmall.svg"

const initialState = {
    email: "",
    mobileNo: "",
    city: "",
};

const formReducer = (state, action) => {
    switch (action.type) {
        case "email":
            return {
                ...state,
                email: action.payload,
            };

        case "mobileNo":
            return {
                ...state,
                mobileNo: action.payload,
            };

        case "city":
            return {
                ...state,
                city: action.payload,
            };
        case "reset":
            return initialState
        default:
            return state;
    }
};


const HeaderSection = () => {

    const [formState, setFormState] = useReducer(formReducer, initialState);

    return (
        <Box className="HeaderContainerForPrivateLimited" bg="#f2f1f0">
            <Box className="firsBox_HeaderContainer">
                <Box mt={{ base: "7%", sm: "7%", md: "6%", lg: "auto", xl: "auto" }}>
                    <Box fontWeight="bold" display="flex" flexDir="column" textAlign="left" color="black" fontSize={{ base: "130%", sm: "200%", md: "250%", lg: "300%", xl: "350%" }} borderBottom="3px solid #ffc107">Company Name Search</Box>
                    <Box fontWeight="500" display="flex" textAlign="left" fontSize={{ base: "100%", sm: "130%", md: "120%", lg: "140%", xl: "160%" }} color="gray" mt={5}><Image pt={0} height="fit-content" mt={0} src={blue_whitetick} alt="" /> <Text ml={2}>Search the MCA database here & With our experts, Get a 7 day Guaranteed document upload to the MCA or receive a full refund. T&C* </Text></Box>
                    <Box fontWeight="500" display="flex" textAlign="left" fontSize={{ base: "100%", sm: "130%", md: "120%", lg: "140%", xl: "160%" }} color="gray"><Image pt={0} height="fit-content" mt={0} src={blue_whitetick} alt="" /> <Text ml={2}>Transparent process, thorough follow up and regular updates</Text></Box>
                </Box>
                <Box display="flex" flexDirection={{ base: "column", sm: "column", md: "row" }} width="100%">
                    <Box
                        display="flex"
                        textAlign="left"
                        w="100%"
                    >
                        <Text
                            fontWeight="500"
                            mr={2}
                            display="flex"
                            textAlign="left"
                            fontSize={{ base: "100%", sm: "110%", md: "110%", lg: "120%", xl: "130%" }}
                            color="gray"
                            mt={5}
                            w="70%"
                        >
                            <span style={{color: "blue", marginRight: "1%"}}>50,000+</span> businesses incorporated since 2011
                        </Text>
                        <Image width="15%" src={trademark} alt="" />

                    </Box>
                </Box>
                <Box fontWeight="500" display="flex" textAlign="left" fontSize={{ base: "100%", sm: "150%", md: "150%", lg: "170%", xl: "180%" }} >
                    30,000+ Proprietorships registered since 2011
                </Box>
                <Box mt="7%" mb="7%" width="100%" display="flex" flexDirection={{ base: "column", sm: "row" }} justifyContent="space-between">
                    <Box width={{ base: "50%", sm: "30%" }} m={{ base: "auto" }} mt={{ base: "10%", sm: "auto" }}>
                        <Image width="100%" src={mouthshut_first} alt="" />
                    </Box>
                    <Box width={{ base: "50%", sm: "30%" }} m={{ base: "auto" }} mt={{ base: "10%", sm: "auto" }}>
                        <Image width="100%" src={trustpilot_second} alt="" />
                    </Box>
                    <Box width={{ base: "50%", sm: "30%" }} m={{ base: "auto" }} mt={{ base: "10%", sm: "auto" }}>
                        <Image width="100%" src={google_third} alt="" />
                    </Box>
                </Box>
            </Box>
            <Box className="secondBox_HeaderContainer">
                <Box>
                    <Image src={man} alt="" />
                </Box>
            </Box>
        </Box>
    );
};

export { HeaderSection };
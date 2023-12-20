import { Box, Button, FormControl, Image, Input, Select, Text } from "@chakra-ui/react";
import "../../../styles/BussinessSetup/HeaderForlimitedLiablity.css";
import "../../../styles/BussinessSetup/HeaderForPrivateLimited.css";
import { useReducer } from "react";
import google_third from "../../assets/google_third.svg";
import mouthshut_first from "../../assets/mouthshut_first.svg";
import trustpilot_second from "../../assets/trustpilot_second.svg";
import blue_whitetick from "../../assets/blue_whitetick_b2b.svg";
import smallcretificate from "../../assets/smallcretificate.svg";
import youtube_play from "../../assets/youtube_play.svg";


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
                    <Box fontWeight="bold" display="flex" flexDir="column" textAlign="left" color="black" fontSize={{ base: "130%", sm: "200%", md: "250%", lg: "300%", xl: "350%" }} borderBottom="3px solid #ffc107">Sole Proprietorship Registration in 7 days</Box>
                    <Box fontWeight="500" display="flex" textAlign="left" fontSize={{ base: "100%", sm: "130%", md: "120%", lg: "140%", xl: "160%" }} color="gray" mt={5}><Image pt={0} height="fit-content" mt={0} src={blue_whitetick} alt="" /> <Text ml={2}>Fastest registration turnaround time in India with Guaranteed document upload to the government portal under 7 days or get a full refund T&C* </Text></Box>
                    <Box fontWeight="500" display="flex" textAlign="left" fontSize={{ base: "100%", sm: "130%", md: "120%", lg: "140%", xl: "160%" }} color="gray"><Image pt={0} height="fit-content" mt={0} src={blue_whitetick} alt="" /> <Text ml={2}>Transparent process, thorough follow up and regular updates</Text></Box>
                </Box>
                <Box display="flex" flexDirection={{ base: "column", sm: "column", md: "row" }}>
                    <Box
                        display="flex"
                        textAlign="left"
                    >
                        <Image width="9%" src={youtube_play} alt="" />
                        <Text
                            fontWeight="500"
                            ml={2}
                            display="flex"
                            textAlign="left"
                            fontSize={{ base: "100%", sm: "110%", md: "110%", lg: "120%", xl: "130%" }}
                            color="gray"
                            mt={5}
                        >Click to watch 60 seconds video</Text>
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
                    <Box className='Box_for_form_inHeader' >
                        <Text color="black" fontWeight="bold" w="100%" display="flex" justifyContent="center" alignItems="center" fontSize={{ base: "120%", sm: "120%", md: "120%", lg: "130%", xl: "140%" }}>Register your company today</Text>
                        <FormControl mt={7}>
                            <Input
                                bg="#f2f2f5"
                                value={formState.email}
                                required
                                placeholder='Email*'
                                onChange={(e) => setFormState({ type: "email", payload: e.target.value })}
                                type='email'
                            />
                        </FormControl>
                        <FormControl mt={7}>
                            <Input
                                bg="#f2f2f5"
                                value={formState.email}
                                required
                                placeholder='Mobile Number*'
                                onChange={(e) => setFormState({ type: "email", payload: e.target.value })}
                                type='email'
                            />
                        </FormControl>
                        <FormControl mt={7}>
                            <Select
                                bg="#f2f2f5"
                                value={formState.city}
                                required
                                placeholder='Select City*'
                                color="gray"
                                onChange={(e) => setFormState({ type: "city", payload: e.target.value })}
                            >
                                <option value="Bengaluru">Bengaluru</option>
                                <option value="Chennai">Chennai</option>
                                <option value="Cochin">Cochin</option>
                                <option value="Coimbatore">Coimbatore</option>
                                <option value="Delhi">Delhi</option>
                                <option value="Gurugram-Gurgaon">Gurugram-Gurgaon</option>
                                <option value="Hyderabad">Hyderabad</option>
                                <option value="Kolkata">Kolkata</option>
                                <option value="Mumbai">Mumbai</option>
                                <option value="Pune">Pune</option>
                            </Select>
                        </FormControl>
                        <Button mt={10} bg="#ffc107" fontSize={{ base: "80%", sm: "90%", md: "100%", lg: "100%", xl: "110%" }}>Talk to registration sxperts</Button>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export { HeaderSection };
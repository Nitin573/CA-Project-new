import { Box, Button, FormControl, Image, Input, Select, Text } from "@chakra-ui/react";
import Background from "../../assets/backgroundBlue.jpg";
import "../../../styles/BussinessSetup/HeaderForPrivateLimited.css";
import { useReducer } from "react";
import pic from "../../assets/watch_now.png";
import bag from "../../assets/service-bag.svg";
import emoji from "../../assets/service-emoji.svg"
import star from "../../assets/service-star.svg";


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
        <Box backgroundImage={Background} className="HeaderContainerForPrivateLimited">
            <Box className="firsBox_HeaderContainer">
                <Box>
                    <Text className="headerText_heading" color="white">Nidhi Company Registration</Text>
                    <Text className="headerText_headingline2" color="white">An excellent option for people looking to save money and lead a thrifty lifestyle.</Text>
                </Box>
                <Box className="headerText_headingline2">
                    50,000+ businesses incorporated since 2011
                </Box>
                <Box mt={4} width="20%">
                    <Image width="100%" src={pic} alt="" />
                </Box>
                <Box display="flex" justifyContent="center" width="100%" mt={10}>
                    <Box display="flex" flexDir="column" width={{base:"33%", sm:"30%", md: "25%", lg: "20%", xl:"20%"}}>
                        <Box display="flex" justifyContent="center" alignItems="center">
                            <Image width="20%" src={bag} alt="" />
                            <Text padding={0} ml={2} mt={2} display="flex" justifyContent="center" alignItems="center" color="white">400,000 +</Text>
                        </Box>
                        <Box color="white">Business Served</Box>
                    </Box>

                    <Box display="flex" flexDir="column" width={{base:"33%", sm:"30%", md: "25%", lg: "20%", xl:"20%"}}>
                        <Box display="flex" justifyContent="center" alignItems="center">
                            <Image width="20%" src={star} alt="" />
                            <Text padding={0} ml={2} mt={2} display="flex" justifyContent="center" alignItems="center" color="white">400,000 +</Text>
                        </Box>
                        <Box color="white">Business Served</Box>
                    </Box>

                    <Box display="flex" flexDir="column" width={{base:"33%", sm:"30%", md: "25%", lg: "20%", xl:"20%"}}>
                        <Box display="flex" justifyContent="center" alignItems="center">
                            <Image width="20%" src={emoji} alt="" />
                            <Text padding={0} ml={2} mt={2} display="flex" justifyContent="center" alignItems="center" color="white">400,000 +</Text>
                        </Box>
                        <Box color="white">Business Served</Box>
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
                        <Text mt={4} mb={1} fontSize="80%">Easy monthly EMI options available</Text>
                        <Text fontSize="80%">No Spam. No Sharing. 100% Confidentiality.</Text>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export { HeaderSection };
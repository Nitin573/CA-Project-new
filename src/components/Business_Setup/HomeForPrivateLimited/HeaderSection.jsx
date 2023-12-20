import { Box, Button, FormControl, Input, Select, Text } from "@chakra-ui/react";
import yellowBackground from "../../assets/yellowBackground.jpg";
import "../../../styles/BussinessSetup/HeaderForPrivateLimited.css";
import { CarouselForPvtltd } from "./CarouselForPvtltd";
import { useReducer } from "react";


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
        <Box backgroundImage={yellowBackground} className="HeaderContainerForPrivateLimited">
            <Box className="firsBox_HeaderContainer">
                <Box>
                    <Text className="headerText_heading">Private Limited (Pvt Ltd) Company Registration Online In India</Text>
                    <Text className="headerText_headingline2">No more delays or difficulties! Register your business with India’s #1 provider of company incorporation services. Get a 7 day Guaranteed document upload to the MCA or receive a full refund T&C* </Text>
                </Box>
                <Box className="headerText_headingline2">
                    50,000+ businesses incorporated since 2011
                </Box>
                <Box mt={4}>
                    <CarouselForPvtltd />
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
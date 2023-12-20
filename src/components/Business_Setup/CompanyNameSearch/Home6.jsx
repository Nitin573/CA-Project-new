
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Button, FormControl, Input, Select, Text } from '@chakra-ui/react'
import React, { useReducer, useState } from 'react'
import Exclusiive from '../../Exclusiive';
import { CompanyNameSearchData } from "./CompanyNameSearchData";
import { Link } from "react-scroll";
import "../../../styles/ContanerForLowerHomeContent.css";

let links = [
    { link: "Overview", id: "CompanyNameSearch_overviewId" },
    { link: "Documents Needed", id: "CompanyNameSearch_documentNeededId" },
    { link: "Steps", id: "CompanyNameSearch_stepsId" },
    { link: "Registeration Package", id: "CompanyNameSearch_registerationId" },
    { link: "Checklist", id: "CompanyNameSearch_checklist" },
    { link: "Features", id: "CompanyNameSearch_featureId" },
    { link: "Restriction", id: "CompanyNameSearch_restrictionId" },
    { link: "Advantages", id: "CompanyNameSearch_advantageId" },
    { link: "Why us?", id: "CompanyNameSearch_whyusId" },
    { link: "FAQ", id: "CompanyNameSearch_faqId" },
    { link: "Partner Benifits", id: "CompanyNameSearch_partnerBenefitId" }
]

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


export default function Home6() {


    const [active, setActive] = useState(0);
    const [formState, setFormState] = useReducer(formReducer, initialState);

    return (
        <Box className='ContanerForHome6Content'>
            <Box className='sidebarForHome6Content'>
                <Box className='BoxoSidebarItems'>
                    {
                        links.map((e, i) => (
                            <Link key={i} onClick={() => { setActive(i) }} smooth spy to={e.id} offset={-100} >
                                <Box
                                    w="100%"
                                    mt="3%"
                                    padding={2}
                                    display="flex"
                                    _hover={{ cursor: "pointer" }}
                                    style={{
                                        color: active === i ? "white" : "black",
                                        mt: "1%",
                                        backgroundColor: i === active ? "rgba(0, 0, 119, 0.784)" : "#e8e8eb"
                                    }}
                                >
                                    {e.link}
                                </Box>
                            </Link>
                        ))
                    }
                </Box>
            </Box>

            <Box className='middleSectionForHome6Content'>
                <Box className='WithoutAccorionContainer'>
                    {
                        CompanyNameSearchData.map((e, i) => (
                            <Box id={e.id}>
                                <Text
                                    textAlign="start"
                                    fontWeight="bold"
                                    color="black"
                                    fontSize={{ base: "60%", sm: "100%", md: "125%", lg: "150%", xl: "180%" }}
                                >
                                    {e.titile}
                                </Text>
                                <Text
                                    textAlign="start"
                                    color="black"
                                    fontSize={{ base: "80%", sm: "100%", md: "105%", lg: "120%", xl: "150%" }}
                                >
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in ligula quis orci molestie tincidunt a vitae ipsum. Ut accumsan id risus et aliquam. Curabitur ac sodales orci. Quisque vulputate ac nisi at blandit. Curabitur dui arcu, congue sed pulvinar non, faucibus a felis. Donec commodo est lorem, in pulvinar orci scelerisque et. In mollis aliquet porttitor. Duis ac mi sed arcu molestie laoreet nec sit amet massa. Pellentesque id elit at quam consequat imperdiet ac in est. Vivamus sodales commodo sollicitudin.
                                </Text>
                            </Box>
                        ))
                    }
                </Box>
                <Box className='AccorionContainer'>
                    {
                        CompanyNameSearchData.map((e, i) => (
                            <Accordion allowToggle>
                                <AccordionItem>
                                    <h2>
                                        <AccordionButton>
                                            <Box as="span" flex='1' textAlign='left'>
                                                <Text fontSize="100%" textAlign="start" fontWeight="bold" color="black">{e.titile}</Text>
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                    </h2>
                                    <AccordionPanel pb={4} display="flex" textAlign="left">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                        commodo consequat.
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                        commodo consequat.
                                    </AccordionPanel>
                                </AccordionItem>
                            </Accordion>
                        ))
                    }
                </Box>
                <Exclusiive></Exclusiive>
            </Box>

            <Box className='rightBoxForForm'>
                <Box className='Box_for_form' >
                    <Text color="black" fontWeight="bold" w="100%" display="flex" justifyContent="center" alignItems="center" fontSize={{ base: "120%", sm: "120%", md: "120%", lg: "130%", xl: "140%" }}>Register your company today</Text>
                    <FormControl>
                        <Input
                            bg="#f2f2f5"
                            value={formState.email}
                            required
                            placeholder='Email*'
                            onChange={(e) => setFormState({ type: "email", payload: e.target.value })}
                            type='email'
                        />
                    </FormControl>
                    <FormControl mt={2}>
                        <Input
                            bg="#f2f2f5"
                            value={formState.email}
                            required
                            placeholder='Mobile Number*'
                            onChange={(e) => setFormState({ type: "email", payload: e.target.value })}
                            type='email'
                        />
                    </FormControl>
                    <FormControl mt={2}>
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
                    <Button mt={4} bg="#ffc107" fontSize={{ base: "80%", sm: "90%", md: "100%", lg: "100%", xl: "110%" }}>Talk to registration sxperts</Button>
                </Box>
            </Box>
        </Box>
    )
}

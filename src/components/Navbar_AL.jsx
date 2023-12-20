import { Box, Flex, IconButton, Image, Menu, MenuButton, MenuItem, MenuList, Text } from "@chakra-ui/react";
import icon from "./assets/icon.png"
import { GiHamburgerMenu } from "react-icons/gi"
import { Link, useNavigate } from "react-router-dom";
import { BusinessSetup } from "../Menu/BusinessSetup";
import { TaxCompliance } from "../Menu/Tax_Compliance";
import { TrademarkIP } from "../Menu/TrademarkIP";
import { IncomeTax } from "../Menu/IncomeTax";
import { SoftwareAndIt } from "../Menu/SofwareAndIt";
import { FundRaising } from "../Menu/FundRaising";
import { NGO } from "../Menu/NGO";
import user from "./assets/user.svg"
import gear from "./assets/gear.svg"
import { FiFacebook, FiMail, FiRss, FiTwitter, FiUser } from "react-icons/fi";
import { useState } from "react";
import { MdAccountCircle } from "react-icons/md";
import { FaUser } from 'react-icons/fa';
import { FaSignOutAlt } from 'react-icons/fa'
import { AiFillHome } from 'react-icons/ai';



export default function Navbar_AL() {
    const navigate = useNavigate();
    const userData = sessionStorage.getItem("userDetails") ? JSON.parse(sessionStorage.getItem("userDetails")) : null


    return (
        <Box position={"sticky"} top={"0px"} zIndex={"1"} justifyContent='center' alignItems='center'>
            {/* top bar */}
            <Flex p="0 5%" display={{ base: "none", lg: "flex" }}
                height='40px'
                justifyContent="space-between" backgroundColor="#1E1E1E" fontSize="sm" alignItems="center">
                <Flex alignItems="center" gap="8px" fontFamily="'Montserrat', sans-serif">
                    <Link to="/">
                        <AiFillHome color="white" size={20} />
                    </Link>
                    <Text color="white" mt='5' ml='2'>
                        <Link to="#">info.loremipsum.com</Link>
                    </Text>
                </Flex>
                <Flex color="white" alignItems="center" gap="8px" padding="5px" as="b" fontFamily="'Poppins', sans-serif">
                    <Text mt='5'><Link to="/profile">Contact Us</Link></Text>
                    <Text borderRight="1px solid white"
                        paddingRight="5px" mt='5' mr='4'
                    >
                        <Link to="#" mt='5' ml='2'>Blog</Link></Text>
                    <Link to="">
                        <FiMail color="white" size={18} />
                    </Link>
                    <Link to="">
                        <FiFacebook color="white" size={18} />
                    </Link>
                    <Link to="">
                        <FiTwitter color="white" size={18} />
                    </Link>
                    {/* <Link to="">
                        <FiRss color="white" size={18} />
                    </Link> */}
                </Flex>
            </Flex>
            {/* menu bar */}
            <Flex backgroundColor="#FFB91D" fontFamily="'Roboto', sans-serif" as="b"
                px='6' py='2'
                justifyContent="space-between" alignItems="center" margin={"auto"}
            >
                <Link to="/">
                    <Box width="85%" ml={2}><Image src={icon} /></Box>
                </Link>
                <Flex
                    justifyContent="center"
                    alignItems="center" // Align children to center vertically
                    gap="15px" // Gap between menu items
                    display={{ base: "none", lg: "flex" }} // Responsive display
                >
                    <Text _hover={{ backgroundColor: "white", borderRadius: "10px" }}
                        mt='2' p='2'
                    >
                        <Link to="/buisness"><BusinessSetup /></Link>
                    </Text>
                    <Text _hover={{ backgroundColor: "white", borderRadius: "10px" }} mt='2' p='2'
                    >
                        <Link to="/tax"><TaxCompliance /></Link>
                    </Text>
                    <Text _hover={{ backgroundColor: "white", borderRadius: "10px" }}
                        mt='2' p='2'
                    >
                        <Link to="/income"><IncomeTax /></Link>
                    </Text>
                    <Text _hover={{ backgroundColor: "white", borderRadius: "10px" }}
                        mt='2' p='2'
                    >
                        <Link to="/trademark"><TrademarkIP /></Link>
                    </Text>
                    <Text _hover={{ backgroundColor: "white", borderRadius: "10px" }}
                        mt='2' p='2'
                    >
                        <Link to="/ngo"><NGO /></Link>
                    </Text>
                    <Text _hover={{ backgroundColor: "white", borderRadius: "10px" }}
                        mt='2' p='2'
                    >
                        <Link to="/fund"><FundRaising /></Link>
                    </Text>
                    <Text _hover={{ backgroundColor: "white", borderRadius: "10px" }}
                        mt='2' p='2'
                    >
                        <Link to="/Software">SOFTWARE</Link>
                    </Text>
                    {/* user icon */}
                    <Menu alignItems='center'>
                        <MenuButton as={IconButton} icon={<FaUser />}
                            mb='3'
                            size='lg'
                            style={{ backgroundColor: 'transparent' }}
                            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'white'}
                            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                        />
                        <MenuList>
                            {
                                userData ?
                                    <>
                                        <MenuItem onClick={() => navigate('/Profile')}>
                                            <Flex  ml={2} gap={"12px"} display={"flex"} align='center' alignItems='center' justifyContent='center'>
                                                <FaUser />
                                                My Profile
                                            </Flex>
                                        </MenuItem>
                                        <MenuItem onClick={() => {
                                            sessionStorage.clear()
                                            navigate('/Login')
                                        }}>
                                            <Flex align='center'>
                                                {/* <FaUser/> */}
                                                <Text ml={2}> Log out </Text>
                                            </Flex>
                                        </MenuItem>
                                    </> :
                                    <>
                                        <MenuItem onClick={() => navigate('/Login')}>
                                            <Flex align='center'>
                                                {/* <FaUser/> */}
                                                <Text ml={2}> LogIn </Text>
                                            </Flex>
                                        </MenuItem>
                                        <MenuItem onClick={() => navigate('/Signup')}>
                                            <Flex align='center'>
                                                {/* <FaUser/> */}
                                                <Text ml={2}> SignUp </Text>
                                            </Flex>
                                        </MenuItem>
                                    </>
                            }

                        </MenuList>
                    </Menu>
                </Flex>


                {/* for mobile devices */}
                <Box display={{ base: "flex", lg: "none" }}>
                    <Menu>
                        <MenuButton><GiHamburgerMenu style={{ fontSize: "25px" }} /></MenuButton>
                        <MenuList>
                            <MenuItem>
                                <Link to="/buisness">BUSINESS SETUP</Link>
                            </MenuItem>
                            <MenuItem>
                                <Link to="/tax">TAX AND COMPLIANCE</Link>
                            </MenuItem>
                            <MenuItem>
                                <Link to="/trademark">TRADEMARK AND IP</Link>
                            </MenuItem>
                            <MenuItem>
                                <Link to="/income">INCOME TAX</Link>
                            </MenuItem>
                            <MenuItem>
                                <Link to="/Software">SOFTWARE</Link>
                            </MenuItem>
                            <MenuItem>
                                <Link to="/fund">FUNDRAISING</Link>
                            </MenuItem>
                            <MenuItem>
                                <Link to="/ngo">NGO</Link>
                            </MenuItem>
                            <MenuItem>
                                <Link to={"/Profile"}>

                                    PROFILE

                                </Link>
                            </MenuItem>
                        </MenuList>
                    </Menu>
                </Box>
            </Flex>
        </Box>
    )
}

// hjhhhj



{/* <Box position={"sticky"} top={"0px"} zIndex={"1"}>
    <Flex h="30px" p="0% 13%" display={{ base: "none", lg: "flex" }} justifyContent="space-between" backgroundColor="#1E1E1E" fontSize="14px">
        <Flex alignItems="center" gap="10px" padding="5px" fontFamily="'Montserrat', sans-serif">
            <Link to="/">
                <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.1818 0H0.636364C0.284375 0 0 0.284375 0 0.636364V13.3636C0 13.7156 0.284375 14 0.636364 14H17.1818C17.5338 14 17.8182 13.7156 17.8182 13.3636V0.636364C17.8182 0.284375 17.5338 0 17.1818 0ZM16.3864 2.20341V12.5682H1.43182V2.20341L0.882955 1.77585L1.66449 0.771591L2.51563 1.43381H15.3045L16.1557 0.771591L16.9372 1.77585L16.3864 2.20341ZM15.3045 1.43182L8.90909 6.40341L2.51364 1.43182L1.6625 0.769602L0.880966 1.77386L1.42983 2.20142L8.22301 7.48324C8.41837 7.63501 8.65872 7.7174 8.90611 7.7174C9.1535 7.7174 9.39384 7.63501 9.58921 7.48324L16.3864 2.20341L16.9352 1.77585L16.1537 0.771591L15.3045 1.43182Z" fill="white" />
                </svg>
            </Link>
            <Text color="white">
                <Link to="#">info.loremipsum.com</Link>
            </Text>
        </Flex>
        <Flex color="white" alignItems="center" gap="10px" padding="5px" as="b" fontFamily="'Poppins', sans-serif">
            <Text><Link to="#">Contact Us</Link></Text>
            <Text borderRight="1px solid white" paddingRight="10px"><Link to="#">Blog</Link></Text>
            <Link to="">
                <svg width="8" height="15" viewBox="0 0 8 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.38249 2.49002H7.79249V0.105022C7.1098 0.0340327 6.42386 -0.00101571 5.73749 2.2398e-05C3.69749 2.2398e-05 2.3025 1.24502 2.3025 3.52502V5.49001H0V8.16001H2.3025V15H5.06249V8.16001H7.35749L7.70249 5.49001H5.06249V3.78752C5.06249 3.00002 5.27249 2.49002 6.38249 2.49002Z" fill="white" />
                </svg>
            </Link>
            <Link to="">
                <svg width="17" height="13" viewBox="0 0 17 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.2499 1.54037C15.6404 1.80522 14.9954 1.97972 14.3355 2.05833C15.0291 1.65221 15.5506 1.00702 15.8024 0.243755C15.1467 0.627183 14.4305 0.896215 13.6845 1.03933C13.3704 0.710105 12.9926 0.448201 12.5741 0.269533C12.1556 0.0908651 11.7051 -0.000835291 11.25 5.73299e-06C9.4077 5.73299e-06 7.91677 1.46927 7.91677 3.28046C7.91547 3.53239 7.94433 3.78357 8.00276 4.02864C6.68167 3.96671 5.38805 3.6297 4.20467 3.03917C3.02129 2.44865 1.97419 1.61761 1.13039 0.599223C0.834359 1.09827 0.677803 1.66767 0.677081 2.24792C0.677081 3.38541 1.27054 4.39088 2.16666 4.97994C1.63574 4.96734 1.11569 4.82682 0.650675 4.5703V4.61093C0.650675 6.20207 1.80171 7.52576 3.32515 7.82707C3.03867 7.90343 2.74345 7.94213 2.44697 7.94217C2.2366 7.94254 2.0267 7.92212 1.82033 7.88123C2.24385 9.18461 3.47647 10.1325 4.9366 10.1596C3.75014 11.074 2.29348 11.5682 0.79557 11.5646C0.529687 11.5642 0.26405 11.5483 0 11.5172C1.52383 12.4902 3.29517 13.0049 5.10316 13C11.2429 13 14.5972 7.99972 14.5972 3.66302C14.5972 3.52083 14.5935 3.37864 14.5867 3.23984C15.2377 2.77674 15.801 2.20123 16.2499 1.54037Z" fill="white" />
                </svg>
            </Link>
        </Flex>
    </Flex>
    <Flex backgroundColor="#FFB91D" fontFamily="'Roboto', sans-serif" as="b" padding={{ base: " 10px 8%", lg: "10px 1%" }} justifyContent="space-between" alignItems="center" margin={"auto"}>
        <Link to="/">
            <Image src={icon} w={{ base: "78px", lg: "118px" }} />
        </Link>
        <Text color="white" alignItems={"center"} _hover={{ backgroundColor: "darkgrey", borderRadius: "10px" }} p={"10px"} display={{ base: "none", lg: "flex" }}><Link to="/buisness"><BusinessSetup /><CiMenuKebab /></Link></Text>
        <Text display={{ base: "none", lg: "flex" }} color="white" alignItems={"center"} _hover={{ backgroundColor: "darkgrey", borderRadius: "10px" }} p={"10px"}><Link to="/tax"><TaxCompliance /></Link><CiMenuKebab /></Text>
        <Text display={{ base: "none", lg: "flex" }} color="white" alignItems={"center"} _hover={{ backgroundColor: "darkgrey", borderRadius: "10px" }} p={"10px"}><Link to="/income"><IncomeTax /></Link><CiMenuKebab /></Text>
        <Text display={{ base: "none", lg: "flex" }} color="white" alignItems={"center"} _hover={{ backgroundColor: "darkgrey", borderRadius: "10px" }} p={"10px"}><Link to="/trademark">
            <TrademarkIP />
        </Link><CiMenuKebab /></Text>
        <Text display={{ base: "none", lg: "flex" }} color="white" alignItems={"center"} _hover={{ backgroundColor: "darkgrey", borderRadius: "10px" }} p={"10px"}><Link to="/ngo"><NGO /></Link><CiMenuKebab /></Text>
        <Text display={{ base: "none", lg: "flex" }} color="white" alignItems={"center"} _hover={{ backgroundColor: "darkgrey", borderRadius: "10px" }} p={"10px"}><Link to="/fund"><FundRaising /></Link><CiMenuKebab /></Text>
        <Text display={{ base: "none", lg: "flex" }} color="white" alignItems={"center"} _hover={{ backgroundColor: "darkgrey", borderRadius: "10px" }} p={"10px"}><Link to="/Software">SOFTWARE</Link></Text>
       <Link to={"/Profile"}><Text _hover={{ cursor: "pointer", backgroundColor: "white", borderRadius: "10px" }} p={"10px"} display={{ base: "none", lg: "flex" }}>
           <Image src={user} border={"1px solid black"} margin={"1px"} borderRadius={"50%"}></Image> PROFILE</Text></Link>
       <Box display={{ base: "flex", lg: "none" }}>
           <Menu>
               <MenuButton><GiHamburgerMenu style={{ fontSize: "25px" }} /></MenuButton>
               <MenuList>
                   <MenuItem>
                       <Link to="/buisness">BUSINESS SETUP</Link>
                   </MenuItem>
                   <MenuItem>
                       <Link to="/tax">TAX & COMPLIANCE</Link>
                   </MenuItem>
                   <MenuItem>
                       {/* TRADEMARK AND IP */}

//                        <Link to="/trademark">
//                            BUSINESS COMPLIANCES
//                        </Link>
//                    </MenuItem>
//                    <MenuItem>
//                        <Link to="/income">INCOME TAX</Link>
//                    </MenuItem>
//                    <MenuItem>
//                        <Link to="/Software">SOFTWARE</Link>
//                    </MenuItem>
//                    <MenuItem>
//                        <Link to="/fund">LONE
//                            {/* FUNDRAISING */}
//                        </Link>
//                    </MenuItem>
//                    <MenuItem>
//                        <Link to="/ngo">NGO</Link>
//                    </MenuItem>
//                    <MenuItem>
//                        <Link to={"/Profile"}>

//                            PROFILE

//                        </Link>
//                    </MenuItem>
//                </MenuList>
//            </Menu>
//        </Box>
//    </Flex>
// </Box> */}
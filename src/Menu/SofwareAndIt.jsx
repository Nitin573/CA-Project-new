
import { Box, GridItem, Grid, Text } from "@chakra-ui/react";
import { useState } from "react";
import "../styles/NavbarStyles/BusinessSetup.css";
import { Link } from "react-router-dom";


const SoftwareAndIt = () => {

    const [isActive, setIsActive] = useState(false);
    const [downArrow, setDownArrow] = useState(false);

    const toggleFunc = () => {
        setIsActive(prev => !prev);
    }

    const ChangeActive = () => {
        setIsActive(false);
    }

    return (
        <Box>
            <Box 
                onMouseEnter={() => setDownArrow(true)} 
                onMouseLeave={() => setDownArrow(false)}  
                className="Trademark_Menu" 
                onClick={() => toggleFunc()}
            >
                SOFTWARE AND IT 
            </Box>
            {
                isActive ? (
                    <Box mt="90px" className="hover_Box_Container1" onMouseLeave={() => ChangeActive()}>
                        <Grid gridTemplateColumns={{ base: "repeat(3,33%)" }} width="90%" margin="auto">
                            <GridItem className="grid_item_in_hovered_div">
                                <Box className="hoverBoxHeadingText">
                                    Business Contracts
                                </Box>
                                <Box className="hoverBoxHeadingText_container">
                                    <Link><Text onClick={() => ChangeActive()} className="hoverBoxHeadingText_container_child">Non Disclosure Agreement NDA</Text></Link>
                                    <Link><Text onClick={() => ChangeActive()} className="hoverBoxHeadingText_container_child">Service Level Agreement</Text></Link>
                                    <Link><Text onClick={() => ChangeActive()} className="hoverBoxHeadingText_container_child">Franchise Agreement</Text></Link>
                                    <Link><Text onClick={() => ChangeActive()} className="hoverBoxHeadingText_container_child">Master Service Agreement</Text></Link>
                                    <Link><Text onClick={() => ChangeActive()} className="hoverBoxHeadingText_container_child">Shareholders Agreement</Text></Link>
                                    <Link><Text onClick={() => ChangeActive()} className="hoverBoxHeadingText_container_child">Joint Venture Agreement</Text></Link>
                                    <Link><Text onClick={() => ChangeActive()} className="hoverBoxHeadingText_container_child">Founders Agreement</Text></Link>
                                    <Link><Text onClick={() => ChangeActive()} className="hoverBoxHeadingText_container_child">Startup India Registration</Text></Link>
                                    <Link><Text onClick={() => ChangeActive()} className="hoverBoxHeadingText_container_child">Vendor Agreement</Text></Link>
                                    <Link><Text onClick={() => ChangeActive()} className="hoverBoxHeadingText_container_child">Consultancy Agreement</Text></Link>
                                    <Link><Text onClick={() => ChangeActive()} className="hoverBoxHeadingText_container_child">Memorandum of Understanding</Text></Link>
                                </Box>
                                <Box className="hoverBoxHeadingText">
                                    Personal & Family
                                </Box>
                                <Box className="hoverBoxHeadingText_container">
                                    <Link><Text onClick={() => ChangeActive()} className="hoverBoxHeadingText_container_child">Make a Will</Text></Link>
                                    <Link><Text onClick={() => ChangeActive()} className="hoverBoxHeadingText_container_child">Power of Attorney</Text></Link>
                                </Box>
                            </GridItem>
                            <GridItem className="grid_item_in_hovered_div">
                                <Box className="hoverBoxHeadingText">
                                    Website Policies
                                </Box>
                                <Box className="hoverBoxHeadingText_container">
                                    <Link><Text onClick={() => ChangeActive()} className="hoverBoxHeadingText_container_child">Terms of Service</Text></Link>
                                    <Link><Text onClick={() => ChangeActive()} className="hoverBoxHeadingText_container_child">GDPR</Text></Link>
                                    <Link><Text onClick={() => ChangeActive()} className="hoverBoxHeadingText_container_child">Disclaimer</Text></Link>
                                    <Link><Text onClick={() => ChangeActive()} className="hoverBoxHeadingText_container_child">Scope of Work and Deliverables Agreement</Text></Link>
                                </Box>
                                <Box className="hoverBoxHeadingText">
                                    Real Estate
                                </Box>
                                <Box className="hoverBoxHeadingText_container">
                                    <Link><Text onClick={() => ChangeActive()} className="hoverBoxHeadingText_container_child">Rental Agreement</Text></Link>
                                    <Link><Text onClick={() => ChangeActive()} className="hoverBoxHeadingText_container_child">Sale Deed</Text></Link>
                                </Box>
                            </GridItem>
                            <GridItem className="grid_item_in_hovered_div">
                                <Box className="hoverBoxHeadingText">
                                    Notices
                                </Box>
                                <Box className="hoverBoxHeadingText_container">
                                    <Link><Text onClick={() => ChangeActive()} className="hoverBoxHeadingText_container_child">Legal Notice</Text></Link>
                                    <Link><Text onClick={() => ChangeActive()} className="hoverBoxHeadingText_container_child">Legal Notice for recovery of dues</Text></Link>
                                    <Link><Text onClick={() => ChangeActive()} className="hoverBoxHeadingText_container_child">Cheque Bounce Notice</Text></Link>
                                </Box>
                                <Box className="hoverBoxHeadingText">
                                    HR Policies
                                </Box>
                                <Box className="hoverBoxHeadingText_container">
                                    <Link><Text onClick={() => ChangeActive()} className="hoverBoxHeadingText_container_child">Employment Agreement</Text></Link>
                                    <Link><Text onClick={() => ChangeActive()} className="hoverBoxHeadingText_container_child">ESOP</Text></Link>
                                </Box>
                            </GridItem>
                        </Grid>
                    </Box>
                ) : (<></>)
            }
        </Box>
    );
};

export { SoftwareAndIt };

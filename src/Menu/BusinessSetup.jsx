import { Box, GridItem, Grid, Text } from "@chakra-ui/react";
import { useState } from "react";
import "../styles/NavbarStyles/BusinessSetup.css";
import { Link } from "react-router-dom";

const BusinessSetup = () => {

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
            <div 
                onMouseEnter={() => setDownArrow(true)} 
                onMouseLeave={() => setDownArrow(false)} 
                className="Trademark_Menu" 
                onClick={() => toggleFunc()}
            >   
                BUSINESS SETUP
            </div>
            {
                isActive ? (
                    <Box mt="90px" className="hover_Box_Container1" onMouseLeave={() => ChangeActive()}>
                        <Grid gridTemplateColumns={{ base: "repeat(3,33%)" }} width="90%" margin="auto">
                            <GridItem className="grid_item_in_hovered_div">
                                <Box className="hoverBoxHeadingText">
                                    Business Registration
                                </Box>
                                <Box className="hoverBoxHeadingText_container">
                                    <Link to="private_limited_company"><Text onClick={() => ChangeActive()} className="hoverBoxHeadingText_container_child">Private Limited Company</Text></Link>
                                    <Link to="limited_liability_partnership"><Text onClick={() => ChangeActive()} className="hoverBoxHeadingText_container_child">Limited Liability Partnership</Text></Link>
                                    <Link to="one_persone_company"><Text onClick={() => ChangeActive()} className="hoverBoxHeadingText_container_child">One Person Company</Text></Link>
                                    <Link to="sole_proprietorship"><Text onClick={() => ChangeActive()} className="hoverBoxHeadingText_container_child">Sole Proprietorship</Text></Link>
                                    <Link to="nidhi_company"><Text onClick={() => ChangeActive()} className="hoverBoxHeadingText_container_child">Nidhi Company</Text></Link>
                                    <Link to="producer_company"><Text onClick={() => ChangeActive()} className="hoverBoxHeadingText_container_child">Producer Company</Text></Link>
                                    <Link to="partnership_firm"><Text onClick={() => ChangeActive()} className="hoverBoxHeadingText_container_child">Partnership Firm</Text></Link>
                                </Box>
                            </GridItem>
                            <GridItem className="grid_item_in_hovered_div">
                                <Box className="hoverBoxHeadingText">
                                    Company Name Search
                                </Box>
                                <Box className="hoverBoxHeadingText_container">
                                    <Link to="company_name_search" ><Text onClick={() => ChangeActive()} className="hoverBoxHeadingText_container_child">Company Name Search</Text></Link>
                                </Box>
                                <Box className="hoverBoxHeadingText">
                                    Licenses & Registrations
                                </Box>
                                <Box className="hoverBoxHeadingText_container">
                                    <Link to="digital_signature" ><Text onClick={() => ChangeActive()} className="hoverBoxHeadingText_container_child">Digital Signature Certificate</Text></Link>
                                    <Link to="apply_msme" ><Text onClick={() => ChangeActive()} className="hoverBoxHeadingText_container_child">MSME/SSI Registration</Text></Link>
                                    <Link to="iso_certification" ><Text onClick={() => ChangeActive()} className="hoverBoxHeadingText_container_child">ISO Certification</Text></Link>
                                    <Link to="import_export" ><Text onClick={() => ChangeActive()} className="hoverBoxHeadingText_container_child">IEC [Import/Export Code]</Text></Link>
                                    <Link to={"/cfss"}><Text onClick={() => ChangeActive()} className="hoverBoxHeadingText_container_child">CFSS</Text></Link>
                                    {/* <Link to="legal_metrology" ><Text onClick={() => ChangeActive()} className="hoverBoxHeadingText_container_child">Legal Metrology</Text></Link> */}
                                    {/* <Link to="hallmark_registration" ><Text onClick={() => ChangeActive()} className="hoverBoxHeadingText_container_child">Hallmark Registration</Text></Link> */}
                                    <Link to="bis_registration" ><Text onClick={() => ChangeActive()} className="hoverBoxHeadingText_container_child">BIS Registration</Text></Link>
                                </Box>
                            </GridItem>
                            <GridItem className="grid_item_in_hovered_div">
                                {/* <Box className="hoverBoxHeadingText">
                                    Web Development
                                </Box>
                                <Box className="hoverBoxHeadingText_container">
                                    <Link to="wesite_development" ><Text onClick={() => ChangeActive()} className="hoverBoxHeadingText_container_child">Web/E-Commerce Website Development</Text></Link>
                                </Box> */}
                                {/* <Box className="hoverBoxHeadingText">
                                    International Business Setup
                                </Box>
                                <Box className="hoverBoxHeadingText_container">
                                    <Link to="usa_incorporation"><Text onClick={() => ChangeActive()} className="hoverBoxHeadingText_container_child">US Incorporation</Text></Link>
                                    <Link to="singapore_incorporation"><Text onClick={() => ChangeActive()} className="hoverBoxHeadingText_container_child">Singapore Incorporation</Text></Link>
                                </Box> */}
                            </GridItem>
                        </Grid>
                    </Box>
                ) : (<></>)
            }
        </Box>
    );
};

export { BusinessSetup };

import { Box, GridItem, Grid, Text, Collapse, Button } from "@chakra-ui/react";
import { useState } from "react";
import "../styles/NavbarStyles/BusinessSetup.css";
import { Link } from "react-router-dom";


const TrademarkIP = () => {

    const [isActive, setIsActive] = useState(false);
    const [isOpen, onToggle] = useState(false);
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
                BUSINESS COMPLIANCES
                {/* TRADEMARK AND IP */}
            </Box>
            {
                isActive ? (
                    <Box mt="90px" className="hover_Box_Container1" onMouseLeave={() => ChangeActive()}>
                        <Grid gridTemplateColumns={{ base: "repeat(2,40%)" }} width="90%" margin="auto">
                            <GridItem className="grid_item_in_hovered_div">
                                <Box className="hoverBoxHeadingText">
                                    {/* Trademark */}
                                    Business Compliances
                                </Box>
                                <Box className="hoverBoxHeadingText_container">
                                    {/* <Link to="trademark_registration"><Text onClick={() => ChangeActive()} className="hoverBoxHeadingText_container_child">Trademark Registration</Text></Link>
                                    <Link to="search_for_trademark"><Text onClick={() => ChangeActive()} className="hoverBoxHeadingText_container_child">Search for Trademark</Text></Link>
                                    <Link to="respond_objection"><Text onClick={() => ChangeActive()} className="hoverBoxHeadingText_container_child">Respond to TM Objection</Text></Link>
                                    <Link to="well_known_trademark"><Text onClick={() => ChangeActive()} className="hoverBoxHeadingText_container_child">Well Known Trademark</Text></Link>
                                    <Link to="logo_design"><Text onClick={() => ChangeActive()} className="hoverBoxHeadingText_container_child">Logo Design</Text></Link> */}
                                    <Link to={"/Add_a_Director"}><Text onClick={() => ChangeActive()} className="hoverBoxHeadingText_container_child">Add a Director</Text></Link>
                                    <Link to={"/Remove_a_Director"}><Text onClick={() => ChangeActive()} className="hoverBoxHeadingText_container_child">Remove a Director</Text></Link>
                                    <Link to={'/Increase_Authorized_Capital'}><Text onClick={() => ChangeActive()} className="hoverBoxHeadingText_container_child">Increase Authorized Capital</Text></Link>
                                    <Link to={'/Close_the_Pvt_Ltd_Company'}><Text onClick={() => ChangeActive()} className="hoverBoxHeadingText_container_child">Close the Pvt Ltd Company</Text></Link> 

                                    {/* <Button paddingLeft={0} width="fit-content" color="#05dbf7" bg="white" size={'sm'} onClick={() => onToggle(prev => !prev)}>{!isOpen ? "[More]" : "[Less]"}</Button>
                                    <Collapse in={isOpen} animateOpacity>
                                        <Link><Text onClick={() => ChangeActive()} className="hoverBoxHeadingText_container_child">Trademark Watch</Text></Link>
                                        <Link><Text onClick={() => ChangeActive()} className="hoverBoxHeadingText_container_child">Trademark Renewal</Text></Link>
                                        <Link><Text onClick={() => ChangeActive()} className="hoverBoxHeadingText_container_child">Trademark Assignment</Text></Link>
                                        <Link><Text onClick={() => ChangeActive()} className="hoverBoxHeadingText_container_child">USA Trademark</Text></Link>
                                        <Link><Text onClick={() => ChangeActive()} className="hoverBoxHeadingText_container_child">International Trademark</Text></Link>
                                    </Collapse> */}
                                </Box>
                                <Box className="hoverBoxHeadingText">
                                    Copyright
                                </Box>
                                <Box className="hoverBoxHeadingText_container">
                                    <Link to="copyright_registration"><Text onClick={() => ChangeActive()} className="hoverBoxHeadingText_container_child">Copyright Registration</Text></Link>
                                </Box>
                                <Box className="hoverBoxHeadingText">
                                    Convert Your Business
                                </Box>
                                <Box className="hoverBoxHeadingText_container">
                                    <Link><Text onClick={() => ChangeActive()} className="hoverBoxHeadingText_container_child">Partnership to LLP</Text></Link>
                                    <Link><Text onClick={() => ChangeActive()} className="hoverBoxHeadingText_container_child">Private to Public Limite Company</Text></Link>
                                    <Link><Text onClick={() => ChangeActive()} className="hoverBoxHeadingText_container_child">Private to One Person Company</Text></Link>
                                </Box>
                            </GridItem>
                            <GridItem className="grid_item_in_hovered_div">
                                <Box className="hoverBoxHeadingText">
                                    {/* Patent */}
                                    Change In Pvt. Ltd. Company
                                </Box>
                                <Box className="hoverBoxHeadingText_container">
                                    {/* <Link to="indian_patent_search"><Text onClick={() => ChangeActive()} className="hoverBoxHeadingText_container_child">Indian Patent Search</Text></Link>
                                    <Link to="provisonal_application"><Text onClick={() => ChangeActive()} className="hoverBoxHeadingText_container_child">Provisonal Application</Text></Link>
                                    <Link to="permanent_patent"><Text onClick={() => ChangeActive()} className="hoverBoxHeadingText_container_child">Permanent Patent</Text></Link> */}
                                    <Link><Text onClick={() => ChangeActive()} className="hoverBoxHeadingText_container_child">Partnership to LLP</Text></Link>
                                    <Link><Text onClick={() => ChangeActive()} className="hoverBoxHeadingText_container_child">Private to Public Limite Company</Text></Link>
                                    <Link><Text onClick={() => ChangeActive()} className="hoverBoxHeadingText_container_child">Private to One Person Company</Text></Link>
                                </Box>
                                <Box className="hoverBoxHeadingText">
                                    {/* Infringement */}
                                    Change in Limited Liability Partner
                                </Box>
                                <Box className="hoverBoxHeadingText_container">
                                    <Link to={"/Add_Designated_Partner"}><Text onClick={() => ChangeActive()} className="hoverBoxHeadingText_container_child">Add Designated Partner</Text></Link>
                                    <Link to={"/Changes_to_LLP_Agreement"}><Text onClick={() => ChangeActive()} className="hoverBoxHeadingText_container_child">Changes to LLP Agreement</Text></Link>
                                    <Link to={"/Close_the_LLP"}><Text onClick={() => ChangeActive()} className="hoverBoxHeadingText_container_child">Close the LLP</Text></Link>
                                </Box>
                                <Box className="hoverBoxHeadingText">
                                    {/* {Design Registration} */}
                                    {/* Convert Your Business */}
                                </Box>
                                <Box className="hoverBoxHeadingText_container">
                                    {/* <Link to="logo_design"><Text onClick={() => ChangeActive()} className="hoverBoxHeadingText_container_child">Logo Design</Text></Link>
                                    <Link to="design_registration"><Text onClick={() => ChangeActive()} className="hoverBoxHeadingText_container_child">Design Registration</Text></Link> */}
                                    
                                    
                                </Box>
                            </GridItem>
                        </Grid>
                    </Box>
                ) : (
                    <></>
                )
            }
        </Box>
    );
};

export { TrademarkIP };

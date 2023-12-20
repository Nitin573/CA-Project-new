
import { Box, GridItem, Grid, Text } from "@chakra-ui/react";
import { useState } from "react";
import "../styles/NavbarStyles/BusinessSetup.css";
import { Link } from "react-router-dom";


const NGO = () => {

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
                NGO
            </Box>
            {
                isActive ? (
                    <Box mt="90px" className="hover_Box_Container1" onMouseLeave={() => ChangeActive()}>
                        <Grid gridTemplateColumns={{ base: "repeat(3,33%)" }} width="90%" margin="auto">
                            <GridItem className="grid_item_in_hovered_div">
                                <Box className="hoverBoxHeadingText">
                                    Registration
                                </Box>
                                <Box className="hoverBoxHeadingText_container">
                                    <Link to={"/ngo1"}><Text onClick={() => ChangeActive()} className="hoverBoxHeadingText_container_child">NGO</Text></Link>
                                    <Link to={'/section8'}><Text onClick={() => ChangeActive()} className="hoverBoxHeadingText_container_child">Section 8</Text></Link>
                                    <Link to={'/trust_registration'}><Text onClick={() => ChangeActive()} className="hoverBoxHeadingText_container_child">Trust Registration</Text></Link>
                                    <Link to={'/society_registration'}><Text onClick={() => ChangeActive()} className="hoverBoxHeadingText_container_child">Society Registration</Text></Link>

                                </Box>
                            </GridItem>
                            <GridItem className="grid_item_in_hovered_div">
                                <Box className="hoverBoxHeadingText">
                                    NGO Compliance
                                </Box>
                                <Box className="hoverBoxHeadingText_container">
                                    <Link to={'/ngo_compliance'}><Text onClick={() => ChangeActive()} className="hoverBoxHeadingText_container_child">NGO Compliance</Text></Link>
                                    <Link to={'/section_8_compliance'}><Text onClick={() => ChangeActive()} className="hoverBoxHeadingText_container_child">Section 8 Complaince</Text></Link>
                                    <Link to={'/csr_1_filing'}><Text onClick={() => ChangeActive()} className="hoverBoxHeadingText_container_child">CSR-1 Filing</Text></Link>
                                    <Link to={'/sec_80g_&_sec_12a'}><Text onClick={() => ChangeActive()} className="hoverBoxHeadingText_container_child">Sec.80G & Sec.12A</Text></Link>
                                    {/* <Link to={'/darpan_registration'}><Text onClick={() => ChangeActive()} className="hoverBoxHeadingText_container_child">Darpan Registration</Text></Link> */}
                                </Box>

                            </GridItem>

                        </Grid>
                    </Box>
                ) : (<></>)
            }
        </Box>
    );
};

export { NGO };

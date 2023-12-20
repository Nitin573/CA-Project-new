
import { Box, GridItem, Grid, Text } from "@chakra-ui/react";
import { useState } from "react";
import "../styles/NavbarStyles/BusinessSetup.css";
import { Link } from "react-router-dom";


const FundRaising = () => {

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
                {/* FUNDRAISING */} LONE
            </Box>
            {
                isActive ? (
                    <Box mt="90px" className="hover_Box_Container1" onMouseLeave={() => ChangeActive()}>
                        <Grid gridTemplateColumns={{ base: "repeat(3,33%)" }} width="90%" margin="auto">
                            <GridItem className="grid_item_in_hovered_div">
                                <Box className="hoverBoxHeadingText">
                                    {/* Fundraising */}
                                    LONE
                                </Box>



                                <Box className="hoverBoxHeadingText_container">
                                    <Link to={"/fundraising"}><Text onClick={() => ChangeActive()} className="hoverBoxHeadingText_container_child">
                                        {/* Fundraising */}
                                        Business Loan Documentation
</Text></Link>
                                    <Link to={"/pitch_deck"}><Text onClick={() => ChangeActive()} className="hoverBoxHeadingText_container_child">
                                        {/* Pitch Deck */}
                                        Balance Sheet
                                    </Text></Link>

                                </Box>

                            </GridItem>

                        </Grid>
                    </Box>
                ) : (<></>)
            }
        </Box>
    );
};

export { FundRaising };

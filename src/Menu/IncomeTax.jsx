
import { Box, GridItem, Grid, Text } from "@chakra-ui/react";
import { useState } from "react";
import "../styles/NavbarStyles/BusinessSetup.css";
import { Link } from "react-router-dom";


const IncomeTax = () => {

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
                INCOME TAX
            </Box>
            {
                isActive ? (
                    <Box mt="90px" className="hover_Box_Container1" onMouseLeave={() => ChangeActive()}>
                        <Grid gridTemplateColumns={{ base: "repeat(3,33%)" }} width="90%" margin="auto">
                            <GridItem className="grid_item_in_hovered_div">
                                
                                <Box className="hoverBoxHeadingText">
                                    Personal & Family
                                </Box>
                                <Box className="hoverBoxHeadingText_container">
                                    {/* <Link><Text onClick={() => ChangeActive()} className="hoverBoxHeadingText_container_child">Make a Will</Text></Link>
                                    <Link><Text onClick={() => ChangeActive()} className="hoverBoxHeadingText_container_child">Power of Attorney</Text></Link> */}
                                    <Link to={"/tds"}><Text onClick={() => ChangeActive()} className="hoverBoxHeadingText_container_child">TDS Return Filing</Text></Link>
                                    <Link to={'/individual_tax'}><Text onClick={() => ChangeActive()} className="hoverBoxHeadingText_container_child">Individual Income Tax Filing</Text></Link>
                                    <Link to={"/Proprietorship_Tax_Return_Filing"}><Text onClick={() => ChangeActive()} className="hoverBoxHeadingText_container_child">Proprietorship Tax Return Filing</Text></Link>
                                    
                                </Box>
                                <Box className="hoverBoxHeadingText">
                                    ACCOUNTING
                                </Box>
                                <Box className="hoverBoxHeadingText_container">
                                    <Link to={'/accounting_book'}><Text onClick={() => ChangeActive()} className="hoverBoxHeadingText_container_child">Accounting and Book-keeping</Text></Link>
                                </Box>

                            </GridItem>
                            
                        </Grid>
                    </Box>
                ) : (<></>)
            }
        </Box>
    );
};

export { IncomeTax };

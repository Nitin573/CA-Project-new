import { Box, GridItem, Grid, Text, Collapse, Button } from "@chakra-ui/react";
import { useState } from "react";
import "../styles/NavbarStyles/BusinessSetup.css";
import { Link } from "react-router-dom";

const TaxCompliance = () => {

    const [isActive, setIsActive] = useState(false);
    const [isOpen, onToggle] = useState(false);
    const [isOpenSecond, onToggleSecond] = useState(false);
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
                TAX & COMPLIANCE
            </Box>
            {
                isActive ? (
                    <Box mt="90px" className="hover_Box_Container1" onMouseLeave={() => ChangeActive()}>
                        <Grid gridTemplateColumns={{ base: "repeat(3,33%)" }} width="90%" margin="auto">
                            <GridItem className="grid_item_in_hovered_div">
                                <Box className="hoverBoxHeadingText">
                                    GST and Other Indirect Tax
                                </Box>
                                <Box className="hoverBoxHeadingText_container">
                                    <Link to={"/gst_registration"}><Text onClick={() => ChangeActive()} className="hoverBoxHeadingText_container_child">GST Registration</Text></Link>
                                    <Link to={'/gst_filinig'}><Text onClick={() => ChangeActive()} className="hoverBoxHeadingText_container_child">GST Filing</Text></Link>
                                    <Link to={'/gst_advisory_portal'}><Text onClick={() => ChangeActive()} className="hoverBoxHeadingText_container_child">GST Consultancy</Text></Link>
                                    {/* <Link to={'/gst_indirect_tax'}><Text onClick={() => ChangeActive()} className="hoverBoxHeadingText_container_child">Indirect Tax</Text></Link> */}
                                    <Link to={"/gst_rodtep"}><Text onClick={() => ChangeActive()} className="hoverBoxHeadingText_container_child">RoDTEP</Text></Link>
                                </Box>
                                {/* <Box className="hoverBoxHeadingText">
                                    Changes in Pvt Ltd Company
                                </Box> */}
                                <Box className="hoverBoxHeadingText_container">
                                    {/* <Link to={"/Add_a_Director"}><Text onClick={() => ChangeActive()} className="hoverBoxHeadingText_container_child">Add a Director</Text></Link>
                                    <Link to={"/Remove_a_Director"}><Text onClick={() => ChangeActive()} className="hoverBoxHeadingText_container_child">Remove a Director</Text></Link>
                                    <Link to={'/Increase_Authorized_Capital'}><Text onClick={() => ChangeActive()} className="hoverBoxHeadingText_container_child">Increase Authorized Capital</Text></Link>
                                    <Link to={'/Close_the_Pvt_Ltd_Company'}><Text onClick={() => ChangeActive()} className="hoverBoxHeadingText_container_child">Close the Pvt Ltd Company</Text></Link> */}
                                    {/* <Button paddingLeft={0} width="fit-content" color="#05dbf7" bg="white" size={'sm'} onClick={() => onToggle(prev => !prev)}>{!isOpen ? "[More]" : "[Less]"}</Button>
                                    <Collapse in={isOpen} animateOpacity>
                                        <Link><Text onClick={() => ChangeActive()} className="hoverBoxHeadingText_container_child">IEC [Import/Export Code]</Text></Link>
                                        <Link><Text onClick={() => ChangeActive()} className="hoverBoxHeadingText_container_child">Legal Metrology</Text></Link>
                                        <Link><Text onClick={() => ChangeActive()} className="hoverBoxHeadingText_container_child">Hallmark Registration</Text></Link>
                                        <Link><Text onClick={() => ChangeActive()} className="hoverBoxHeadingText_container_child">BIS Registration</Text></Link>
                                    </Collapse> */}
                                </Box>
                                {/* <Box className="hoverBoxHeadingText">
                                    Changes in Limited Liability Partnership
                                </Box>
                                <Box className="hoverBoxHeadingText_container">
                                    <Link to={"/Add_Designated_Partner"}><Text onClick={() => ChangeActive()} className="hoverBoxHeadingText_container_child">Add Designated Partner</Text></Link>
                                    <Link to={"/Changes_to_LLP_Agreement"}><Text onClick={() => ChangeActive()} className="hoverBoxHeadingText_container_child">Changes to LLP Agreement</Text></Link>
                                    <Link to={"/Close_the_LLP"}><Text onClick={() => ChangeActive()} className="hoverBoxHeadingText_container_child">Close the LLP</Text></Link>
                                </Box> */}
                            </GridItem>
                            <GridItem className="grid_item_in_hovered_div">
                                {/* <Box className="hoverBoxHeadingText">
                                    Corporate Compliance
                                </Box> */}

                                {/* <Box className="hoverBoxHeadingText_container">
                                    <Box className="hoverBoxHeadingText2">
                                        Mandatory Annual Filings
                                    </Box>
                                    <Link to={"/pvt"}><Text onClick={() => ChangeActive()} className="hoverBoxHeadingText_container_child">Private Limited Company / OPC</Text></Link>
                                    <Link to={"/llp"}><Text onClick={() => ChangeActive()} className="hoverBoxHeadingText_container_child">Limited Liability Partnership</Text></Link>
                                    <Link to={"/cfss"}><Text onClick={() => ChangeActive()} className="hoverBoxHeadingText_container_child">CFSS</Text></Link>
                                </Box> */}
                                {/* <Box className="hoverBoxHeadingText">
                                    Labour Compliance
                                </Box>
                                <Box className="hoverBoxHeadingText_container">
                                    <Link to={"/Provident_Fund_Registration"}><Text onClick={() => ChangeActive()} className="hoverBoxHeadingText_container_child">Provident Fund (PF) Registration</Text></Link>
                                    <Link to={"/ESI_Registration"}><Text onClick={() => ChangeActive()} className="hoverBoxHeadingText_container_child">ESI Registration</Text></Link>
                                    <Link to={"/Professional_Tax_Registration"}><Text onClick={() => ChangeActive()} className="hoverBoxHeadingText_container_child">Professional Tax Registration</Text></Link>
                                    <Link to={"/Shops_and_Establishments_License"}><Text onClick={() => ChangeActive()} className="hoverBoxHeadingText_container_child">Shops and Establishments License</Text></Link>
                                    <Link to={"/ESOP"}><Text onClick={() => ChangeActive()} className="hoverBoxHeadingText_container_child">Employee Stock Option Plan [ESOP]</Text></Link>
                                    <Link to={"/Posh"}><Text onClick={() => ChangeActive()} className="hoverBoxHeadingText_container_child">POSH Compliance</Text></Link>
                                </Box> */}
                            </GridItem>
                            {/* <GridItem className="grid_item_in_hovered_div">
                                <Box className="hoverBoxHeadingText">
                                    Accounting & Tax
                                </Box>
                                <Box className="hoverBoxHeadingText_container">
                                    <Link to={'/accounting_book'}><Text onClick={() => ChangeActive()} className="hoverBoxHeadingText_container_child">Accounting and Book-keeping</Text></Link>
                                    <Link to={"/payroll_maintenance"}><Text onClick={() => ChangeActive()} className="hoverBoxHeadingText_container_child">Payroll Maintenance</Text></Link>
                                    <Link to={"/tds"}><Text onClick={() => ChangeActive()} className="hoverBoxHeadingText_container_child">TDS Return Filing</Text></Link>
                                    <Link to={'/individual_tax'}><Text onClick={() => ChangeActive()} className="hoverBoxHeadingText_container_child">Individual Income Tax Filing</Text></Link>
                                    <Link to={"/Proprietorship_Tax_Return_Filing"}><Text onClick={() => ChangeActive()} className="hoverBoxHeadingText_container_child">Proprietorship Tax Return Filing</Text></Link>
                                    <Link to={'/Income_Tax_Notice'}><Text onClick={() => ChangeActive()} className="hoverBoxHeadingText_container_child">Income Tax Notice</Text></Link>
                                </Box>
                                <Box className="hoverBoxHeadingText">
                                    Convert Your Business
                                </Box>
                                <Box className="hoverBoxHeadingText_container">
                                    <Link to={"/Convert_a_Sole_Proprietorship_to_Private_Limited_Company"}><Text onClick={() => ChangeActive()} className="hoverBoxHeadingText_container_child">Proprietorship to Pvt Ltd Company</Text></Link>
                                    <Link to={"/Compliance_Check_Secretarial_Audit"}><Text onClick={() => ChangeActive()} className="hoverBoxHeadingText_container_child">Compliance Check - Secretarial Audit</Text></Link>
                                    <Link to={"/Due_Diligence"}><Text onClick={() => ChangeActive()} className="hoverBoxHeadingText_container_child">Due Digilence</Text></Link>
                                    <Link to={"/RBI_Compliance"}><Text onClick={() => ChangeActive()} className="hoverBoxHeadingText_container_child">RBI Compliance</Text></Link>
                                    {/* <Button paddingLeft={0} width="fit-content" color="#05dbf7" bg="white" size={'sm'} onClick={() => onToggleSecond(prev => !prev)}>{!isOpenSecond ? "[More]" : "[Less]"}</Button>
                                    <Collapse in={isOpenSecond} animateOpacity>
                                        <Link><Text onClick={() => ChangeActive()} className="hoverBoxHeadingText_container_child">Partnership to LLP</Text></Link>
                                        <Link><Text onClick={() => ChangeActive()} className="hoverBoxHeadingText_container_child">Private to Public Limite Company</Text></Link>
                                        <Link><Text onClick={() => ChangeActive()} className="hoverBoxHeadingText_container_child">Private to One Person Company</Text></Link>
                                    </Collapse> */}
                                {/* </Box>
                            </GridItem> */} */
                        </Grid>
                    </Box>
                ) : (
                    <></>
                )
            }
        </Box>
    );
};

export { TaxCompliance };

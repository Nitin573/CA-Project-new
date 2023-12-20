import { Box, Button, Flex, HStack, Image, Input, Select, Text, VStack, Wrap, Heading, bgImage, } from '@chakra-ui/react'
import React from 'react'

import { Link } from 'react-router-dom'
import WP_from from '../../WP_From/WP_from';
const Top_gst_ragistration = () => {

    return (
        <VStack className="container" style={{ backgroundColor: "rgb(38,29,60,0.902)", color: "white", padding: "2%", boxSizing: "border-box", }}>
            {/* backgroundImage */}
            {/* <VStack bgImage={images}   style={{
                backgroundRepeat: "no-repeat",
                backgroundAttachment: "scroll",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}> */}


            <Flex flexDirection={{
                base: "column", md: "row", lg: "row"
            }} className="container">
                <VStack gap={"25px"} >

                    <Heading >Online GST Registration @ Only ₹399 With Tax Service
                    </Heading>
                    <hr />
                    <Text color="white">Tax Service has been the #1 choice for 25,000+ companies for quick and easy GST registration and filings. Join them today and leverage our team of experts at just ₹399!</Text>
                    <Text color="white">GST Registration in 7 business days
                    </Text >
                    <Text color="white">Enjoy hassle-free processing as Tax Service lays the groundwork for your business.</Text>
                    <a className="text-warning" href="#section5">List of documents required to complete your GST registration.</a>
                </VStack>



                <WP_from />



            </Flex >
            <Box className="container">
                <h3 id="mobile_list_of_documents" style={{ color: "rgb(252, 210, 0)", cursor: "pointer" }}>List of documents required for GST registration</h3>
                <Flex className="container" justify={"center"} justifyContent="space-evenly" flexDirection={{
                    base: "column", md: "row", lg: "row"
                }}>
                    <div style={{ borderRight: "3px solid orange", padding: "20px", justifyContent: "left", textAlign: "left" }}><h4 >
                        <b>Private Limited Company</b>
                    </h4>
                        <ul>
                            <li>Certificate of Incorporation</li>
                            <li>PAN Card of Company</li>
                            <li>Articles of Association, AOA</li>
                            <li>Memorandum of Association, MOA</li>
                            <li>Resolution signed by board members</li>
                            <li>Identity and address proof of directors</li>
                            <li>Digital Signature</li>
                            <li style={{ color: "rgb(252, 210, 0)", cursor: "pointer" }}>Director's Proof</li>
                        </ul>
                    </div>
                    <hr />
                    <div style={{ borderRight: "3px solid orange", padding: "20px", justifyContent: "left", textAlign: "left" }}>
                        <h4 className="mt-3 mb-2">
                            <b>LLP</b>
                        </h4>
                        <ul>
                            <li>PAN Card of LLP</li>
                            <li>LLP Agreement</li>
                            <li>Partners’ names and address proof</li>
                            <li style={{ color: "rgb(252, 210, 0)", cursor: "pointer" }}>Director's Proof</li>
                        </ul>
                    </div>
                    <hr />
                    <div style={{ borderRight: "3px  solid orange", padding: "20px", justifyContent: "left", textAlign: "left" }}>
                        <h4 className="mt-3 mb-2">
                            <b>Individual/Proprietorship</b>
                        </h4>
                        <ul>
                            <li>PAN Card</li>
                            <li>Address proof of proprietor</li>
                        </ul>

                    </div>
                    <hr />
                </Flex>
            </Box>
            {/* </VStack> */}
        </VStack>
    )
}

export default Top_gst_ragistration
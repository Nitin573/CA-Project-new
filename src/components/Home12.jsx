import { Box, Button, Flex, Image, Input, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import software2 from "./assets/software2.webp";
import css from "./animate.css";
import React, { useState, useEffect } from "react";

import { MdReadMore } from "react-icons/md";
import data from "./data";



export default function Home12() {
 

  return (
    <Box  mb="70px" bg="#f4f4f4" padding="10px">
        
      <Flex className="topsec" 
        padding={{ base: "0px 1%", lg: "0px 0px 0px 6%" }}
        gap="30px"
        w="95%"
        position="relative"
        justifyContent="center"
        alignItems="center"
      >
        <div w="100%" style={{border:"9px solid grey",height:"320px",display:"flex",justifyContent:"center",alignItems:"center"}} className="section-center">

          <Image w="90%" h="250px"  src={software2} />
        </div>
        <Box textAlign={{ base: "center", lg: "left" }}>
          <Text
            lineHeight={{ base: "35px", lg: "65px" }}
            fontFamily="'Poppins', sans-serif"
            fontSize={{ base: "30px", lg: "57px" }}
            color="#1E1E1E"
            marginTop={{ base: "6px", lg: "11px" }}
            fontWeight="800"
          >
            GST Billing Software in India for Small Businesses
          </Text>
          <Text
            lineHeight={{ base: "15px", lg: "30px" }}
            fontFamily="'Poppins', sans-serif"
            fontSize={{ base: "14px", lg: "22px" }}
            color="#1E1E1E"
            marginTop={{ base: "9px", lg: "17px" }}
            fontWeight="400"
          >
            Manage your business professionally with asaanlybiz. Using the best software for your billing, inventory & accounting needs. Be a part of 1 Cr+ SMEs in India who trust asaanlybiz.
           
          </Text>
          <Flex
            marginTop={{ base: "9px", lg: "17px" }}
            gap={{ base: "13px", lg: "25px" }}
            fontFamily="'Roboto', sans-serif"
            justifyContent={{ base: "center", lg: "flex-start" }}
          >
            <Link to="#">
              <Button
                backgroundColor="#FFB91D"
                fontSize={{ base: "9px", lg: "16px" }}
                borderRadius="8px"
                border="2px solid #1E1E1E"
                padding={{ base: "10px", lg: "19px" }}
                w={{ base: "114px", lg: "213px" }}
                h={{ base: "30px", lg: "57px" }}
              >
               Download for Desktop
              </Button>
            </Link>
           
          </Flex>
         
         
        </Box>

      </Flex>
    </Box>
  );
}

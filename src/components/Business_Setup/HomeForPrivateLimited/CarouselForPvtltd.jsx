// .jsx
import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";
import user1 from "../../assets/userImg.svg";
import "../../../styles/BussinessSetup/HeaderForPrivateLimited.css";


const CarouselForPvtltd = () => {

    return (
        <Box bg="#faf6a5" display="flex" justifyContent="center" alignItems="center" borderRadius="15px" padding="1%">
            <Box width="10%" display="flex" justifyContent="center">
                <Image border="2px solid green" borderRadius="50%" width="100%" height="100%" src={user1} alt="img1" />
            </Box>
            <Box width="90%" padding="2%">
                <Text fontSize={{ base: "80%", sm: "80%", md: "90%", lg: "100%", xl: "130%" }} mb={1} color="black" display="flex" justifyContent="left" textAlign="left">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in ligula quis orci molestie tincidunt .ue vulputate ac nisi at blandit. Curabitur dui arcu, congue sed pulvinar non, faucibus a felis.</Text>
                <Text fontSize={{ base: "80%", sm: "80%", md: "90%", lg: "100%", xl: "130%" }} mt={1} color="black" display="flex"><strong>Rachana Pathania</strong>Founder and Director of xyz</Text>
            </Box>
        </Box>
    );
};

export { CarouselForPvtltd };
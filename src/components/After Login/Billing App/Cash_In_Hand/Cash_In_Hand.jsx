
import React from 'react'
import {
    Box, Button, Flex, Image,  Text,
  

} from '@chakra-ui/react'
import { Link } from "react-router-dom";
import Slidebar from '../Slidebar/Slidebar';
import Company_name from '../Company_name/Company_name';
import ch from "../../../assets/ch.png"
const Cash_In_Hand
    = () => {
        const Company = {
            name: "Company Name"
        }
        return (

            <>
                <Company_name company_name={Company.name} />

                <Flex >

                    <Slidebar />
                    <Box margin={"auto"}>
                        <Image src={ch} margin={"auto"}></Image>
                        <Text>Whenever you choose payment type as cash in your invoices, that amount will be reflected in cash in hand.</Text>

<Button background={"orange"}>Adjust Cash</Button>
                    </Box>
                </Flex>

            </>
        )
    }

export default Cash_In_Hand



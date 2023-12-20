
import React from 'react'
import {
    Box, Flex, Image,  Text, 
  

} from '@chakra-ui/react'

import Slidebar from '../Slidebar/Slidebar';
import Company_name from '../Company_name/Company_name';
import cheque from "../../../assets/cheque.png"
const Cheques
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
                        <Image src={cheque} margin={"auto"} width={"200px"}></Image>

                        <Text>Payment received through cheque for your invoices will be shown here.</Text>
                    </Box>
                </Flex>

            </>
        )
    }

export default Cheques



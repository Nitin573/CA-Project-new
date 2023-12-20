
import React from 'react'

import { Link } from "react-router-dom";
import Slidebar from '../Slidebar/Slidebar';
import Company_name from '../Company/Company_name'
import { Flex } from '@chakra-ui/react';
const Apply_For_Loan
    = () => {
        
        const Company = {
            name: "Company Name"
        }
        return (

            <>
                <Company_name company_name={Company.name} />

                <Flex >

                    <Slidebar />

                </Flex>

            </>
        )
    }

export default Apply_For_Loan



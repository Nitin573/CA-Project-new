import React, { useState } from 'react'
import Company_name from '../../Company_name/Company_name'
import Slidebar from '../../Slidebar/Slidebar'
import { Box, Flex, Heading, Table, TableContainer, Tbody, Td, Th, Thead, Tr, Button, Input, InputRightAddon, InputGroup, Select, Text, Divider } from '@chakra-ui/react'
import { ChevronDownIcon, SearchIcon } from '@chakra-ui/icons'
import { useNavigate } from 'react-router-dom'
import OutPayments from './OutPayments'
import InPayments from './InPayments'


const Company = {
    name: "Company Name"
}

const Payment_Out = () => {
    const navigate = useNavigate();

    const [selectedPaymentType, setSelectedPaymentType] = useState('PAYMENT_OUT');

    const handlePaymentType = (e) => {
        e.preventDefault();
        setSelectedPaymentType(e.target.value)
    }

    const PaymentAsPerType = () => {
        switch (selectedPaymentType) {
            case 'PAYMENT_OUT':
                return <OutPayments />
            case 'PAYMENT_IN':
                return <InPayments/>
        }
    }

    return (
        <>
            <Company_name company_name={Company.name} />
            <Flex>
                <Slidebar />
                <Box Flex='1' padding='15px'
                width='80%'
                >
                    <Flex
                        justifyContent='center' alignItems='center'
                        flexDirection="column"
                    >
                        <Heading size='md' mb='4'>All Transactions</Heading>
                            {/* select payment */}
                            <Select
                                width='25%'
                                size='sm'
                                rightIcon={<ChevronDownIcon />}
                                value={selectedPaymentType}
                                placeholder="Select payment Type"
                                onChange={handlePaymentType}
                                >
                                    <option value='All_TRANSACTIONS'>All Transactions</option>
                                    <option value='PURCHASE'>Purchase</option>
                                    <option value='EXPENSE'>expense</option>
                                    <option value='SALE'>Sale</option>
                                    <option value='PARTY_To_PARTY_PAID'>Party to Party[Paid]</option>
                                    <option value='Party_To_Party_RCVD'>Party to Party[Rcvd]</option>
                                    <option value='PAYMENT_IN'>Payment-In</option>
                                    <option value='PAYMENT_OUT'>Payment-Out</option>
                                    <option value='CREDIT_NOTE'>Credit Note</option>
                                    <option value='DEDIT_NOTE'>Debit Note</option>
                                    <option value='SALE_ORDER'>Sale Order</option>
                                    <option value='PURCAHSE_ORDER'>Purchase Order</option>
                                    <option value='ESTIMATE'>Estimate</option>
                                    <option value='DELIVERY_CHALLAN'>Delivery Challan</option>
                                    <option value='SALE_FA'>Sale FA</option>
                                    <option value='PURCAHSE_FA'>Purchase FA</option>
                            </Select>
                    </Flex>
                    <Divider mt='3' mb='2'/>
                    <Box>
                        {PaymentAsPerType()}
                    </Box>
                </Box>
            </Flex>
        </>
    )
}

export default Payment_Out
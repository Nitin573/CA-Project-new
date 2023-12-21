import React, { useEffect, useState } from 'react'
import Slidebar from '../Slidebar/Slidebar'
import { Box, Button, Flex, IconButton, Input, Select, Text } from '@chakra-ui/react'
import Company_name from '../Company_name/Company_name'
import Sold_ShipTo from './Sold_ShipTo';
import Invoice from './Invoice'
import ItemsTable from './ItemsTable'
import TableOptions from './TableOptions'
import { FaCalculator } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import {
    postInvoiceAction,
    getOneInvoiceAction
} from "../../../../Redux/Invoice/invoice.action";
import { postSaleInvoice } from "../../../../Redux/SaleInvoice/saleInvoice.Action.js";
import { store } from '../../../../Store/Store';
import { useParams } from 'react-router-dom';
import Calculator from './Calculator.jsx';


const Company = {
    name: "Company Name"
}

const BillingSoftware = () => {
    const { firmId } = useSelector((store) => store.FirmRegistration);
    const { invoiceId } = useParams();
    const dispatch = useDispatch();
    const userDetails = JSON.parse(sessionStorage.getItem("companyDetails")) || {};
    const { token } = userDetails;

    const partyId = sessionStorage.getItem("selectedPartyId");
    console.log('Selected Party ID from localStorage, billing software:', partyId);

    const handlePrint = () => {
        window.print();
    }

    const { getOneInvoice } = useSelector((store) => store.invoiceReducer);
    console.log(" BillingSoftware ~ getOneInvoice:", getOneInvoice)

    const [calculatorResult, setCalculatorResult] = useState('');
    const [isCalculatorOpen, setCalculatorOpen] = useState(false);

    const handleToggleCalculator = () => {
        setCalculatorOpen((prev) => !prev);
    };

    const handleCalculatorResult = (result) => {
        setCalculatorResult(result);
    };

    const [formData, setFormData] = useState({
        soldToCustomerName: '',
        shipToCustomerName: '',
        soldToCustomerAddress: '',
        shipToCustomerAddress: '',
        customerEmail: '',
        subTotal: '',
        discount: '',
        finalAmount: '',
        invoiceNo: '',
        invoiceDate: '',
        paymentMode: '',
        gstNo: '',
        dueDate: '',
        items: [],
        paidAmount: '',
        dueAmount: ''
    });
    console.log("form data", formData)

    useEffect(() => {
        if (getOneInvoice) {
            setFormData({
                soldToCustomerName: getOneInvoice.soldToCustomerName || '',
                shipToCustomerName: getOneInvoice.shipToCustomerName || '',
                soldToCustomerAddress: getOneInvoice.soldToCustomerAddress || '',
                shipToCustomerAddress: getOneInvoice.shipToCustomerAddress || '',
                customerEmail: getOneInvoice.customerEmail || '',
                subTotal: getOneInvoice.subTotal || '',
                discount: getOneInvoice.discount || '',
                finalAmount: getOneInvoice.finalAmount || '',
                invoiceNo: getOneInvoice.invoiceNo || '',
                invoiceDate: getOneInvoice.invoiceDate || '',
                paymentMode: getOneInvoice.paymentMode || '',
                gstNo: getOneInvoice.gstNo || '',
                dueDate: getOneInvoice.dueDate || '',
                items: getOneInvoice.items || [],
                paidAmount: getOneInvoice.paidAmount || '',
                dueAmount: getOneInvoice.dueAmount || ''
            });
        }
    }, [getOneInvoice]);
    const handleInputChange = (e) => {
        const { name, value } = e.target;

        if (name == 'paidAmount' || name == 'dueAmount' || name == 'discount') {

            setFormData((prevData) => ({
                ...prevData,
                [name]: value,
                firmId: firmId,
                subTotal: subTotal.toFixed(2),
                discount: discount.toFixed(2),
                finalAmount: finalAmount.toFixed(2),
            }));

            const paidAmount = parseFloat(formData.paidAmount) || 0;
            const dueAmount = parseFloat(formData.dueAmount) || 0;
            const discount = parseFloat(value) || 0;  // Use the selected value directly
            const subTotal = paidAmount + dueAmount;

            const finalAmount = subTotal - subTotal*(value/100);

        } else {
            setFormData((prevData) => ({
                ...prevData,
                [name]: value,
                firmId: firmId,
            }));
        }
    };



    const submitInvoice = () => {
        dispatch(postSaleInvoice(formData, token, firmId));

    }


    return (
        <>
            <Company_name company_name={Company.name} />
            <Flex>
                <Slidebar />
                <Box flex='1' flexDirection='column' p='1'>
                    {/* basic details and invoice */}
                    <Flex justifyContent='space-between'>
                        <Flex width="60%"
                            flexDirection="column"
                            p='2'
                            margin='15px'
                            border='0.1px solid lightgray'
                            boxShadow='rgba(149, 157, 165, 0.2) 0px 8px 24px'
                        >
                            <Sold_ShipTo formData={formData} setFormData={setFormData} />
                            <Flex direction="column" mt='2' p='2'>
                                <Flex justifyContent='space-between' p='2'>
                                    <Flex align='left' mr='4'>

                                        <Text textAlign='left' fontWeight='semibold' mr='2'>Customer Email: </Text>
                                        <Input name="customerEmail" size='sm' width='250px' placeholder='Enter customer email' value={formData?.customerEmail} onChange={handleInputChange} />
                                    </Flex>

                                    <Button
                                        colorScheme="gray"
                                        leftIcon={<FaCalculator />}
                                        variant="outline"
                                        size="sm"
                                        onClick={handleToggleCalculator}
                                    >
                                        <Flex alignItems="center">
                                            <Text ml="2" fontSize="sm" mt='4'>
                                                Calculator
                                            </Text>
                                        </Flex>
                                    </Button>
                                    {isCalculatorOpen && <Calculator onCalculate={handleCalculatorResult} />}
                                </Flex>

                                {/* ... (rest of the code) */}
                                <TableOptions />
                            </Flex>
                        </Flex>
                        {/* Invoice */}
                        <Box width="40%"
                            p='2'
                            margin='15px'
                            border='0.1px solid lightgray'
                            boxShadow='rgba(149, 157, 165, 0.2) 0px 8px 24px'
                        >
                            <Invoice formData={formData} setFormData={setFormData} />
                        </Box>
                    </Flex>
                    {/* table */}
                    <ItemsTable />

                    {/* below table */}
                    <Flex>
                        <Flex p='4'
                            height='90%'
                            direction='column'
                            justifyContent='left'
                            margin='15px'
                            width='60%'
                            marginRight='auto'
                            border='0.1px solid lightgray'
                            boxShadow='rgba(149, 157, 165, 0.2) 0px 8px 24px'
                        >
                            <Flex justifyContent='space-around'>
                                <Flex>
                                    <Text fontSize='md' fontWeight='semibold' mr='2'>Paid Amount : </Text>
                                    <Input flex="1" ml="2" size="sm" name="paidAmount" onChange={handleInputChange} />
                                </Flex>
                                <Flex>
                                    <Text fontSize='md' fontWeight='semibold' mr='2'>Due Amount : </Text>
                                    <Input flex="1" ml="2" size="sm" name="dueAmount" onChange={handleInputChange} />
                                </Flex>
                            </Flex>
                            <Flex justifyContent='space-between' alignItems='flex-end'>
                                <Button width='30%' outline='none'>Close</Button>
                                <Button width='30%' outline='none' onClick={submitInvoice}>Save</Button>
                                <Button onClick={handlePrint} width='30%' outline='none'>Print</Button>
                            </Flex>
                        </Flex>
                        <Flex pt='4' px='2'
                            justifyContent='right'
                            margin='15px'
                            width='32%'
                            marginLeft='auto'
                            border='0.1px solid lightgray'
                            boxShadow='rgba(149, 157, 165, 0.2) 0px 8px 24px'
                        >
                            <Flex direction='column'>
                                <Flex mb="2">
                                    <Text flex="0 0 120px"
                                        alignItem='left'
                                    >Sub Total : </Text>
                                    <Input flex="1" ml="2" size="sm" readOnly value={formData?.subTotal} />
                                </Flex>
                                <Flex mb="2">
                                    <Text flex="0 0 120px">Discount : </Text>
                                    <Select
                                        name="discount"
                                        size="sm"
                                        width="120px"
                                        value={formData?.discount}
                                        onChange={(e) => handleInputChange(e)}
                                    >
                                        <option value="1%">1%</option>
                                        <option value="3%">3%</option>
                                        <option value="5%">5%</option>
                                        <option value="10%">10%</option>
                                    </Select>

                                </Flex>




                                <Flex mb="2">
                                    <Text flex="0 0 120px">Final Amount : </Text>
                                    <Input flex="1" ml="2" size="sm" readOnly value={formData?.finalAmount} />
                                </Flex>
                            </Flex>
                        </Flex>
                    </Flex>
                </Box>
            </Flex>
        </>
    )
}

export default BillingSoftware;
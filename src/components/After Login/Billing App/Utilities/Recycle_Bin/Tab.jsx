import React from 'react';
import {
    Box, Button, Flex, HStack, Image, Input, Select, Text, VStack, Wrap, Heading, List,
    ListItem,
    ListIcon,
    OrderedList,

    UnorderedList,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    AspectRatio,
    useDisclosure,

    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,


} from '@chakra-ui/react'
const Tab = () => {
    // Sample data for the table
    const tableData = [
        {
            transactionDate: '2023-05-01',
            refNo: '123456',
            partyName: 'John Doe',
            txnType: 'Sale',
            paymentType: 'Credit Card',
            amount: 100.0,
            deletedOn: '2023-05-06'
        },
        {
            transactionDate: '2023-05-02',
            refNo: '654321',
            partyName: 'Jane Smith',
            txnType: 'Purchase',
            paymentType: 'Cash',
            amount: 200.0,
            deletedOn: '2023-05-05'
        },
        // Add more data here as needed
    ];

    return (
        <> <h3>Recycle Bin</h3>
            <TableContainer>

                <Table width="100%">
                    <Thead bg={"whitesmoke"}>
                        <Tr>
                            <Th>Transaction Date</Th>
                            <Th>REF No.</Th>
                            <Th>Party Name</Th>
                            <Th>TXN Type</Th>
                            <Th>Payment Type</Th>
                            <Th>Amount</Th>
                            <Th>Deleted On</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {tableData.map((data, index) => (
                            <Tr key={index}>
                                <Td>{data.transactionDate}</Td>
                                <Td>{data.refNo}</Td>
                                <Td>{data.partyName}</Td>
                                <Td>{data.txnType}</Td>
                                <Td>{data.paymentType}</Td>
                                <Td>{data.amount}</Td>
                                <Td>{data.deletedOn}</Td>
                            </Tr>
                        ))}
                    </Tbody>
                </Table>
            </TableContainer>
        </>
    );
};

export default Tab;

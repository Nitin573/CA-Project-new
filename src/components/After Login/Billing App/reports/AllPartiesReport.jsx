import React, { useEffect } from 'react';
import {
  Box, Text,
  Flex, Link,
  Table, Thead,
  Tbody, Tr,
  Th, Td,
  Icon, TableContainer,
  TableCaption, Heading, Divider
} from '@chakra-ui/react';
import { FiDownload, FiShare2 } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import { getAllPartiesAction } from '../../../../Redux/AllPartiesReport/allparties.action';



const AllPartiesReport = () => {

  const { getAllPartiesData } = useSelector((store) => store.allpartiesReducer);
  const dispatch = useDispatch();
  console.log("all party - ", getAllPartiesData)

  useEffect(() => {
    const userDetails = JSON.parse(sessionStorage.getItem("companyDetails")) ? JSON.parse(sessionStorage.getItem("companyDetails")) : null

    dispatch(getAllPartiesAction(userDetails?.token));
  }, []);

  return (
    <>
      <TableContainer bg="white" boxShadow="md">
        <Table variant="simple" w="full">
          <Thead>
            <Tr>
              <Th>Party Name</Th>
              <Th>Email</Th>
              <Th>Phone Number</Th>
              <Th>Receivable Balance</Th>
              <Th>Payable Balance</Th>
              

            </Tr>
          </Thead>
          <Tbody>
            {getAllPartiesData.map((party, index) => (
              <Tr key={index}>
                <Td>{party.partyName}</Td>
                <Td>{party.email}</Td>
                <Td>{party.phoneNumber}</Td>
                <Td>{party.receivableBalance} ₹</Td>
                <Td>{party.payableBalance} ₹</Td>
               
                
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
}

export default AllPartiesReport;
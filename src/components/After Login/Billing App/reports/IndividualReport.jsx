import { Box, Text, Flex, Link, Table, Thead, Tbody, Tr, Th, Td, Icon, TableContainer, TableCaption, Heading, Divider, Select, Input, Textarea, Button } from '@chakra-ui/react';
import { FiDownload, FiShare2 } from 'react-icons/fi'; // Import the icons
import React from 'react';
import Company_name from '../Company_name/Company_name';
import Slidebar from '../Slidebar/Slidebar';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { useNavigate } from 'react-router-dom';


const IndividualReport = () => {
    const navigate = useNavigate();
    const Company = {
        name: "Company Name",
    };

  return (
    <>
      <Company_name company_name={Company.name} />
      <Flex>
        <Slidebar />
        <Box bg="white" py="4" px="6" minH="80vh" flex="1" boxShadow="md">
{/* top box */}
          <Flex margin='15px' justifyContent='space-between'
          p='4'
          boxShadow= 'rgba(149, 157, 165, 0.2) 0px 8px 24px'
          >
            <Select
                width='15%'
                rightIcon={<ChevronDownIcon />}
                placeholder='Invoice No.'
                size='sm'
            >
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
            </Select>
            <Heading size='md' color='gray.500'> Sale </Heading>
            <Input
                width='18%'
                type='date'
                placeholder='Select date'
                size='sm'
            />
          </Flex>
{/* second */}

            <Flex
            margin='10px'
            boxShadow= 'rgba(149, 157, 165, 0.2) 0px 8px 24px'
            justifyContent='space-between'
            p='1'
            >
                {/* left */}
                <Flex
                direction='column'
                >
                    {/* customer name */}
                    <Flex alignItems='center' margin='15px'>
                        <Text fontSize='sm' mr='2'>Customer Name : </Text>
                        <Text size='md' fontSize='md' fontWeight='semibold'> John Doe </Text>
                    </Flex>
                    {/* selectors */}
                    <Flex justifyContent='space-around' ml='15px' mt='-2'>
                        <Select 
                            size='sm'
                            placeholder='Payment Type'
                            rightIcon={<ChevronDownIcon />}
                            mr='4'
                            width='150px'
                        >
                            <option>Cash</option>
                            <option>UPI</option>
                            <option>Net Banking </option>
                            <option>Debit Card</option>
                        </Select>
                        <Select 
                            size='sm'
                            placeholder='State of Supply'
                            rightIcon={<ChevronDownIcon />}
                            width='150px'
                        >
                            <option>opt1</option>
                            <option>opt2</option>
                            <option>opt3 </option>
                            <option>opt4</option>
                        </Select>
                    </Flex>
                    {/* add note & upload document */}
                    <Flex direction='column' >
                        <Flex margin='15px' justifyContent='space-between' direction='column'>
                            <Textarea rows='2' size='sm' mr='4' mb='2'
                                placeholder='Add Note'
                            />
                            <Input type='file' size='sm'/>
                        </Flex>
                    </Flex>
                </Flex>
                {/* right */}
                <Flex direction='column' mr='4' p='2'
                >
                                <Flex pr='-2' right='0' alignItems='right' justifyContent='flex-end'>
                                    <Text mr='1' fontSize='xs'> Party Balance : </Text>
                                    <Text fontSize='xs'> ₹ 5.00 </Text>
                                </Flex>
                                <Flex direction='column' boxShadow='md' px='4' mr='-2'>
                                    <Flex mt='5' alignItems='right' justifyContent='space-between'>
                                        <Text mr='2' fontSize='16px'>Total Amount : </Text>
                                        <Text fontSize='lg' >1000 ₹</Text>
                                    </Flex>
                                    <Flex alignItems='right' justifyContent='space-between'>
                                        <Text mr='2' fontSize='16px'>Recieved Amount : </Text>
                                        <Text fontSize='lg'>600 ₹</Text>
                                    </Flex>
                                    <Divider mt='-1' mb='1'/>
                                    <Flex alignItems='right' mt='1' justifyContent='space-between'>
                                        <Text mr='2' fontSize='16px'>Balance Due : </Text>
                                        <Text fontSize='lg'>400 ₹</Text>
                                    </Flex>
                                </Flex>
                </Flex>
            </Flex>

            <Flex margin='30px'>
                <Button mr='4' size='md' onClick={()=>navigate('/edit-report')}>Edit</Button>
                <Button mr='4' size='md'>Delete</Button>
                <Button mr='4' size='md'>Share</Button>
            </Flex>
        </Box>
      </Flex>
    </>
  );
}

export default IndividualReport;

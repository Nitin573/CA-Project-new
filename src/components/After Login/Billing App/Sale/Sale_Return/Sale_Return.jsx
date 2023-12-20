// import React, { useState } from "react";
// import {
//     Box, Button, Flex, HStack, Image, Input, Select, Text, VStack, Wrap, Heading, List,
//     ListItem,
//     ListIcon,
//     OrderedList,

//     UnorderedList,
//     Modal,
//     ModalOverlay,
//     ModalContent,
//     ModalHeader,
//     ModalFooter,
//     ModalBody,
//     ModalCloseButton,
//     AspectRatio,
//     useDisclosure,
//     Table,
//     Thead,
//     Tbody,
//     Tfoot,
//     Tr,
//     Th,
//     Td,
//     TableCaption,
//     TableContainer,


// } from '@chakra-ui/react'
// import { Link } from "react-router-dom";
// import Slidebar from '../../Slidebar/Slidebar';


// const Sale_Return = () => {

//     const SelectOptions = ["This Month", "This Quarter", "This Year"];


//     const [selectedOption, setSelectedOption] = useState(SelectOptions[0]);
//     const [fromDate, setFromDate] = useState("");
//     const [toDate, setToDate] = useState("");

//     const handleOptionChange = (event) => {
//         setSelectedOption(event.target.value);
//     };

//     const handleFromDateChange = (event) => {
//         setFromDate(event.target.value);
//     };

//     const handleToDateChange = (event) => {
//         setToDate(event.target.value);
//     };

//     const handlePrintButtonClick = () => {
//         // Handle printing logic here
//     };

//     const handleExportToExcelButtonClick = () => {
//         // Handle export to Excel logic here
//     };

//     ////



//     const initialData = [{ date: '2022-05-01', refNo: '001', partyName: 'ABC Company', categoryName: 'Furniture', type: 'Sale', total: 5000, received: 2000, balance: 3000, }, { date: '2022-05-02', refNo: '002', partyName: 'XYZ Company', categoryName: 'Electronics', type: 'Purchase', total: 10000, received: 5000, balance: 5000, },];


//     const [data, setData] = useState(initialData);
   
    

//     const handleChange = (event, index, field) => {
//         const newData = [...data];
//         newData[index][field] = event.target.value;
//         setData(newData);
        
        
//     };
//     const totalAmount = data.reduce((total, sale) => {
//         return total + sale.total;
//     }, 0);
//     const handleDelete = (index) => {
//         const newData = [...data];
//         newData.splice(index, 1);
//         setData(newData);
        
//     };



//     const handlePrint = (data) => {

//     }
//     const [searchTerm, setSearchTerm] = useState('');

//     const handleChanges = (e) => {
//         setSearchTerm(e.target.value);
//     };

    

//     const handleAddRow = () => {
//         const newRow = { id: data.length + 1, date: '', refNo: '', partyName: '', categoryName: '', type: '', total: 0, received: 0, balance: 0 };
//         setData([...data, newRow]);

//     };

 
//     return (

//         <>


//             <Flex w="100%" >

//                 <Slidebar />

//                 <Box w="80%" m={"auto"} marginTop={"20px"}>
//                 <Heading> Sale Return </Heading>
//                     <HStack justifyContent={"space-between"} padding={"50px"} boxShadow="rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px">
//                         <HStack gap={"20px"} flexDirection={{ base: "column", md: "row", lg: "row" }}>
//                             <div>

//                                 <Select fontSize="20px" id="select-option" value={selectedOption} onChange={handleOptionChange}>
//                                     {SelectOptions.map((option) => (
//                                         <option value={option} key={option}>
//                                             {option}
//                                         </option>
//                                     ))}
//                                 </Select>
//                             </div>
//                             <HStack flexDirection={{ base: "column", md: "row", lg: "row" }}>
//                                 <Text bg={"gray.300"} h={"100%"} m={"auto"}>Between</Text>
//                                 <div>
//                                     <label htmlFor="from-date">From:</label>
//                                     <input type="date" id="from-date" value={fromDate} onChange={handleFromDateChange} />
//                                 </div>
//                                 <div>
//                                     <label htmlFor="to-date">To:</label>
//                                     <input type="date" id="to-date" value={toDate} onChange={handleToDateChange} />
//                                 </div>
//                             </HStack>
//                             <HStack>
//                                 <Button onClick={handlePrintButtonClick}>
//                                     Print
//                                 </Button>
//                                 <Button onClick={handleExportToExcelButtonClick}>
//                                     Export to Excel
//                                 </Button>
//                             </HStack>
//                         </HStack>

//                     </HStack>
//                     {/* table */}
//                     <Box margin={"10px"}>
//                         <input type="text" placeholder="Search" onChange={handleChanges} />
//                         <TableContainer width={{ base: "100%", md: "100%", lg: "100%", }}>
//                             <Table>
//                                 <thead>
//                                     <tr>
//                                         <th>Date</th>
//                                         <th>Ref No.</th>
//                                         <th>Party Name</th>
//                                         <th>Category Name</th>
//                                         <th>Type</th>
//                                         <th>Total</th>
//                                         <th>Received</th>
//                                         <th>Balance</th>
//                                         <th>Print</th>
//                                         <th>Delete</th>
//                                     </tr>
//                                 </thead>
//                                 <tbody>
//                                     {data.map((item, index) => (
//                                         <tr key={index}>
//                                             <td>
//                                                 <input
//                                                     type="date"
//                                                     value={item.date}
//                                                     onChange={(event) => handleChange(event, index, 'date')}
//                                                 />
//                                             </td>
//                                             <td>
//                                                 <input
//                                                     type="text"
//                                                     value={item.refNo}
//                                                     onChange={(event) => handleChange(event, index, 'refNo')}
//                                                 />
//                                             </td>
//                                             <td>
//                                                 <input
//                                                     type="text"
//                                                     value={item.partyName}
//                                                     onChange={(event) => handleChange(event, index, 'partyName')}
//                                                 />
//                                             </td>
//                                             <td>
//                                                 <input
//                                                     type="text"
//                                                     value={item.categoryName}
//                                                     onChange={(event) => handleChange(event, index, 'categoryName')}
//                                                 />
//                                             </td>
//                                             <td>
//                                                 <select
//                                                     value={item.type}
//                                                     onChange={(event) => handleChange(event, index, 'type')}
//                                                 >
//                                                     <option value="Sale">Sale</option>
//                                                     <option value="Purchase">Purchase</option>
//                                                 </select>
//                                             </td>
//                                             <td isNumber={true}>
//                                                 <input
//                                                     type="number"
//                                                     value={item.total}
//                                                     onChange={(e) => handleChange(e, index, "total")}
//                                                 />
//                                             </td>
//                                             <td>
//                                                 <input
//                                                     type="text"
//                                                     value={item.received}
//                                                     onChange={(e) => handleChange(e, index, "received")}
//                                                 />
//                                             </td>
//                                             <td>
//                                                 <input
//                                                     type="text"
//                                                     value={item.balance}
//                                                     onChange={(e) => handleChange(e, index, "balance")}
//                                                 />
//                                             </td>
//                                             <td>
//                                                 <Button fontSize={"10px"} bg={"blue.400"} onClick={() => handlePrint(item)}>Print</Button>
//                                             </td>
//                                             <td>
//                                                 <Button fontSize={"10px"} bg={"red.500"} onClick={() => handleDelete(item)}>Delete</Button>
//                                             </td>


//                                         </tr>))}
//                                     <tr>
//                                         <td >
//                                             <Button onClick={handleAddRow}>Add Row</Button>
//                                         </td>

//                                     </tr>
//                                 </tbody>


//                             </Table>
//                         </TableContainer>
//                         <Box>


//                             <p>Total Estimate Amount: ₹{totalAmount}</p>

//                         </Box>
                        
//                     </Box>
//                 </Box>
//             </Flex>

//         </>
//     )
// }

// export default Sale_Return




import React, { useState } from "react";
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
  AspecTratio,
  useDisclosure,
  Table,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Thead,


} from '@chakra-ui/react'
import { Link } from "react-router-dom";
import Slidebar from '../../Slidebar/Slidebar';


const Sale_Return = () => {

  const SelectOptions = ["This Month", "This Quarter", "This Year"];


  const [selectedOption, setSelectedOption] = useState(SelectOptions[0]);
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleFromDateChange = (event) => {
    setFromDate(event.target.value);
  };

  const handleToDateChange = (event) => {
    setToDate(event.target.value);
  };

  const handlePrintButtonClick = () => {
    // Handle printing logic here
  };

  const handleExportToExcelButtonClick = () => {
    // Handle export to Excel logic here
  };

  ////



  const initialData = [{ date: '2022-05-01', refNo: '001', partyName: 'ABC Company', categoryName: 'Furniture', type: 'Sale', total: 5000, received: 2000, balance: 3000, }, { date: '2022-05-02', refNo: '002', partyName: 'XYZ Company', categoryName: 'ElecTronics', type: 'Purchase', total: 10000, received: 5000, balance: 5000, },];


  const [data, seTdata] = useState(initialData);



  const handleChange = (event, index, field) => {
    const newData = [...data];
    newData[index][field] = event.target.value;
    seTdata(newData);


  };
  const totalAmount = data.reduce((total, sale) => {
    return total + sale.total;
  }, 0);
  const handleDelete = (index) => {
    const newData = [...data];
    newData.splice(index, 1);
    seTdata(newData);

  };



  const handlePrint = (data) => {

  }
  const [searchTerm, setSearchTerm] = useState('');

  const handleChanges = (e) => {
    setSearchTerm(e.target.value);
  };



  const handleAddRow = () => {
    const newRow = { id: data.lengTh + 1, date: '', refNo: '', partyName: '', categoryName: '', type: '', total: 0, received: 0, balance: 0 };
    seTdata([...data, newRow]);

  };


  return (

    <>


      <Flex w="100%" >
        <Slidebar />
        <Box w="80%" m={"auto"} marginTop={"20px"}>
        <Heading> Sale Return </Heading>
          <HStack justifyContent={"space-between"} padding={"50px"} boxShadow="rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px">
            <HStack gap={"20px"} flexDirection={{ base: "column", md: "row", lg: "row" }}>
              <div>
                <Select fontSize="20px" id="select-option" value={selectedOption} onChange={handleOptionChange}>
                  {SelectOptions.map((option) => (
                    <option value={option} key={option}>
                      {option}
                    </option>
                  ))}
                </Select>
              </div>
              <HStack flexDirection={{ base: "column", md: "row", lg: "row" }}>
                <Text bg={"gray.300"} h={"100%"} m={"auto"}>Between</Text>
                <div>
                  <label htmlFor="from-date">From:</label>
                  <input type="date" id="from-date" value={fromDate} onChange={handleFromDateChange} />
                </div>
                <div>
                  <label htmlFor="to-date">To:</label>
                  <input type="date" id="to-date" value={toDate} onChange={handleToDateChange} />
                </div>
              </HStack>
              <HStack>
                <Button onClick={handlePrintButtonClick}>
                  Print
                </Button>
                <Button onClick={handleExportToExcelButtonClick}>
                  Export to Excel
                </Button>
              </HStack>
            </HStack>

          </HStack>
          {/* table */}
          <Box margin={"10px"}>
            <Input type="text" placeholder="Search" onChange={handleChanges} mt='4'/>
            <TableContainer width={{ base: "100%", md: "100%", lg: "100%", }} mt='4'>
              <Table>
                <Thead>
                  <Tr>
                    <Th>Party Name</Th>
                    <Th>Category Name</Th>
                    <Th>Type</Th>
                    <Th>Date</Th>
                    <Th>Ref No.</Th>
                    <Th>Received</Th>
                    <Th>Balance</Th>
                    <Th>Total</Th>
                    <Th>Print</Th>
                    <Th>Delete</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {data.map((item, index) => (
                    <Tr key={index}>
                      <Td>
                        <input
                          style={{ width: '100px' }}
                          type="text"
                          value={item.partyName}
                          onChange={(event) => handleChange(event, index, 'partyName')}
                        />
                      </Td>
                      <Td>
                        <input
                          style={{ width: '100px' }}
                          type="text"
                          value={item.categoryName}
                          onChange={(event) => handleChange(event, index, 'categoryName')}
                        />
                      </Td>
                      <Td>
                        <select
                          value={item.type}
                          onChange={(event) => handleChange(event, index, 'type')}
                        >
                          <option value="Sale">Sale</option>
                          <option value="Purchase">Purchase</option>
                        </select>
                      </Td>
                      <Td>
                        <input
                        style={{ width: '110px' }}
                          type="date"
                          value={item.date}
                          onChange={(event) => handleChange(event, index, 'date')}
                        />
                      </Td>
                      <Td>
                        <input
                          style={{ width: '80px' }}
                          type="text"
                          value={item.refNo}
                          onChange={(event) => handleChange(event, index, 'refNo')}
                        />
                      </Td>
                      <Td>
                        <input
                          style={{ width: '80px' }}
                          type="text"
                          value={item.received}
                          onChange={(e) => handleChange(e, index, "received")}
                        />
                      </Td>
                      <Td>
                        <input
                          style={{ width: '80px' }}
                          type="text"
                          value={item.balance}
                          onChange={(e) => handleChange(e, index, "balance")}
                        />
                      </Td>
                      <Td isNumber={true}>
                        <input
                          style={{ width: '80px' }}
                          type="number"
                          value={item.total}
                          onChange={(e) => handleChange(e, index, "total")}
                        />
                      </Td>
                      <Td>
                        <Button fontSize={"10px"} bg={"blue.400"} onClick={() => handlePrint(item)}>Print</Button>
                      </Td>
                      <Td>
                        <Button fontSize={"10px"} bg={"red.500"} onClick={() => handleDelete(item)}>Delete</Button>
                      </Td>


                    </Tr>))}
                  <Tr>
                    <Td >
                      <Button onClick={handleAddRow}>Add Row</Button>
                    </Td>

                  </Tr>
                </Tbody>
              </Table>
            </TableContainer>
            <Box>
              <p>Total Estimate Amount: ₹{totalAmount}</p>
            </Box>
          </Box>
        </Box>
      </Flex>
    </>
  )
}

export default Sale_Return










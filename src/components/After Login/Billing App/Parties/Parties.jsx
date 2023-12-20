// import React, { useEffect, useState } from "react";
// import {
//   Box,
//   Button,
//   Flex,
//   HStack,
//   Image,
//   Input,
//   Select,
//   Text,
//   VStack,
//   Wrap,
//   Heading,
//   List,
//   ListItem,
//   ListIcon,
//   OrderedList,
//   UnorderedList,
//   Modal,
//   ModalOverlay,
//   ModalContent,
//   ModalHeader,
//   ModalFooter,
//   ModalBody,
//   ModalCloseButton,
//   AspectRatio,
//   useDisclosure,
//   FormControl,
//   FormLabel,
//   Table,
//   Thead,
//   Tbody,
//   Tfoot,
//   Tr,
//   Th,
//   Td,
//   TableCaption,
//   TableContainer,
//   FormErrorMessage,
//   InputGroup,
//   InputRightElement,
//   InputRightAddon,
//   Switch,
// } from "@chakra-ui/react";
// import { Link } from "react-router-dom";
// import Slidebar from "../Slidebar/Slidebar";
// import Company_name from "../Company_name/Company_name";
// import remove from "../../../assets/remove.png";
// import print4 from "../../../assets/print4.png";
// import {
//   deletePartiesAction,
//   getPartiesAction,
//   postPartiesAction,
//   setPartyId,
//   searchParty
// } from "../../../../Redux/Parties/parties.action";
// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { SearchIcon } from "@chakra-ui/icons";
// import { Inputvalidate, validateGstnumber } from "../../../helpers/inputValidate";
// import { hasValidationError, validationError } from "../../../helpers/Frontend";



// const Parties = () => {
//   const Company = {
//     name: "Company Name",
//   };
//   const modal1 = useDisclosure();
//   const { firmId } = useSelector((store) => store.FirmRegistration);
//   const responseData = useSelector((store) => store.FirmRegistration);
//   // const FirmRegistration2 = useSelector((store) => store);
//   const dispatch = useDispatch();
//   const { getPartiesData } = useSelector((store) => store.partiesReducer);
//   const { searchPartiesData } = useSelector((store) => store.partiesReducer);
//   const [searchQuery, setSearchQuery] = useState('');
//   const [filteredData, setFilteredData] = useState();
//   const [isCreditLimitEnabled, setIsCreditLimitEnabled] = useState(false);

//   useEffect(() => {
//     setFilteredData(Array.isArray(getPartiesData) ? [...getPartiesData] : []);
//   }, [getPartiesData]);
  

//   const handleSearch = (e) => {
//     setSearchQuery(e.target.value);
//     if (searchQuery != "") {
//       setFilteredData(getPartiesData?.filter((data) =>
//         data.partyName.toLowerCase().includes(searchQuery.toLowerCase())
//       ))
//       // dispatch(searchParty(e.target.value, token, firmId))
//     } else {
//       setFilteredData(getPartiesData)
//     }
//   }

//   const userDetails = JSON.parse(sessionStorage.getItem("companyDetails")) ? JSON.parse(sessionStorage.getItem("companyDetails")) : null

//   const [form, setForm] = useState({
//     partyName: "",
//     gstNo: "",
//     phoneNumber: "",
//     GSTType: "",
//     state: "",
//     email: "",
//     billingAddress: "",
//     shippingAddress: "",
//     openingBalance: "",
//   asOfDate: "",
//   creditLimit: "",
//   });

//   const [errors, setErrors] = useState([]);

//   const handleChangeParty = (e) => {
//     e.preventDefault();
//     const { name, value } = e.target;
//     setForm({ ...form, [name]: value });
//   };

//   const inputNameArray = ["gstNo", "phoneNumber"]

//   const handleAddParty = () => {


//     if (!validateGstnumber(inputNameArray, { gstNo: form?.gstNo, phoneNumber: form?.phoneNumber }, setErrors)) {
//       return;
//     }
   

//     if (!Inputvalidate(["partyName", "GSTType", "state", "email", "shippingAddress", "phoneNumber", "gstNo", "billingAddress", "openingBalance", "asOfDate", "creditLimit"], form, setErrors)) {
//       return;
//     }


//     dispatch(postPartiesAction(form, userDetails?.token, firmId, modal1));
//     modal1.onClose();
//   };
  
//   useEffect(() => {

//     if (responseData.error) {
//     } else {
//       modal1.onClose()
//     }
//   }, [responseData])
//   // useEffect(() => {
//   //   const userDetails = JSON.parse(sessionStorage.getItem("companyDetails")) ? JSON.parse(sessionStorage.getItem("companyDetails")) : null

//   //   dispatch(getAllPartiesAction(userDetails?.token));
//   // }, []);


//   //   const removeParty=(token,id,firmId)=>{
//   //       dispatch(deletePartiesAction(token,id,firmId))
//   //   }

// useEffect(() => {
//   dispatch(getPartiesAction(userDetails?.token, firmId));
// }, [firmId]);


//   // validate gst no.
//   const isValidgstNo = (gstNo) => {
//     const gstPattern = /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[0-9A-Z]{1}[Z]{1}[0-9A-Z]{1}$/;
//     return gstPattern.test(gstNo);
//   }
//   // handle row click
//   const navigate = useNavigate();

//   const handleRowClick = (partyId) => {
//     // Handle row click to navigate to respective page
//     navigate(`/party/${partyId}`);
//   };

//   return (
//     <>
//       <Company_name company_name={Company.name} />
//       <Flex>
//         <Slidebar />
//         <Box margin={"auto"} marginTop="20px" overflow={"hidden"} width="80%">
//           <Flex margin='15px' justifyContent='space-between' alignItems='center'>
//             <InputGroup>
//               <Input
//                 placeholder="search..."
//                 value={searchQuery}
//                 onChange={handleSearch}
//                 size='sm'
//                 width='40%'
//               />
//               <InputRightAddon size='sm' outline='none' height='32px'>
//                 <SearchIcon color='black' />
//               </InputRightAddon>
//             </InputGroup>
//             <Button
//               backgroundColor="blue.400"
//               margin={"10px"}
//               onClick={modal1.onOpen}
//               px="4"
//             >
//               Add Parties +
//             </Button>
//           </Flex>
//           <TableContainer
//             style={{ margin: '20px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}
//           >
//             {
//               searchQuery.length == 0 &&
//               <Text>Please click to logo and Select a company first</Text>

//             }
//             <Table style={{ borderCollapse: 'collapse', width: '100%' }}>
//               <Thead style={{ textAlign: 'center' }}>
//                 <Tr>
//                   <Th isNumeric style={{ border: '1px solid gray' }}>Party ID</Th>
//                   <Th style={{ border: '1px solid gray' }}>Party Name</Th>
//                   <Th style={{ border: '1px solid gray' }}>Due Amount </Th>
//                   <Th style={{ border: '1px solid gray' }}>Paid Amount </Th>
//                   <Th style={{ border: '1px solid gray' }}>Total Invoice</Th>
//                 </Tr>
//               </Thead>
//               <Tbody>
//                 {searchQuery.length > 0 ? (
//                   // Render search results if a search query is present
//                   searchPartiesData
//                     .filter((data) => {
//                       // Your filtering logic here based on the search query
//                       return data.partyName.toLowerCase().includes(searchQuery.toLowerCase());
//                     })?.map((filteredData) => (
//                       <Tr key={filteredData._id} onClick={() => handleRowClick(filteredData._id)} style={{ cursor: 'pointer' }}>
//                         <Td isNumeric style={{ border: '1px solid gray' }}>{filteredData._id}</Td>
//                         <Td style={{ border: '1px solid gray' }}>{filteredData.partyName}</Td>
//                         <Td style={{ border: '1px solid gray' }}>{filteredData.paidAmount}</Td>
//                         <Td style={{ border: '1px solid gray' }}>{filteredData.dueAmount}</Td>
//                         <Td style={{ border: '1px solid gray' }}>{filteredData.totalInvoice}</Td>
//                       </Tr>
//                     ))
//                 ) : (
//                   // Render normal data when there's no search query
//                   filteredData?.map((data) => (
//                     <Tr key={data._id} onClick={() => handleRowClick(data._id)} style={{ cursor: 'pointer' }}>
//                       <Td isNumeric style={{ border: '1px solid gray' }}>{data._id}</Td>
//                       <Td style={{ border: '1px solid gray' }}>{data.partyName}</Td>
//                       <Td style={{ border: '1px solid gray' }}>{data.paidAmount}</Td>
//                       <Td style={{ border: '1px solid gray' }}>{data.dueAmount}</Td>
//                       <Td style={{ border: '1px solid gray' }}>{data.totalInvoice}</Td>
//                     </Tr>
//                   ))
//                 )}
//               </Tbody>
//             </Table>
//           </TableContainer>
//         </Box>

//         {/* Add new party */}
//         <Modal isOpen={modal1.isOpen} onClose={modal1.onClose}>
//           <ModalOverlay />
//           <ModalContent
//             maxW="70%"
//             margin="10px"
//             borderRadius="8px"
//             boxShadow="0 4px 6px rgba(0, 0, 0, 0.1)"
//             paddingLeft="20px"
//             paddingRight="40px"
//           >

//             <ModalHeader style={{ borderBottom: '1px solid #E2E8F0', padding: '16px' }}>
//               Add New Party
//             </ModalHeader>
//             <ModalCloseButton style={{ padding: '12px' }} />
//             <ModalBody style={{ padding: '16px' }}>
//               <Flex direction='row'>
//                 <FormControl margin={"10px"}>
//                   <FormLabel>Party Name :</FormLabel>
//                   <Input
//                     type="text"
//                     placeholder="Party Name"
//                     value={form.partyName}
//                     name="partyName"
//                     onChange={handleChangeParty}
//                   />
//                 </FormControl>
//                 <FormControl margin={"10px"}>
//                   <FormLabel>Email :</FormLabel>
//                   <Input
//                     type="email"
//                     placeholder="Email"
//                     value={form.email}
//                     name="email"
//                     onChange={handleChangeParty}
//                   />
//                   {hasValidationError(errors, "email") ? (<span className="has-cust-error-white">{validationError(errors, "email")}</span>) : null}

//                 </FormControl>
//               </Flex>

//               <Flex>
//                 {/* GST no. */}
//                 <FormControl margin={"10px"}>
//                   <FormLabel>GST NO :</FormLabel>
//                   <Input
//                     type="text"
//                     placeholder="GST NO"
//                     value={form.gstNo}
//                     name="gstNo"
//                     onChange={handleChangeParty}
//                     isInvalid={!isValidgstNo(form.gstNo) && form.gstNo !== ""}
//                   />
//                   {!isValidgstNo(form.gstNo) && form.gstNo !== "" && (
//                     <FormErrorMessage>Please enter a valid GST number</FormErrorMessage>
//                   )}
//                   {hasValidationError(errors, "gstNo") ? (<span className="has-cust-error-white">{validationError(errors, "gstNo")}</span>) : null}
//                 </FormControl>

//                 <FormControl margin={"10px"}>
//                   <FormLabel>GST Type :</FormLabel>
//                   <Select
//                     placeholder="GST Type"
//                     name="GSTType"
//                     onChange={handleChangeParty}
//                   >
//                     <option value="Unregistered/Consumer">Unregistered/Consumer</option>
//                     <option value="Registered Business/Regular">Registered Business/Regular</option>
//                     <option value="Registered Business/Composition">Registered Business/Composition</option>
//                   </Select>
//                 </FormControl>
//               </Flex>

//               <Flex>
//                 <FormControl margin={"10px"}>
//                   <FormLabel>Phone Number :</FormLabel>
//                   <Input
//                     type="number"
//                     placeholder="Phone Number "
//                     value={form.phoneNumber}
//                     name="phoneNumber"
//                     onChange={handleChangeParty}
//                   />
//                   {hasValidationError(errors, "phoneNumber") ? (<span className="has-cust-error-white">{validationError(errors, "phoneNumber")}</span>) : null}
//                 </FormControl>
//                 <FormControl margin={"10px"}>
//                   <FormLabel>State :</FormLabel>
//                   <Input
//                     type="text"
//                     placeholder="State"
//                     value={form.state}
//                     name="state"
//                     onChange={handleChangeParty}
//                   />
//                 </FormControl>
//               </Flex>

//               <Flex>
//                 <FormControl margin={"10px"}>
//                   <FormLabel>Billing Address:</FormLabel>
//                   <Input
//                     type="text"
//                     placeholder="Billing Address"
//                     value={form.billingAddress}
//                     name="billingAddress"
//                     onChange={handleChangeParty}
//                   />
//                 </FormControl>
//                 <FormControl margin={"10px"}>
//                   <FormLabel>Shipping Address :</FormLabel>
//                   <Input
//                     type="text"
//                     placeholder="Shipping Address"
//                     value={form.shippingAddress}
//                     name="shippingAddress"
//                     onChange={handleChangeParty}
//                   />
//                 </FormControl>
//                 </Flex>
//                 <Flex>
//                 <FormControl margin={"10px"}>
//   <FormLabel>Opening Balance:</FormLabel>
//   <Input
//     type="number"
//     placeholder="Opening Balance"
//     value={form.openingBalance}
//     name="openingBalance"
//     onChange={handleChangeParty}
//   />
// </FormControl>
// <FormControl margin={"10px"}>
//   <FormLabel>As Of Date:</FormLabel>
//   <Input
//     type="date"
//     placeholder="As Of Date"
//     value={form.asOfDate}
//     name="asOfDate"
//     onChange={handleChangeParty}
//   />
// </FormControl>
// </Flex>

// <Flex>
// <FormControl margin={"10px"}>
//   <FormLabel>Credit Limit:</FormLabel>
//   <Flex alignItems="center">
//     <Switch
//       isChecked={isCreditLimitEnabled}
//       onChange={() => setIsCreditLimitEnabled(!isCreditLimitEnabled)}
//       colorScheme="blue"
//       size="md"
//       marginRight="2"
//     />
//     <Input
//       type="number"
//       placeholder="Credit Limit"
//       value={form.creditLimit}
//       name="creditLimit"
//       onChange={handleChangeParty}
//       isDisabled={!isCreditLimitEnabled}
//     />
//   </Flex>
// </FormControl>
//               </Flex>
//             </ModalBody>

//             <ModalFooter style={{ borderTop: '1px solid #E2E8F0', padding: '16px' }}>
//               <Button colorScheme="blue" mr={3} onClick={modal1.onClose}>
//                 Close
//               </Button>
//               <Button
//                 colorScheme="green"
//                 onClick={handleAddParty}
//                 disabled={form.partyName == ""}
//               >
//                 Add
//               </Button>
//             </ModalFooter>
//           </ModalContent>
//         </Modal>
//       </Flex>
//     </>
//   );
// };

// export default Parties;











import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Flex,
  HStack,
  Image,
  Input,
  Select,
  Text,
  VStack,
  Wrap,
  Heading,
  List,
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
  FormControl,
  FormLabel,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  FormErrorMessage,
  InputGroup,
  InputRightElement,
  InputRightAddon,
  Switch,
  Spacer,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Divider,
  Stack,
  Checkbox,

} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Slidebar from "../Slidebar/Slidebar";
import Company_name from "../Company_name/Company_name";
import remove from "../../../assets/remove.png";
import print4 from "../../../assets/print4.png";
import {
  deletePartiesAction,
  getPartiesAction,
  postPartiesAction,
  setPartyId,
  searchParty
} from "../../../../Redux/Parties/parties.action";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { SearchIcon } from "@chakra-ui/icons";
import { Inputvalidate, validateGstnumber } from "../../../helpers/inputValidate";
import { hasValidationError, validationError } from "../../../helpers/Frontend";
import { color } from "framer-motion";



const Parties = () => {
  // ✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅

  const [enableShippingAddress, setEnableShippingAddress] = useState(false)
  const [additionalField1, setAdditionalField1] = React.useState("");
  const [additionalField2, setAdditionalField2] = React.useState("");
  const [additionalField3, setAdditionalField3] = React.useState("");
  const [additionalField4, setAdditionalField4] = React.useState("");

  const [checked1, setChecked1] = React.useState(false);
  const [checked2, setChecked2] = React.useState(false);
  const [checked3, setChecked3] = React.useState(false);
  const [checked4, setChecked4] = React.useState(false);


  const handleEnableShippingAddress = () => {
    setEnableShippingAddress(enableShippingAddress ? false : true);
  }
  const handleCheck1 = (event) => {
    setChecked1(event.target.checked);

  };

  const handleCheck2 = (event) => {
    setChecked2(event.target.checked);
  };

  const handleCheck3 = (event) => {
    setChecked3(event.target.checked);
  };

  const handleCheck4 = (event) => {
    setChecked4(event.target.checked);
  };

  const handleAdditionalInput1 = (event) => {
    setAdditionalField1(event.target.value);
  }

  const handleAdditionalInput2 = (event) => {
    setAdditionalField2(event.target.value);
  }

  const handleAdditionalInput3 = (event) => {
    setAdditionalField3(event.target.value);
  }

  const handleAdditionalInput4 = (event) => {
    setAdditionalField4(event.target.value);
  }
  // ✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅
  const Company = {
    name: "Company Name",
  };
  const modal1 = useDisclosure();
  const { firmId } = useSelector((store) => store.FirmRegistration);
  const responseData = useSelector((store) => store.FirmRegistration);
  // const FirmRegistration2 = useSelector((store) => store);
  const dispatch = useDispatch();
  const { getPartiesData } = useSelector((store) => store.partiesReducer);
  const { searchPartiesData } = useSelector((store) => store.partiesReducer);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState();
  const [isCreditLimitEnabled, setIsCreditLimitEnabled] = useState(false);

  useEffect(() => {
    setFilteredData(Array.isArray(getPartiesData) ? [...getPartiesData] : []);
  }, [getPartiesData]);


  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    if (searchQuery != "") {
      setFilteredData(getPartiesData?.filter((data) =>
        data.partyName.toLowerCase().includes(searchQuery.toLowerCase())
      ))
      // dispatch(searchParty(e.target.value, token, firmId))
    } else {
      setFilteredData(getPartiesData)
    }
  }

  const userDetails = JSON.parse(sessionStorage.getItem("companyDetails")) ? JSON.parse(sessionStorage.getItem("companyDetails")) : null

  const [form, setForm] = useState({
    partyName: "",
    gstNo: "",
    phoneNumber: "",
    GSTType: "",
    state: "",
    email: "",
    billingAddress: "",
    shippingAddress: "",
    openingBalance: "",
    asOfDate: "",
    creditLimit: "",
    
  });

  const [errors, setErrors] = useState([]);

  const handleChangeParty = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const inputNameArray = ["gstNo", "phoneNumber"]

  const handleAddParty = () => {
    if (!validateGstnumber(inputNameArray, { gstNo: form?.gstNo, phoneNumber: form?.phoneNumber }, setErrors)) {

      return;
    }
    if (!Inputvalidate(["partyName", "GSTType", "state", "email", "shippingAddress", "phoneNumber", "gstNo", "billingAddress", "openingBalance", "asOfDate", "creditLimit"], form, setErrors)) {
      return;
    }
    dispatch(postPartiesAction(form, userDetails?.token, firmId, modal1));
    modal1.onClose(); // Close the modal after dispatching the action
  };

  useEffect(() => {

    if (responseData.error) {
    } else {
      modal1.onClose()
    }
  }, [responseData])
  // useEffect(() => {
  //   const userDetails = JSON.parse(sessionStorage.getItem("companyDetails")) ? JSON.parse(sessionStorage.getItem("companyDetails")) : null

  //   dispatch(getAllPartiesAction(userDetails?.token));
  // }, []);


  //   const removeParty=(token,id,firmId)=>{
  //       dispatch(deletePartiesAction(token,id,firmId))
  //   }

  useEffect(() => {
    dispatch(getPartiesAction(userDetails?.token, firmId));
  }, [firmId]);


  // validate gst no.
  const isValidgstNo = (gstNo) => {
    const gstPattern = /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[0-9A-Z]{1}[Z]{1}[0-9A-Z]{1}$/;
    return gstPattern.test(gstNo);
  }
  // handle row click
  const navigate = useNavigate();

  const handleRowClick = (partyId) => {
    // Handle row click to navigate to respective page
    navigate(`/party/${partyId}`);
  };

  return (
    <>
      <Company_name company_name={Company.name} />
      <Flex>
        <Slidebar />
        <Box margin={"auto"} marginTop="20px" overflow={"hidden"} width="80%">
          <Flex margin='15px' justifyContent='space-between' alignItems='center'>
            <InputGroup>
              <Input
                placeholder="search..."
                value={searchQuery}
                onChange={handleSearch}
                size='sm'
                width='40%'
              />
              <InputRightAddon size='sm' outline='none' height='32px'>
                <SearchIcon color='black' />
              </InputRightAddon>
            </InputGroup>
            <Button
              backgroundColor="blue.400"
              margin={"10px"}
              onClick={modal1.onOpen}
              px="4"
            >
              Add Parties +
            </Button>
          </Flex>
          <TableContainer
            style={{ margin: '20px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}
          >
            {
              searchQuery.length == 0 &&
              <Text>Please click to logo and Select a company first</Text>

            }
            <Table style={{ borderCollapse: 'collapse', width: '100%' }}>
              <Thead style={{ textAlign: 'center' }}>
                <Tr>
                  <Th isNumeric style={{ border: '1px solid gray' }}>Party ID</Th>
                  <Th style={{ border: '1px solid gray' }}>Party Name</Th>
                  <Th style={{ border: '1px solid gray' }}>Due Amount </Th>
                  <Th style={{ border: '1px solid gray' }}>Paid Amount </Th>
                  <Th style={{ border: '1px solid gray' }}>Total Invoice</Th>
                </Tr>
              </Thead>
              <Tbody>
                {searchQuery.length > 0 ? (
                  // Render search results if a search query is present
                  searchPartiesData
                    .filter((data) => {
                      // Your filtering logic here based on the search query
                      return data.partyName.toLowerCase().includes(searchQuery.toLowerCase());
                    })?.map((filteredData) => (
                      <Tr key={filteredData._id} onClick={() => handleRowClick(filteredData._id)} style={{ cursor: 'pointer' }}>
                        <Td isNumeric style={{ border: '1px solid gray' }}>{filteredData._id}</Td>
                        <Td style={{ border: '1px solid gray' }}>{filteredData.partyName}</Td>
                        <Td style={{ border: '1px solid gray' }}>{filteredData.paidAmount}</Td>
                        <Td style={{ border: '1px solid gray' }}>{filteredData.dueAmount}</Td>
                        <Td style={{ border: '1px solid gray' }}>{filteredData.totalInvoice}</Td>
                      </Tr>
                    ))
                ) : (
                  // Render normal data when there's no search query
                  filteredData?.map((data) => (
                    <Tr key={data._id} onClick={() => handleRowClick(data._id)} style={{ cursor: 'pointer' }}>
                      <Td isNumeric style={{ border: '1px solid gray' }}>{data._id}</Td>
                      <Td style={{ border: '1px solid gray' }}>{data.partyName}</Td>
                      <Td style={{ border: '1px solid gray' }}>{data.paidAmount}</Td>
                      <Td style={{ border: '1px solid gray' }}>{data.dueAmount}</Td>
                      <Td style={{ border: '1px solid gray' }}>{data.totalInvoice}</Td>
                    </Tr>
                  ))
                )}
              </Tbody>
            </Table>
          </TableContainer>
        </Box>

        {/* ✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅ */}

        {/* Add new party */}
        <Modal onClose={modal1.onClose} isOpen={modal1.isOpen} size='4xl'>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Add Party</ModalHeader>
            <ModalCloseButton />
            <ModalBody >
              <Flex gap={5}>
                <Input
                  type="text"
                  placeholder="Party Name"
                  value={form.partyName}
                  name="partyName"
                  onChange={handleChangeParty}
                />

                <Input
                  type="text"
                  placeholder="GST NO"
                  value={form.gstNo}
                  name="gstNo"
                  onChange={handleChangeParty}
                  isInvalid={!isValidgstNo(form.gstNo) && form.gstNo !== ""}
                />
                {!isValidgstNo(form.gstNo) && form.gstNo !== "" && (
                  <FormErrorMessage>Please enter a valid GST number</FormErrorMessage>
                )}
                {/* {hasValidationError(errors, "gstNo") ? (<span className="has-cust-error-white">{validationError(errors, "gstNo")}</span>) : null} */}

                <Input
                  type="number"
                  placeholder="Phone Number "
                  value={form.phoneNumber}
                  name="phoneNumber"
                  onChange={handleChangeParty}
                />
                {hasValidationError(errors, "phoneNumber") ? (<span className="has-cust-error-white">{validationError(errors, "phoneNumber")}</span>) : null}
              </Flex>

              <Box mt='30px'>
                <Tabs>
                  <TabList>
                    <Tab fontWeight='500'>GST & Address</Tab>
                    <Tab fontWeight='500'>Credit and Balance</Tab>
                    <Tab fontWeight='500'>Additional Fields</Tab>
                  </TabList>

                  <TabPanels>
                    <TabPanel>
                      <Box display='flex'>
                        <Flex direction='column' gap={5}>
                          <Select
                            name="GSTType"
                            onChange={handleChangeParty}
                            variant='filled' placeholder='GST Type'>
                            <option value='Unregistered/Consumer'>Unregistered/Consumer</option>
                            <option value='Registered Business/Regular'>Registered Business/Regular</option>
                            <option value='Registered Business/Composition'>Registered Business/Composition</option>
                          </Select>
                          <Input
                            value={form.state}
                            name="state"
                            onChange={handleChangeParty}
                            variant='filled' placeholder='State' />

                          <Input
                            value={form.email}
                            name="email"
                            onChange={handleChangeParty}
                            variant='filled' placeholder='Email ID' />
                        </Flex>


                        <Box ml='50px' display='flex'>
                          <Box >
                            <Input
                              value={form.billingAddress}
                              name="billingAddress"
                              onChange={handleChangeParty}
                              variant='filled' placeholder='Billing Address' size="lg" />

                            <Text
                              onClick={handleEnableShippingAddress}
                              cursor='pointer' mt='5px' fontSize='sm'
                            >
                              {enableShippingAddress ? <p style={{ color: 'gray' }}>- Disable Shipping Address</p> : <p style={{ color: '#2E8BC0' }}>+ Enable Shipping Address</p>}
                            </Text>
                          </Box>
                          <Box width='250' ml='50px'>
                            {enableShippingAddress && <Input
                              value={form.shippingAddress}
                              name="shippingAddress"
                              onChange={handleChangeParty}
                              variant='filled' placeholder='Shipping Address' size="lg" />}
                          </Box>
                        </Box>
                      </Box>
                    </TabPanel>

                    <TabPanel>
                      <Box display='flex' >
                        <Box width='250px' display='flex' flexDirection='column'>
                          <Input
                            value={form.openingBalance}
                            name="openingBalance"
                            onChange={handleChangeParty}
                            variant='filled' placeholder='Opening Balance' />
                          <Text fontSize='16' mt='20px'>Credit Balance</Text>
                          <FormControl display='flex' alignItems='center'>
                            <FormLabel htmlFor='email-alerts' mb='0'>
                              No Limit
                            </FormLabel>
                            <Switch
                              isChecked={isCreditLimitEnabled}
                                  onChange={() => setIsCreditLimitEnabled(!isCreditLimitEnabled)}
                              id='email-alerts' size='sm' />
                            <FormLabel htmlFor='email-alerts' ml='4' mb='0'>
                              Custom Limit
                            </FormLabel>
                            {isCreditLimitEnabled ? 
                              <Input
                                type="number"
                                       placeholder="Credit Limit"
                                       value={form.creditLimit}
                                       name="creditLimit"
                                       onChange={handleChangeParty}
                                       isDisabled={!isCreditLimitEnabled}
                              /> : ""
                              
                          }

                          </FormControl>
                          { }
                        </Box>
                        <Box width='250px' ml='50px'>
                          <Input
                            value={form.asOfDate}
                            name="asOfDate"
                            onChange={handleChangeParty} type="date" />
                        </Box>
                      </Box>
                    </TabPanel>

                    <TabPanel>
                      <Box
                        display='flex' flexDirection='column'
                      >
                        <Box width='550px'>
                          <Box display='flex' gap={5}>
                            <Checkbox checked={checked1}
                              onChange={handleCheck1} size='lg' />
                            <Input onChange={(e) => handleAdditionalInput1(e)} value={additionalField1} placeholder="Additional Field 1" />
                            {checked1 ? <Input placeholder={additionalField1 ? `Enter value of ${additionalField1}` : ""} /> : ""}
                          </Box>

                          <Box mt='8px' display='flex' gap={5}>
                            <Checkbox checked={checked2}
                              onChange={handleCheck2} size='lg' />
                            <Input placeholder="Additional Field 2" />
                            {checked2 ? <Input placeholder="Additional Field 1" /> : ""}
                          </Box>

                          <Box mt='8px' display='flex' gap={5}>
                            <Checkbox checked={checked3}
                              onChange={handleCheck3} size='lg' />
                            <Input placeholder="Additional Field 3" />
                            {checked3 ? <Input placeholder="Additional Field 1" /> : ""}
                          </Box>


                          <Box mt='8px' display='flex' gap={5}>
                            <Checkbox checked={checked4}
                              onChange={handleCheck4} size='lg' />
                            <Input placeholder="Additional Field 4" />
                            {checked4 ? <Input placeholder="Additional Field 4" /> : ""}
                          </Box>

                        </Box>
                      </Box>
                    </TabPanel>
                  </TabPanels>
                </Tabs>
              </Box>

            </ModalBody>
            <ModalFooter >
              <Button
                _hover={{ color: 'white', bg: 'black' }}
                bg='blue.500' color='white'
                onClick={handleAddParty}
                disabled={form.partyName == ""}
              >
                Add
              </Button>

            </ModalFooter>
          </ModalContent>
        </Modal>
      </Flex>
    </>
  );
};

export default Parties;


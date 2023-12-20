import React, { useEffect, useState } from "react";
import {
  Box,
  Flex,
  Input,
  Select,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  FormControl,
  FormLabel,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer, Button, Menu, MenuButton, MenuList, MenuItem, Checkbox, Text
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Slidebar from "../Slidebar/Slidebar";
import Company_name from "../Company_name/Company_name";
import remove from "../../../assets/remove.png";
import print4 from "../../../assets/print4.png";
import { useDispatch, useSelector } from "react-redux";
import {
  getStockAction,
  postStockAction,
  deleteStockAction
} from "../../../../Redux/Stocks/stock.action";
import {
  postCategoryAction,
  getCategoriesAction
} from "../../../../Redux/Category/category.actions"
import { ChevronDownIcon } from "@chakra-ui/icons";
import { FaEdit, FaTrash } from "react-icons/fa";
import moment from "moment/moment";
import { Inputvalidate } from "../../../helpers/inputValidate";
import { hasValidationError, validationError } from "../../../helpers/Frontend";


const Items = () => {
  const dummyCategories = ["Electronics", "Clothing", "Home Decor", "Books"];
  const Company = {
    name: "Company Name",
  };
  const Items = [
    {
      id: 1,
      Name: "name",
      stock: 100,
      price: 1000,
      tax: 0,
      total: 1000,
      buyprice: 200,
      sellprice: 300,
    },
  ];
  const modal1 = useDisclosure();
  const modal2 = useDisclosure();
  const { firmId } = useSelector((store) => store.FirmRegistration);
  const { getStockData } = useSelector((store) => store.stockReducer);
  const Categories = useSelector((store) => store.categoryReducer);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  // console.log(":Categories", firmId)

  useEffect(() => {
    if (selectedCategories.length === 0) {
      setFilteredProducts(getStockData);
    } else {
      const filtered = getStockData.filter((product) => {
        return product.category?.some((category) =>
          selectedCategories.includes(category)
        );
      });
      setFilteredProducts(filtered);
    }
  }, [selectedCategories, getStockData]);

  const dispatch = useDispatch();
  const [form, setForm] = useState({
    name: "",itemCategory:"",
    description: "",
    category: "",
    brand: "",
    stockQuantity: "",
    price: "",
    cost: "",
    supplier: "test",
    expiryDate: "",
    unit: "",
    manufactureDate: "",
    gstRate: "",
    firmId: firmId
    //  ,
  });

  useEffect(() => {
    const category = selectedCategories;
    setForm(prevForm => ({ ...prevForm, category }));
  }, [selectedCategories]);

  const [categoryForm, setCategoryForm] = useState({
    name: '', // Input field value
    codeType: 'default', // Select field value
    firmId: `${firmId}`,
  });

  const handleCategoryInputChange = (e) => {
    const { name, value } = e.target;
    setCategoryForm({
      ...categoryForm,
      [name]: value,
    });
  };

  const handleChangeItems = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const userDetails = JSON.parse(sessionStorage.getItem("companyDetails")) ? JSON.parse(sessionStorage.getItem("companyDetails")) : null
  const inputNameArray = ["name", "description","itemCategory", "category", "brand", "stockQuantity", "price", "cost", "supplier", "expiryDate", "manufactureDate", "gstRate", "firmId", "unit"]
  const [errors, setErrors] = useState([]);

  const handleItemsAdd = () => {
    if (!Inputvalidate(inputNameArray, form, setErrors)) { return; }
    dispatch(postStockAction(form, userDetails?.token ,modal1));
    // modal1.onClose();
  };

  useEffect(() => {
    dispatch(getStockAction(userDetails?.token, firmId));
    dispatch(getCategoriesAction(userDetails?.token, firmId));
  }, [firmId]);

  const handleAddCategory = () => {
    // Logic to add the new category
    dispatch(postCategoryAction(categoryForm, userDetails?.token, firmId ,modal2));
  };

  const handleCategoryChange = (categoryName) => {
    if (selectedCategories.includes(categoryName)) {
      // If category is already selected, remove it
      setSelectedCategories(selectedCategories.filter(name => name !== categoryName));
    } else {
      // If category is not selected, add it
      setSelectedCategories([...selectedCategories, categoryName]);
    }
  };

  const handleDelete = (id) => {
    // console.log("clickec" , id);
    dispatch(deleteStockAction(userDetails?.token, id))
      .then(() => {
        // After successful deletion, refetch data
        dispatch(getStockAction(userDetails?.token, firmId));
        dispatch(getCategoriesAction(userDetails?.token, firmId));
      })
      .catch((error) => {
        console.error(error);
      });
  }
  return (
    <>
      <Company_name company_name={Company.name} />
      <Flex>
        <Slidebar />
        <Box margin={"auto"} marginTop="20px" overflow={"hidden"} width="80%">
          {/* buttons */}
          <Box display="flex" justifyContent="space-between" alignItems="center">
            {/* select categories */}
            <Menu>
              <MenuButton as={Button} backgroundColor='gray.100' margin="10px" px="4"
                rightIcon={<ChevronDownIcon />}>
                Select Category
              </MenuButton>
              <MenuList>
                {Categories.categories.length > 0 ? Categories?.categories.map((category, id) => (
                  <MenuItem key={id}>
                    <Checkbox
                      onChange={() => handleCategoryChange(category.name)}
                      checked={selectedCategories.includes(category.name)}
                    >
                      {category.name}
                    </Checkbox>
                  </MenuItem>
                )) :
                  <MenuItem>
                    Not Found
                  </MenuItem>
                }
              </MenuList>
            </Menu>
            {/* add new item */}
            <Button
              backgroundColor="blue.400"
              margin={"10px"}
              onClick={modal1.onOpen}
              px="4"
            >
              Add Item +{" "}
            </Button>
            {/* add new category */}
            <Button
              backgroundColor="blue.400"
              margin={"10px"}
              onClick={modal2.onOpen}
              px="4"
            >
              Add Category +{" "}
            </Button>
          </Box>

          {/* table data */}
          <TableContainer style={{ margin: '20px', padding: '20px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
            <Table style={{ width: '100%' }}>
              <Thead>
                <Tr>
                  <Th>Product Code</Th>
                  <Th>Name</Th>
                  <Th>Brand</Th>
                  <Th>Stock Qty</Th>
                  <Th>Cost Price</Th>
                  <Th>Selling Price</Th>
                  <Th>Supplier</Th>
                  <Th>Manufacture Date</Th>
                  <Th>Expiry Date</Th>
                  <Th>GST Rate</Th>
                  <Th>Description</Th>
                  <Th> Actions </Th>
                </Tr>
              </Thead>
              <Tbody>
                {filteredProducts?.map((data) => (
                  <Tr key={data._id}>
                    <Td>{data?._id}</Td>
                    <Td>{data?.name}</Td>
                    <Td>{data?.brand}</Td>
                    <Td>{data?.stockQuantity}</Td>
                    <Td>{data?.cost}</Td>
                    <Td>{data?.price}</Td>
                    <Td>{data?.supplier}</Td>
                    {/* <Td>{data?.manufactureDate}</Td> */}
                    <Td>{moment(data?.manufactureDate).format("DD/MM/YY")}</Td>
                    <Td>{moment(data?.expiryDate).format("DD/MM/YY")}</Td>
                    <Td>{data?.gstRate}%</Td>
                    <Td>{data?.description}</Td>
                    <Td display={"flex"} gap={"8px"} align="center">
                      <Link><FaEdit /></Link>
                      <Link>more</Link>
                      <Link onClick={() => { handleDelete(data._id) }}><FaTrash /></Link>
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </TableContainer>
        </Box>

        {/* Add new item modal */}
        <Modal isOpen={modal1.isOpen} onClose={modal1.onClose}>
          <ModalOverlay />
          <ModalContent
            maxWidth='80%'
          >
            <ModalHeader>Add New Item</ModalHeader>

            <ModalCloseButton />
            <ModalBody>
              {/* item details */}
              <Flex>
                <FormControl margin={"10px"}>
                  <FormLabel>Category :</FormLabel>
                  <Select name="itemCategory" value={form?.itemCategory} onChange={handleChangeItems}
                  >
                    {/* {
                      Categories.categories.length > 0 ? Categories?.categories?.map((category, id) => {

                        <option> {category.name}</option>
                      }) :
                        <> */}
                          <option>Select Category</option>
                          <option>Elctronices</option>
                          <option>Cloths</option>
                          <option>Others</option>
                        {/* </>
                    } */}

                  </Select>

                  {/* {hasValidationError(errors, "name") ? (<span className="has-cust-error-white">{validationError(errors, "name")}</span>) : null} */}

                </FormControl>
                <FormControl margin={"10px"}>
                  <FormLabel>Item Name :</FormLabel>
                  <Input
                    type="text"
                    placeholder="Item Name"
                    value={form?.name}
                    name="name"
                    onChange={handleChangeItems}
                  />
                  {hasValidationError(errors, "name") ? (<span className="has-cust-error-white">{validationError(errors, "name")}</span>) : null}

                </FormControl>
                <FormControl margin={"10px"}>
                  <FormLabel>Item ID :</FormLabel>
                  <Input
                    type="text"
                    disabled={true}
                    placeholder="Item Id"
                    value={form?.firmId}
                    name="firmId"
                    onChange={handleChangeItems}
                  />
                  {hasValidationError(errors, "firmId") ? (<span className="has-cust-error-white">{validationError(errors, "firmId")}</span>) : null}

                </FormControl>
              </Flex>
              <Flex>
                <FormControl margin={"10px"}>
                  <FormLabel>Brand :</FormLabel>
                  <Input
                    type="text"
                    placeholder="Brand"
                    value={form.brand}
                    name="brand"
                    onChange={handleChangeItems}
                  />
                  {hasValidationError(errors, "brand") ? (<span className="has-cust-error-white">{validationError(errors, "brand")}</span>) : null}

                </FormControl>
                <FormControl margin={"10px"}>
                  <FormLabel>Unit :</FormLabel>
                  <Input
                    type="number"
                    placeholder="Unit"
                    value={form.unit}
                    name="unit"
                    onChange={handleChangeItems}
                  />

                  {hasValidationError(errors, "unit") ? (<span className="has-cust-error-white">{validationError(errors, "unit")}</span>) : null}

                </FormControl>
              </Flex>
              <Flex>
                <FormControl margin={"10px"}>
                  <FormLabel>Cost Price :</FormLabel>
                  <Input
                    type="number"
                    placeholder="Cost Price"
                    value={form.cost}
                    name="cost"
                    onChange={handleChangeItems}
                  />
                  {hasValidationError(errors, "cost") ? (<span className="has-cust-error-white">{validationError(errors, "cost")}</span>) : null}

                </FormControl>
                <FormControl margin={"10px"}>
                  <FormLabel>Selling Price :</FormLabel>
                  <Input
                    type="number"
                    placeholder="Selling Price"
                    value={form.price}
                    name="price"
                    onChange={handleChangeItems}
                    style={form.price < form.cost ? {border:"1px solid red"}:{}}
                  />
                  {hasValidationError(errors, "price") ? (<span className="has-cust-error-white">{validationError(errors, "price")}</span>) : null}

                </FormControl>
              </Flex>
              <Flex>
                <FormControl margin={"10px"}>
                  <FormLabel>Supplier Name :</FormLabel>
                  <Input
                    type="text"
                    placeholder="Supplier Name"
                    value={form.supplier}
                    name="supplier"
                    onChange={handleChangeItems}
                  />
                  {hasValidationError(errors, "supplier") ? (<span className="has-cust-error-white">{validationError(errors, "supplier")}</span>) : null}

                </FormControl>
                <FormControl margin={"10px"}>
                  <FormLabel> GST Rate:</FormLabel>
                  <Select
                    type="number"
                    placeholder="select gst Rate"
                    onChange={handleChangeItems}
                    value={form.gstRate}
                    name="gstRate"
                  >
                    <option value={0}>0%</option>
                    <option value={3}>3%</option>
                    <option value={5}>5%</option>
                    <option value={12}>12%</option>
                    <option value={18}>18%</option>
                    <option value={28}>28%</option>
                  </Select>
                  {hasValidationError(errors, "gstRate") ? (<span className="has-cust-error-white">{validationError(errors, "gstRate")}</span>) : null}
                </FormControl>
              </Flex>
              <Flex>
                <FormControl margin={"10px"}>
                  <FormLabel>Manufacture Date:</FormLabel>
                  <Input
                    type="date"
                    placeholder="manufactureDate"
                    value={form?.manufactureDate}
                    name="manufactureDate"
                    onChange={handleChangeItems}
                  />
                  {hasValidationError(errors, "manufactureDate") ? (<span className="has-cust-error-white">{validationError(errors, "manufactureDate")}</span>) : null}

                </FormControl>
                <FormControl margin={"10px"}>
                  <FormLabel>Expiry Date:</FormLabel>
                  <Input
                    type="date"
                    placeholder="expiryDate"
                    value={form?.expiryDate}
                    name="expiryDate"
                    onChange={handleChangeItems}
                  />
                  {hasValidationError(errors, "expiryDate") ? (<span className="has-cust-error-white">{validationError(errors, "expiryDate")}</span>) : null}

                </FormControl>
              </Flex>
              <Flex>
                <FormControl margin={"10px"}>
                  <FormLabel>Stock Quantity :</FormLabel>
                  <Input
                    type="number"
                    placeholder="Stock Quantity"
                    value={form.stockQuantity}
                    name="stockQuantity"
                    onChange={handleChangeItems}
                  />
                  {hasValidationError(errors, "stockQuantity") ? (<span className="has-cust-error-white">{validationError(errors, "stockQuantity")}</span>) : null}

                </FormControl>
                <FormControl margin={"10px"}>
                  <FormLabel>Description :</FormLabel>
                  <Input
                    type="text"
                    placeholder="description"
                    value={form.description}
                    name="description"
                    onChange={handleChangeItems}
                  />
                  {hasValidationError(errors, "description") ? (<span className="has-cust-error-white">{validationError(errors, "description")}</span>) : null}

                </FormControl>
              </Flex>
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={modal1.onClose}>
                Close
              </Button>
              <Button colorScheme="green" onClick={handleItemsAdd}>
                Add
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>

        {/* Add category modal */}
        <Modal isOpen={modal2.isOpen} onClose={modal2.onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Add Category</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              {/* Select Category */}
              <Select
                backgroundColor='gray.100'
                rightIcon={<ChevronDownIcon />}
                defaultValue='default'
                placeholder="Select category"
                name="name"
                value={categoryForm.name}
                onChange={handleCategoryInputChange}
              >
                {dummyCategories.map((category) => (
                  <option key={category}>{category}</option>
                ))}
              </Select>

              <Text mt="1rem" mb="0.5rem" textAlign='center'>OR</Text>

              {/* Add new category */}
              <FormControl>
                <FormLabel> New Category</FormLabel>
                <Input
                  type="text"
                  placeholder="Enter New Category"
                  name="name"
                  value={categoryForm.name}
                  onChange={handleCategoryInputChange}
                />
              </FormControl>

              {/* Select HSN/SSN code */}
              <Select
                rightIcon={<ChevronDownIcon />}
                defaultValue='default'
                placeholder="Select HSN/SSN code"
                mt='8'
                name="codeType"
                value={categoryForm.codeType}
                onChange={handleCategoryInputChange}
              >
                {/* Options for HSN code */}
                <optgroup label="HSN Code">
                  <option value="hsn_code_1">HSN Code 1</option>
                  <option value="hsn_code_2">HSN Code 2</option>
                </optgroup>

                {/* Options for SSN code */}
                <optgroup label="SSN Code">
                  <option value="ssn_code_1">SSN Code 1</option>
                  <option value="ssn_code_2">SSN Code 2</option>
                </optgroup>
              </Select>
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={modal2.onClose}>
                Close
              </Button>
              <Button colorScheme="green" onClick={handleAddCategory}>
                Add
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Flex>
    </>
  );
};

export default Items;

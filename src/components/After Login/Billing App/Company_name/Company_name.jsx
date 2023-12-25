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
  Heading,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { storage } from "../../../../firebase";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getFirmData, setFirmId, setFirmName } from "../../../../Redux/Firm/Firm.Action";
import { FaUserCircle } from "react-icons/fa";
import search2 from "../../../assets/search2.png";
import ylogo from "../../../assets/ylogo.jpg";
import search3 from "../../../assets/search3.png";

const FYData = [
  {
    year: '2023-24'
  },
  {
    year: '2022-23'
  },
  {
    year: '2021-22'
  },
  {
    year: '2020-21'
  }
]

const Company_name = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isShown, setIsShown] = useState(false);
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  const [companyName, setCompanyName] = useState('');
  const [companyLogo, setCompanyLogo] = useState('');

  const handleClick = (event) => {
    setIsShown((current) => !current);
  };

  const [images, setImages] = useState([]);
  const [imageURL, setImageURL] = useState("");

  const [form, setForm] = useState({
    companyLogo: "",
    companyName: "",
    gstinNumber: "",
    email: "",
    phoneNumber: "",
    signature: "",
    state: "",
    businessAddress: "",
    businessCategory: "",
    businessType: "",
    businessRegistrationType: "",
    businessDescription: "",
  });

  const dispatch = useDispatch();
  const { get_firm_data, firmId, firmName } = useSelector(
    (store) => store.FirmRegistration
  );

  const handleImages = () => {
    let count = 0;

    for (let i = 0; i < images.length; i++) {
      const storageRef = ref(storage, `/files/${images[i].name}`);
      const uploadTask = uploadBytesResumable(storageRef, images[i]);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const percent = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
        },
        (err) => console.log(err),
        async () => {
          await getDownloadURL(uploadTask.snapshot.ref).then((url) => {
            count++;

            if (count === images.length) {
              setImageURL(url);
            }
          });
        }
      );
    }
  };

  const handleChange = (e) => {
    const { value } = e.target;
    const selectedFirm = get_firm_data.find((firm) => firm._id === value);
    localStorage.setItem('companyInLocalStorage', selectedFirm.companyName)
    const selectedCompanyName = selectedFirm ? selectedFirm.companyName : "";
    const companyLogo = selectedFirm ? selectedFirm.companyLogo : "";
    setCompanyLogo(selectedFirm ? selectedFirm.companyLogo : "")
    setCompanyName(selectedCompanyName) // update heading
    setForm({ ...form, companyName: selectedCompanyName });

    dispatch(setFirmId(value));
    dispatch(setFirmName(selectedCompanyName));
  };

  useEffect(() => {
    dispatch(getFirmData(userDetails?.token));
  }, []);

  const userDetails = JSON.parse(sessionStorage.getItem("companyDetails")) ? JSON.parse(sessionStorage.getItem("companyDetails")) : null;
  let companyInLocalStorage = localStorage.getItem("companyInLocalStorage");

  useEffect(() => {
    if (get_firm_data?.length > 0) {
      const selectedFirm = get_firm_data.find((firm) => firm._id === firmId);
      const selectedCompanyName = selectedFirm ? selectedFirm.companyName : "";
      const companyLogo = selectedFirm ? selectedFirm.companyLogo : "";
      setCompanyLogo(companyLogo);
      setCompanyName(selectedCompanyName); // update heading
      setForm({ ...form, companyName: selectedCompanyName });
    }
  }, [firmId, get_firm_data]);

  useEffect(() => {
    handleImages();
  }, [images]);

  return (
    <>
      <Box>
        <Flex
          gap={"20px"}
          justifyContent={"right"}
          height={"60px"}
          p={"10px"}
          bg={"white"}
        >
          <Link to={""}>
            <Button bg={"green.500"} color={"white"}>
              <Text
                fontSize={{ base: "10px", md: "12px", lg: "15px" }}
                color={"gray.900"}
                fontWeight={"bold"}
                m={"auto"}
              >
                ADD SALE +
              </Text>
            </Button>
          </Link>
          <Link to={""}>
            <Button bg={"blue.500"} color={"white"}>
              <Text
                fontSize={{ base: "10px", md: "12px", lg: "15px" }}
                color={"gray.900"}
                fontWeight={"bold"}
                m={"auto"}
              >
                ADD PURCHASE +
              </Text>
            </Button>
          </Link>
        </Flex>
        <Flex
          margin={"auto"}
          textAlign={"center"}
          backgroundColor="rgb(255,185,29)"
          color={"white"}
          paddingX={"10px"}
          alignItems={"center"}
          boxShadow="rgba(3, 102, 214, 0.3) 0px 0px 0px 3px"
          pt='1.5'
        >
          <HStack style={{ margin: "10px" }} height="100%">
            <Image
              src={search2}
              width="25px"
              height="25px"
              borderRadius={"50%"}
              onClick={handleClick}
            ></Image>
          </HStack>

          <Heading
            fontSize={{ base: "12px", md: "14px", lg: "20px" }}
            margin={"auto"}
            cursor={"pointer"}
            onClick={onOpen}
            alignItems='center'
          >
            <Flex pt='1'>
              <Image
                src={companyLogo ? companyLogo : ylogo}
                width="28px"
                height="28px"
                borderRadius={"50%"}
              />
              <Text ml='4' color='whiteAlpha.900' fontSize='24px'>{companyName}</Text>
            </Flex>
          </Heading>
          <HStack>
            <Link to={"/Profile"}>
              <Flex justifySelf={"end"} cursor={"pointer"} alignItems='center' mr='4'>
                <FaUserCircle size='24px' title="Profile" />
              </Flex>
            </Link>
          </HStack>
        </Flex>

        {isShown && (
          <HStack
            height="100%"
            position="relative"
            background={"blackAlpha.800"}
            padding={"20px"}
            color={"white"}
          >
            <Input
              type="search"
              placeholder="search"
              marginRight={"10px"}
              backgroundColor="rgb(255,185,29)"
            />
            <Image
              src={search3}
              width="30px"
              height="30px"
              borderRadius={"10px"}
              backgroundColor={"orange"}
            ></Image>
          </HStack>
        )}

        <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent maxW="800px">
            <ModalHeader
              style={{
                marginTop: "70px",
              }}
            >
              Edit Company
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={10}>
              <Box></Box>
              <Flex alignItems='center' gap='20px'>
                <Select placeholder="Select your company" onChange={handleChange}>
                  {get_firm_data?.map((el) => (
                    <option value={el._id} name={el.companyName}>{el.companyName}</option>
                  ))}
                </Select>
                <Select placeholder="Select financial year">
                  {FYData?.map((FY) => (
                    <option>{FY.year}</option>
                  ))}
                </Select>
              </Flex>
              <Link to={"/AddCompanyForm"} mt='2'>
                <Button m={"10px auto"} bg={"orange.300"}>
                  Add New Company +
                </Button>
              </Link>
            </ModalBody>

            <ModalFooter>
              <Flex justifyContent={"space-between"}>
                <Box>
                  <Button onClick={onClose}>Done</Button>
                </Box>
              </Flex>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Box>
    </>
  );
};

export default Company_name;
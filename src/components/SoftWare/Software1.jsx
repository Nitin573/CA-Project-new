import React, { useState } from 'react'
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
  Collapse,
  Grid,

} from '@chakra-ui/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import new_ from "../assets/new_.webp";
import happy_customer from "../assets/happy_customer.webp";
import multi_device from "../assets/multi_device.webp";
import multi_user from "../assets/multi_user.webp";
import phone_icon from "../assets/phone_icon.webp"
import make_gst_bills from "../assets/make_gst_bills.webp"
import check_inventory_instantly from "../assets/check_inventory_instantly.webp"
import gst_filing_made_simplerAndFaster from "../assets/gst_filing_made_simplerAndFaster.webp"
import online_or_offline_billing_software from "../assets/online_or_offline_billing_software.webp"
import track_your_business_status from "../assets/track_your_business_status.webp"
import keep_data_safe_with_backups from "../assets/keep_data_safe_with_backups.webp"
import manage_cashflow_seamlessly from "../assets/manage_cashflow_seamlessly.webp"
import lifetime_free from "../assets/lifetime_free.webp"
import software5 from "../assets/software5.webp"
import provide_multiple_payment_options from "../assets/provide_multiple_payment_options.webp"
import build_a_positive_brand_image from "../assets/build_a_positive_brand_image.webp"
import plan_your_inventory_space from "../assets/plan_your_inventory_space.webp"



import { useEffect } from "react";


import data from "./data";
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { store } from '../../Store/Store';
import Navbar_AL from '../Navbar_AL';



const Software1 = () => {

  const [people, setPeople] = useState(data);
  const [index, setIndex] = useState(0);
  const style1 =
    { display: "none" }


  const style2 = {
    display: "flex",
    marginTop: "20px",
    padding: "20px"
  }
  const [hide, setHide] = useState(style1)



  useEffect(() => {
    const lastIndex = people.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, people]);

  // autoslide, clearInterval = een cleanup functie noodzakelijk bij interval
  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 3600);
    return () => clearInterval(slider);
  }, [index]);
  /////
  const [show, setShow] = React.useState(false);
  const [show1, setShow1] = React.useState(false);
  const [show2, setShow2] = React.useState(false);


  const handleToggle = () => {
    onToggle();
    setShow(!show)
  };

  const handleToggle1 = () => {
    collapse.onToggle();
    setShow1(!show1)
  };
  const handleToggle2 = () => {
    collapse1.onToggle();
    setShow2(!show2)
  };
  const { isOpen, onToggle } = useDisclosure()

  const collapse = useDisclosure()
  const collapse1 = useDisclosure()


  const { token } = useSelector(store => store.Signin)
  const navigate = useNavigate();
  const company = [{}]
  const freeHandle = () => {
    if (!token) {
      navigate("/Login")
    }
    else if (token && company.length > 0) {
      navigate("/HomeDash")

    } else {
      navigate("/AddCompanyForm")
    }

  }

  return (
    <>

      <Navbar_AL/>
      <HStack gap={"30px"} padding={"20px"} flexDirection={{ base: "column", md: "row", lg: "row" }}>
        <VStack gap={"50px"} width={{ base: "100%", md: "50%", lg: "50%" }}>
          <Heading color={"blackAlpha.700"} fontWeight={"extrabold"}>
            GST Billing Software in India for Small Businesses
          </Heading>
          <Text>Manage your business professionally with us. Using the best software for your billing, inventory & accounting needs. Be a part of 1 Cr+ SMEs in India who trust us.</Text>
          <Link to='/software-login'>
            <Button bg={"orange"} padding={"30px 50px"} onClick={freeHandle}>Start For Free</Button>
          </Link>
        </VStack>
        <VStack width={{ base: "100%", md: "50%", lg: "50%" }}>
          <Image src={new_} width={{ base: "100%", md: "70%", lg: "70%" }}></Image>
        </VStack>
      </HStack>


      <HStack margin={"auto"} padding={"50px"} justifyContent={"space-evenly"} wrap={{ base: "wrap", md: "nowrap", lg: "nowrap" }} bg={"whitesmoke"}>
        <VStack >
          <Image src={happy_customer}></Image>
          <Text color={"black"} fontSize="20px">
            1 Crore+
          </Text>

          <Text>Happy customers</Text>

        </VStack>
        <VStack >
          <Image src={multi_device}></Image>
          <Text color={"black"} fontSize="20px">
            Multi-Device
          </Text>


          <Text>Use together on Mobile/Desktop</Text>

        </VStack>
        <VStack  >
          <Image src={multi_user}></Image>
          <Text color={"black"} fontSize="20px">
            Multi-User
          </Text>
          <Text>User Management
            Feature</Text>
        </VStack>
        <VStack >
          <Image src={phone_icon}></Image>
          <Text color={"black"} fontSize="20px">
            FREE
          </Text>
          <Text>Android Mobile App </Text>
        </VStack>

      </HStack>

      <HStack padding={"20px"} margin={"auto"} marginTop={"20px"} flexDirection={{ base: "column", md: "row", lg: "row" }}>
        <VStack width={{ base: "100%", md: "50%", lg: "50%" }} margin="auto">
          <Image src={make_gst_bills} width={"90%"} padding={"10px"}></Image>
        </VStack>
        <VStack width={{ base: "100%", md: "50%", lg: "50%" }} >
          <Heading fontSize={{ base: "25px", md: "30px", lg: "40px" }} >Create GST Bills for customers and share them online</Heading>

          <Collapse startingHeight={200} in={isOpen}>
            <Text textAlign={"left"} fontSize="15px">
              Vyapar billing software helps you set up a professional brand identity with useful GST billing features. You can use Vyapar accounting and billing app to create invoices. It helps you comply with Goods and Service Tax law in India. <br />

              Vyapar app makes accounting error-free. It helps ensure data security for your business. In a few steps, invoice formats in the Vyapar app help create GST invoices. You can use the Vyapar app in both online and offline modes. So, using the app makes it easier for an SME to comply with the best accounting practices. It makes the bookkeeping process seamless for businesses.<br />

              Using our user-friendly invoicing software to comply with GST norms. Vyapar billing software comes with variety of useful billing solutions. You can create invoices for your customers in few steps. Further, you can share them with customers using WhatsApp, email, or print methods. You can print them use your printer in A4, A5, 2, and 3 inches variations.
              <br />
              Unlike most accounting softwares, Vyapar enables you to create invoices within minutes. The best part is that your won’t require hours of rigorous training as it is an easy process. In the app, you can choose from 10+ GST invoice and billing formats to create professional and unique bills. (It includes the design based on tally accounting software).
              <br />
              Vyapar is the best free GST invoicing software. It comes with various useful billing and accounting features. Using the app makes business management hassle-free for SMEs. With completely customised GST-compliant invoices, your business can stand out among competitors.
              <br />
              The best billing software makes the billing process easier for business owners. To do so, Vyapar comes with a dedicated Android app and Windows software. The basic features required for everyday accounting are free for Android mobile users. A business owners only have to pay for premium features as a yearly subscription.
              <br />
              Numerous useful features are available in Windows desktop software. Every business can access them for free during their 15-day trial. So, every business can try out the features before purchasing the subscription. It helps SMEs understand how the app benefits them before paying.
            </Text>
          </Collapse>
          <Button onClick={handleToggle} mt="1rem">
            Show {show ? "Less" : "More"}
          </Button>

        </VStack>
      </HStack>


      <HStack padding={"20px"} margin={"auto"} marginTop={"20px"} flexDirection={{ base: "column", md: "row", lg: "row" }}>
        <VStack width={{ base: "100%", md: "50%", lg: "50%" }} >
          <Heading fontSize={{ base: "25px", md: "30px", lg: "40px" }} >Manage Inventory Seamlessly</Heading>

          <Collapse startingHeight={200} in={collapse.isOpen}>
            <Text textAlign={"left"} fontSize="15px">
              Vyapar brings the finest inventory management software with incredibly effective features. It helps improve business performance. Using the Vyapar app features like business reports, you can track your business’s sales. It will help understand how effectively you have managed your inventory. <br />

              As the billing software, Vyapar keeps a record of business data within the app. It makes it hassle-free for business owners to create an effective strategy. Using inventory tracking features help maximise the utility of inventory space. Our inventory management features make it easier to identify items that are not selling. You can use the analysis to help save space by eliminating items that don’t sell frequently. <br />

              Using the inventory tracking features, you can record items and identify them. Tracking is done using the batch number, expiry date, manufacturing date, slot number, and other details. These are recorded in system as soon as they arrive. It helps you have the required stock in place when needed for sale. Also, it helps keep a record to ensure that no theft goes unnoticed.<br />

              Using the free billing software by Vyapar, you can check the live status of your inventory. Further, you can set up alerts to place new orders with your suppliers. Also, you can track the location of packed orders using delivery challan anytime. Our inventory management app allows you to perform all inventory tracking tasks seamlessly. It helps provide a better customer experience.
              <br />
              Vyapar empowers your employees to take care of your inventory management needs. It does so with various useful features within the app. The instant invoicing app helps you enter all the data stored from sales in an excel sheet. It helps save time and effort required in various accounting processes.<br />

              Using the best billing app, you need not do tasks manually as it automates most processes. Further, regular checks and matching data using the app ensures that items do not get misplaced. You can easily carry out replacement without a delay to avoid business loss. It helps with day to day inventory management requirements.
              <br />
              Another benefit of using Vyapar software is that it gives you statistics on your sales. Using the app, you can create GST reports. You can prepare a strategy to maximise the profits and minimise the expenses.
            </Text>
          </Collapse>
          <Button onClick={handleToggle1} mt="1rem">
            Show {show1 ? "Less" : "More"}
          </Button>

        </VStack>
        <Image src={check_inventory_instantly} width={{ base: "100%", md: "50%", lg: "50%" }} paddingTop={"10px"}></Image>


      </HStack>

      <HStack padding={"20px"} margin={"auto"} marginTop={"20px"} flexDirection={{ base: "column", md: "row", lg: "row" }}>
        <VStack width={{ base: "100%", md: "50%", lg: "50%" }} margin="auto">
          <Image src={gst_filing_made_simplerAndFaster} width={"90%"} padding={"10px"}></Image>
        </VStack>
        <VStack width={{ base: "100%", md: "50%", lg: "50%" }} >
          <Heading fontSize={{ base: "25px", md: "30px", lg: "40px" }} >Create GST Bills for customers and share them online</Heading>

          <Collapse startingHeight={200} in={collapse1.isOpen}>
            <Text textAlign={"left"} fontSize="15px">
              Filing GST is a challenge for business owners and is a long process if done manually. Using Vyapar billing software, you can create GST reports and make the GST filing process seamless.
              <br />
              Many business owners spend their time and efforts every month. It is to ensure that they comply with the tax laws. After all, they must keep track of their monthly invoices, expenses, and accounting details. Also, manually enter them to file GST returns.
              <br />


              Vyapar changes it all by helping create dedicated GSTR reports and saves time using automation. Vyapar can help you create reports like GSTR1, GSTR2, GSTR3, GSTR4, and GSTR9 from the app itself.
              <br />

              Using the data you had saved when you created invoices for your customers and entered expenses. Using professional billing software to create GST reports saves time for every business owner. With this, they can rely on automation to complete all accounting tasks without errors.
              <br />

              As you create GST bills throughout the year, the app automatically detect the GST applicable to the product. It helps comply with GST laws to ensure that every transaction is recorded. Further, it ensures correct GST figures are entered. The billing software further eliminates manual errors with automation. It is beneficial when you cannot hire an extra employee to care for your accounting.
              <br />

              To ensure that you can file GST timely and no data loss happens, you can keep a backup. Using Vyapar, your business data is safe. It makes you feel stress-free when you have to file GST as you can restore data anytime. Using Vyapar, you can create backups in both Google Drive and local storage to keep it secure.
            </Text>
          </Collapse>
          <Button onClick={handleToggle2} mt="1rem">
            Show {show2 ? "Less" : "More"}
          </Button>

        </VStack>
      </HStack>

      <HStack flexDirection={{ base: "column", md: "row", lg: "row" }} p={"20px"} >
        <VStack width={{ base: "100%", md: "33%", lg: "33%" }} margin="auto" textAlign={"right"}>
          <VStack>
            <HStack>
              <Heading fontSize={"20px"}>Lifetime free basic usage</Heading>
              <Image src={lifetime_free}></Image>
            </HStack>
            <Text fontSize={"15"}>
              Using our free GST accounting and billing software, you can seamlessly create custom invoices. Further, you can manage your dashboard and track inventory items. The free access provides you use many other useful features.
            </Text>
          </VStack>
          <VStack>
            <HStack>
              <Heading fontSize={"20px"}>Track your business status</Heading>
              <Image src={track_your_business_status}></Image>
            </HStack>
            <Text fontSize={"15"}>
              Vyapar business dashboard makes the entire management process seamless. You can check business cash flow, inventory status, open orders, and payment updates in one place.
            </Text>
          </VStack>
          <VStack>
            <HStack>
              <Heading fontSize={"20px"}>Manage cashflow seamlessly</Heading>
              <Image src={manage_cashflow_seamlessly}></Image>
            </HStack>
            <Text fontSize={"15"}>
              GST billing & accounting software allows businesses to record transactions. It helps track payments. Over 1 crore businesses have tried out our free billing software features. Cashflow management is widely used for their billing, accounting, and many more
            </Text>
          </VStack>
          <VStack>
            <HStack>
              <Heading fontSize={"20px"}>Online/Offline billing</Heading>
              <Image src={online_or_offline_billing_software}></Image>
            </HStack>
            <Text fontSize={"15"}>
              Using our billing tool, you need not stop business operations due to weak internet connectivity. You can use the offline billing features in the app to generate bills.
            </Text>
          </VStack>
        </VStack>
        <VStack width={{ base: "100%", md: "33%", lg: "33%" }} margin="auto" p={"20px"}>
          <Image src={software5}></Image>
        </VStack>

        <VStack width={{ base: "100%", md: "33%", lg: "33%" }} margin="auto" textAlign={"left"}>
          <VStack>
            <HStack>
              <Image src={provide_multiple_payment_options}></Image>
              <Heading fontSize={"20px"}>Provide multiple payment options</Heading>

            </HStack>
            <Text fontSize={"15"}>
              Your customers are less likely to default on the payments if you provide multiple payment options for convenience. You can provide choices like UPI, QR, NEFT, IMPS, e-wallet, and credit/debit cards.
            </Text>
          </VStack>
          <VStack>
            <HStack>
              <Image src={keep_data_safe_with_backups}></Image>
              <Heading fontSize={"20px"}>Keep data safe with backups</Heading>

            </HStack>
            <Text fontSize={"15"}>
              Using our free GST software for billing in India, you can set up an automatic data backup, allowing you to safeguard the data stored in the app. For additional safety, you can create a local backup too.
            </Text>
          </VStack>
          <VStack>
            <HStack>
              <Image src={build_a_positive_brand_image}></Image>
              <Heading fontSize={"20px"}>Build a positive brand image</Heading>

            </HStack>
            <Text fontSize={"15"}>
              Providing professional quotes and estimates during negotiation builds a positive brand image. Further, you can provide complete disclosure about the deal to build trust.
            </Text>
          </VStack>
          <VStack>
            <HStack>
              <Image src={plan_your_inventory_space}></Image>
              <Heading fontSize={"20px"}>Plan your inventory space</Heading>

            </HStack>
            <Text fontSize={"15"}>
              Using our GST billing software, you can keep track of available items in your store. It can help you set up low inventory alerts to place advance orders and detect possible theft.
            </Text>
          </VStack>
        </VStack>
      </HStack>
      <VStack padding={"20px"} margin={"auto"} bg={"whitesmoke"} textAlign={"left"} height={{ base: "auto", md: "700px", lg: "500px" }}>
        <Heading>Built for your Industry</Heading>
        <Text margin={"auto"} padding="20px 20%">
          Vyapar GST billing software and accounting tools have numerous features. Collectively, they help businesses across industries. Vyapar app is built to serve every industry. It is customisable to meet the requirement of your business as per your unique business requirements. Some of the most popular industries use the Vyapar GST accounting software. It helps manage all of their business requirements.
        </Text>

        <div className="section-center">
          {people.map((person, personIndex) => {
            const { id, image, name, title, quote, msg } = person;
            let position = "nextSlide";
            if (personIndex === index) {
              position = "activeSlide";
            }
            if (
              personIndex === index - 1 ||
              (index === 0 && personIndex === people.length - 1)
            ) {
              position = "lastSlide";
            }
            return (
              <article key={id} className={position} style={{
                height: "200px"
              }}>
                <div className="mainposition">
                  <h3>{name}</h3>
                  <img src={image} width={"150px"} alt={name} />

                  <Text textAlign={"left"}>
                    {msg}
                  </Text>

                </div>
              </article>
            );
          })}
        </div>

      </VStack>





    </>
  )
}

export default Software1

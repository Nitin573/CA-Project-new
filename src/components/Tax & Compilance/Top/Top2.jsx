import { React } from 'react'
import {
  Box, Button, Flex, HStack, Image, Input, Select, Text, VStack, Wrap, Heading, List,
  ListItem,
  ListIcon,
  OrderedList,
  Link,
  UnorderedList,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  AspectRatio,
  useDisclosure
} from '@chakra-ui/react'

import bg874 from '../../assets/bg874.jpg'
import WP_from from '../WP_From/WP_from'
import mouthshut_first from '../../assets/mouthshut_first.svg'
import trustpilot_second from '../../assets/trustpilot_second.svg'
import google_third from '../../assets/google_third.svg'

const Top2 = (ppx) => {
  return (
    <div>
      <VStack bgImage={bg874} style={{
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "scroll",
        backgroundSize: "cover",
        backgroundPosition: "center",
        boxSizing: "border-box",
        color: 'white',
      }}>
        <VStack width={"90%"} bgColor={"rgb(60,40,80,0.200)"} flexDirection={{
          base: "column", md: "row", lg: "row"
        }}>



          <VStack gap={"25px"} ><Box class="styles_h1Container__BUOj5" borderBottom={"3px solid orange"} >
            <h2 color={'white'}>{ppx.heading}</h2>
          </Box>


            <h4>
              {ppx.text1}


            </h4>
            <h4 >
              <Text color={'white'}>
                {ppx.text2}
              </Text>
            </h4>
            <p >
              <Text color={'white'}>
                {ppx.text3}
              </Text>
            </p>
            <Box mt="7%" mb="7%" width="90%" display="flex" flexDirection={{ base: "column", sm: "row" }} justifyContent="space-between">
              <Box width={{ base: "50%", sm: "30%" }} m={{ base: "auto" }} mt={{ base: "10%", sm: "auto" }}>
                <Image width="100%" src={mouthshut_first} alt="" />
              </Box>
              <Box width={{ base: "50%", sm: "30%" }} m={{ base: "auto" }} mt={{ base: "10%", sm: "auto" }}>
                <Image width="100%" src={trustpilot_second} alt="" />
              </Box>
              <Box width={{ base: "50%", sm: "30%" }} m={{ base: "auto" }} mt={{ base: "10%", sm: "auto" }}>
                <Image width="100%" src={google_third} alt="" />
              </Box>
            </Box>

          </VStack>
          <WP_from />
        </VStack>




      </VStack>
    </div>
  )
}

export default Top2
import React from 'react'
import Header from './Header'
import GeneralInformataion from './GeneralInformataion'
import PaymentDetails from './PaymentDetails'
import Documents from './Documents'
import { Box } from '@chakra-ui/react'

const Profile = () => {
  return (
    <>
        <Box bg="gray.100">
            <Header/>
            <GeneralInformataion/>
            <Documents/>
            <PaymentDetails/>
        </Box>
    </>
  )
}

export default Profile
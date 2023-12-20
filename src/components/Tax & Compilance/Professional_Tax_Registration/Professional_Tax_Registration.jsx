import React from 'react'
import Top4 from '../Top/Top4'
import Home5 from "../Home5/Home5"
import Home6 from "./Home6"
import { Button } from '@chakra-ui/react'
const Professional_Tax_Registration = () => {
    return (
        <div>
            <Top4 heading="Easy Online Professional Tax Registration" text1="Don’t risk paying penalties. Get our experts to register you for professional tax today!" text2="Track the progress of your application anytime, anywhere" />  <Button backgroundColor="orange" color="white" href=""> Register Professional Tax</Button>
                <Home5></Home5>
                <Home6></Home6>
        </div>
    )
}

export default Professional_Tax_Registration

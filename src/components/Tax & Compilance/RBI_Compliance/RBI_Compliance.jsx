import React from 'react'
import Top5 from '../Top/Top5'
import Home5 from "../Home5/Home5"
import Home6 from "./Home6"
import bg74 from '../../assets/bg74.jpg'

const RBI_Compliance = () => {
    return (
        <div>
            <Top5 bgi={bg74} col={"rgb(0,0,0,0.800)"} heading="Proposal for RBI Compounding Application" text1="A “Compound” means settling a matter by a money payment. The money is paid in place of any other liability. When an individual or a company commits any offense, the RBI compounding application is applied to save him from the prosecution.s" text2="" />
            <Home5></Home5>
            <Home6></Home6>
        </div>
    )
}

export default RBI_Compliance

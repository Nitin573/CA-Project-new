import React from 'react'
import Top5 from '../Top/Top5'
import Home5 from "../Home5/Home5"
import Home6 from "./Home6"
import bg74 from '../../assets/bg74.jpg'
const Add_Designated_Partner = () => {
    return (
        <div>
            <Top5 bgi={bg74} col={"rgb(0,0,0,0.800)"} heading="Adding a Designated Partner" text1="Every Limited Liability Partnership must have at least two designated partners. To add a designated partner, a resolution needs to be passed. He must have a DPIN and his name must be amended in the LLP agreement." text2="" />
            <Home5></Home5>
            <Home6></Home6>
        </div>
    )
}

export default Add_Designated_Partner

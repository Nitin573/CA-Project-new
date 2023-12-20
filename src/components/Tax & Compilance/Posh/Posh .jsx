import React from 'react'
import Top5 from '../Top/Top5'
import Home5 from "../Home5/Home5"
import Home6 from "./Home6"
import yellowBackground from '../../assets/yellowBackground.jpg'
const Posh = () => {
    return (
        <div >
            <Top5 bgi={yellowBackground} col={"rgb(50,50,50,0.600)"} heading="Posh Compliance India" text1="With Vakilsearch, you can create and customise Employee-To-Employee POSH compliance programs to fit your own business needs." />
            <Home5></Home5>
            <Home6></Home6>
        </div>
    )
}

export default Posh

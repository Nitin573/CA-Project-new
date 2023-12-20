import React from 'react'
import Top5 from '../Top/Top5'
import Home5 from "../Home5/Home5"
import Home6 from "./Home6"
import bg745 from '../../assets/bg745.jpg'
const ESOP = () => {
    return (
        <div >
            <Top5 bgi={bg745} col={"rgb(50,50,50,0.600)"} heading="Employee Stock Option Plan (ESOP)" text1="ESOP is an effective employee retention strategy with which a company provides stock options to its employees so that they stick around and remain motivated." text2="" />
            <Home5></Home5>
            <Home6></Home6>
        </div>
    )
}

export default ESOP

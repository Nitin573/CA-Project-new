import React from 'react'
import Top5 from '../Top/Top5'
import Home5 from "../Home5/Home5"
import Home6 from "./Home6"
import elegant from '../../assets/elegant.avif'
const Changes_to_LLP_Agreement = () => {
    return (
        <div padding="200px">
            <Top5 bgi={elegant} col={"rgb(200,200,200,0.100)"} heading={<h1 style={{ textAlign: "left", color: "black" }}>Change in LLP Agreement</h1>} text1={<h5 style={{ textAlign: "left", color: "black" }}>Add or remove clauses from your LLP agreement in just a few clicks!</h5>} text2={<h5 style={{ textAlign: "left", color: "black" }}>1. Expert assistance <br />
                2.Easy and Fast process <br /> 3.Completely online</h5>} />
            <Home5></Home5>
            <Home6></Home6>
        </div>
    )
}

export default Changes_to_LLP_Agreement

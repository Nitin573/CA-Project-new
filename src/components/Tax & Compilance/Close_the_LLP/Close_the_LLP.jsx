import React from 'react'
import Top5 from '../Top/Top5'
import Home5 from "../Home5/Home5"
import Home6 from "./Home6"
import bg112 from '../../assets/bg112.jpg'
const Close_the_LLP = () => {
  return (
    <div>
          <Top5 bgi={bg112} col={"rgb(20,20,20,0.500)"} heading="Closing a Limited Liability Partnership" text1="An LLP can be closed, if it has not commenced business or is not engaged in the activity of business for the last 1 year. The closure application needs to be filed with the mutual consent of all the partners of the firm." text2="" />
          <Home5></Home5>
          <Home6></Home6>
    </div>
  )
}

export default Close_the_LLP

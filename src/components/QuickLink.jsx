import React, { useState } from 'react'
import { Box, Select } from '@chakra-ui/react'
let links = [
    "Overview", "Documents Needed", "Steps", "Registeration Package", "Checklist", "Features", "Restriction", "Advantages"
    , "Why us?", "FAQ", "Partner Benifits"
]

export default function QuickLink() {


    const [active, setActive] = useState(0);



    return (
        <Box className='mobileSidebar' mt="50px">
            <Select
                w="80%" m="auto"
                onChange={(e) => {
                    let i = e.target.value;
                    setActive(i);
                    console.log(i)
                    window.scrollTo({
                        top: 1500 + i * 400,
                        left: 0,
                        behavior: 'smooth'
                    });
                }}
            >

                {
                    links.map((e, i) => (<option key={i}
                        style={{
                            color: active === i ? "white" : "black",
                            backgroundColor: i === active ? "rgba(0, 0, 119, 0.784)" : "rgba(1, 56, 78, 0.233)"
                        }}
                        value={i}
                    >{e}</option>))
                }


            </Select>
        </Box>
    )
}

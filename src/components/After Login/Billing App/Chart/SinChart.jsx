import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
// import faker from 'faker';
import { Box, VStack, HStack } from "@chakra-ui/react";
import { color } from 'framer-motion';
import { ResponsiveContainer } from 'recharts';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
);



const SinChart = (prop) => {
  const options = {
    fill: true,
    responsive: true,
    plugins: {
      legend: {
        position: "top as const",
      },
      title: {
        display: true,
        text: prop.title,
      },
    },
  };

  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', "August", "September", "October", "November", "December"];

  const data = {
    labels,
    datasets: [
      {
        label: prop.label,
        data: prop.data,
        borderColor: prop.bc,
        backgroundColor: prop.bgc,
        width: prop.wv,
        height: prop.hv,
        
      },

    ],
  };
  return (
    <ResponsiveContainer width="100%" height="100%">
    {/* <Box margin={"auto"} padding={"10px"} overflow={"hidden"}>

      <VStack margin={"auto"} width={prop.wv} height={prop.hv} padding="20px" overflow={"hidden"}> */}
        <Line options={options} data={data} overflow={"scroll"} />
      {/* </VStack>
      </Box> */}
    </ResponsiveContainer>
  );
}

export default SinChart


// application

{/* <Text>Dash Board</Text> */ }
{/* <HStack flexDirection={{ base: "column", md: "row", lg: "row" }}>
                            <HStack padding={"10px"}>
                                <Box padding={"10px"}>

                                    <HStack padding={"10px"} margin="auto">

                                        <Heading>Sale : </Heading>
                                        <Heading>0.00</Heading>

                                    </HStack>
                                    <SinChart title="Sale/Year" data={salesdata} label="Sale" bc="greenYellow" bgc="greenYellow" wv="500px" hv="400px" />
                                </Box>
                            </HStack>
                            <HStack padding={"10px"}>

                                <Box>
                                    <HStack margin="auto" padding={"10px"}>
                                        <Heading>Purchase :</Heading>
                                        <Heading>0.00</Heading>

                                    </HStack>
                                    <SinChart title="Purchase/Year" data={purchasedata} label="Purchase" bc="orange" bgc="orange" wv="450px" hv="400px" />
                                </Box>

                            </HStack>
                        </HStack> */}
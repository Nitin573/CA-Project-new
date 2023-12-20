
import React from 'react';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from 'recharts';



const Line_Chart = (props) => (

    <ResponsiveContainer width="90%" height="80%"
        
    >
        <LineChart
            // width={"500px"}
            // height={"300px"}
            data={props.data}
            margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
            }}
            
        >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey={props.name} />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey={props.v} stroke={props.col}  />
            {/* <Line type="monotone" dataKey="uv" stroke="#82ca9d" activeDot={{ r: 8 }}/> */}
        </LineChart>
    </ResponsiveContainer>
);

export default Line_Chart;



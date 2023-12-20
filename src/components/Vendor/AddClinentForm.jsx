// src/AddClientForm.js

import { Box, Button, FormControl, FormHelperText, Input, Label } from '@chakra-ui/react';
import axios from 'axios';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const AddClientForm = ({ onSubmit }) => {

    const { token } = useSelector((store)=> store.Signin)
    const tokenLocal = localStorage.getItem('token')
    console.log('local token',tokenLocal)

    const [clientData, setClientData] = useState({
        name: '',
        address: '',
        email: '',
        mobile_no: '',
        company_name: '',
    });

    const handleChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        setClientData({ ...clientData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const headers = {
            'token':`${tokenLocal}`
        }
        axios.post(`https://tax-service.onrender.com/client_register`,{headers}).
        then((res)=>{
            console.log(res.data)
        })
    };

    return (
        <div>
            <Link to={"/VendorAllClint"} >
                <Button bg={"blue.300"} m="20px auto">All Client +</Button>
            </Link>
            <h2>Add Client</h2>
            <Box width={"100%"} maxW={"500px"} m={"auto"} border={"2px solid skyblue"} p="10px" borderRadius={"10px"}>
                <FormControl>
                    <label>
                        Name:
                        <Input type="text" name="name" value={clientData.name} onChange={handleChange} />
                    </label>
                </FormControl>
                <FormControl>
                    <label>
                        Address:
                        <Input type="text" name="address" value={clientData.address} onChange={handleChange} />
                    </label>
                </FormControl>
                <FormControl>
                    <label>
                        Email:
                        <Input type="email" name="email" value={clientData.email} onChange={handleChange} />
                    </label>
                </FormControl>
                <FormControl>
                    <label>
                        Phone Number:
                        <Input type="tel" name="mobile_no" value={clientData.mobile_no} onChange={handleChange} />
                    </label>
                </FormControl>
                <FormControl>
                    <label>
                        Business:
                        <Input type="text" name="company_name" value={clientData.company_name} onChange={handleChange} />
                    </label>
                </FormControl>






                <Button type="submit" bg={"green.400"} m="20px auto"
                onClick={handleSubmit}
                >Add Client</Button>

            </Box>
        </div>
    );
};

export default AddClientForm;

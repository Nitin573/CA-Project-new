import { Button, Table, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

// ... necessary imports ...

const VendorAllClint = () => {
    const [clients, setClients] = useState([]);

    const { token } = useSelector((store) => store.Signin);

    const tokenLocal = localStorage.getItem('token');

    useEffect(() => {
        const headers = {
            'token': tokenLocal,
        };
        axios.get(`https://tax-service.onrender.com/vendor/getVendor`, { headers })
            .then((res) => {
                setClients(res.data);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);

    const handleLogOut = () => {
        // Implement your logout logic here
    };

    return (
        <div>
            <Link to="/AddClientForm">
                <Button colorScheme="green" m="20px auto">
                    Add New Client +
                </Button>
            </Link>
            <Button colorScheme="red" m="20px auto" onClick={handleLogOut}>
                Log Out
            </Button>
            <h1>Client Table</h1>
            <TableContainer p="20px">
                <Table width="100%" height="">
                    <Thead>
                        {/* ... table header ... */}
                    </Thead>
                    <Tbody>
                        {clients.map((client) => (
                            <Tr key={client.id}>
                                <Td>{client.name}</Td>
                                <Td>{client.address}</Td>
                                <Td>{client.email}</Td>
                                <Td>{client.phone_number}</Td>
                                <Td>{client.business}</Td>
                            </Tr>
                        ))}
                    </Tbody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default VendorAllClint;

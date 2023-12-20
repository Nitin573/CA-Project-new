// src/components/PaymentForm.js
import { Button, Input, VStack } from '@chakra-ui/react';
import React, { useState } from 'react';

const PaymentForm = ({ selectedPlan, onPayment }) => {
    const [cardNumber, setCardNumber] = useState('');
    const [expiration, setExpiration] = useState('');
    const [cvv, setCVV] = useState('');

    const handlePayment = () => {
        const paymentData = {
            plan: selectedPlan,
            cardNumber,
            expiration,
            cvv,
        };
        onPayment(paymentData);
    };

    return (
        <VStack w="80%" maxWidth="500px" className="payment-form" border={"1px solid black"} p={"10px"} borderRadius={"10px"}>
            <Input
                type="text"
                placeholder="Card Number"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
            />
            <Input
                type="text"
                placeholder="Expiration Date"
                value={expiration}
                onChange={(e) => setExpiration(e.target.value)}
            />
            <Input
                type="text"
                placeholder="CVV"
                value={cvv}
                onChange={(e) => setCVV(e.target.value)}
            />
            <Button onClick={handlePayment} bg={"green.500"}>Pay</Button>
        </VStack>
    );
};

export default PaymentForm;

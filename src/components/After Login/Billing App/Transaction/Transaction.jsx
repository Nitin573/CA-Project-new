import React, { useState } from 'react';
import SubscriptionPlan from './SubscriptionPlan';
import PaymentForm from './PaymentForm';
import { Flex, Select, Text, VStack } from '@chakra-ui/react';
import Slidebar from '../Slidebar/Slidebar';
import Company_name from '../Company_name/Company_name';

const subscriptionPlans = [
    {
        name: 'Basic Plan 1 Year',
        description: 'Access to basic features',
        price: 2900,
    },
    {
        name: 'Saver Plan 1 Year',
        description: 'Access to advanced features',
        price: 5499,
    },
    {
        name: 'Basic Plan 3 Year',
        description: 'Access to basic features',
        price: 3500,
    },
    {
        name: 'Saver Plan 3 Year',
        description: 'Access to advanced features',
        price: 8999,
    },
];

const Transaction = () => {
    const [selectedPlan, setSelectedPlan] = useState(subscriptionPlans[0]);
    const [paymentSuccessful, setPaymentSuccessful] = useState(false);
    const [price, setPrice] = useState(selectedPlan.price);
    const handleSelectPlan = (event) => {
        const selectedPrice = parseInt(event.target.value);

        const selectedPlanObject = subscriptionPlans.find(plan => plan.price === selectedPrice);
        setSelectedPlan(selectedPlanObject);
        setPrice(selectedPrice);
    };

    const handlePayment = (paymentData) => {
        setTimeout(() => {
            setPaymentSuccessful(true);
        }, 2000);
    };

    return (
        <>
            <Company_name />
            <Flex>
                <Slidebar />
                <VStack className="subscription-page" w="100%">
                    <h1>Choose a Subscription Plan</h1>
                    <Select placeholder='Select Plan' color={'black'} onChange={handleSelectPlan}>
                        {subscriptionPlans.map((plan, index) => (
                            <option
                                key={index}
                                value={plan.price}
                            > {plan.name}</option>
                        ))}
                    </Select>
                    <Text fontSize={"20px"} fontWeight="bold">Price: {selectedPlan.price || 0}</Text>

                    <div className="payment-section">
                        <h2>Payment Details</h2>
                        <PaymentForm
                            selectedPlan={selectedPlan}
                            onPayment={handlePayment}
                        />
                    </div>

                    {paymentSuccessful && (
                        <div className="confirmation-message">
                            <p>Payment Successful! You are now subscribed to {selectedPlan.name}.</p>
                        </div>
                    )}
                </VStack>
            </Flex>
        </>
    );
};

export default Transaction;
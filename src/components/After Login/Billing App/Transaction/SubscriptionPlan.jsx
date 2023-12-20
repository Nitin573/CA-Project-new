
import React from 'react';

const SubscriptionPlan = ({ plan, onSelectPlan }) => {
    return (
        <div className="subscription-plan" bg="blue.200">
            <h2>{plan.name}</h2>
            <p>{plan.description}</p>
            <button onClick={() => onSelectPlan(plan)}>Select Plan</button>
        </div>
    );
};

export default SubscriptionPlan;

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleDown, faArrowAltCircleUp } from '@fortawesome/free-solid-svg-icons';

const Arrow = () => {
    const [isUp, setIsUp] = useState(false);

    const handleClick = () => {
        setIsUp(!isUp);
    }

    const arrowIcon = isUp ? faArrowAltCircleDown : faArrowAltCircleDown;

    return (
        <FontAwesomeIcon
            icon={arrowIcon}
            size="2x"
            onClick={handleClick}
            style={{
                transition: 'transform 0.3s ease-in-out',
                transform: isUp ? 'rotate(-180deg)' : 'rotate(0deg)',
                height:"20px"
            }}
        />
    );
}

export default Arrow;

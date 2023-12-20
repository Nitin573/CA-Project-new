
import React, { useState } from 'react';
import { Box, Button, Text } from '@chakra-ui/react';

const Calculator = ({ onCalculate }) => {
  const [display, setDisplay] = useState('');

  const handleButtonClick = (value) => {
    setDisplay((prevDisplay) => prevDisplay + value);
  };

  const handleCalculate = () => {
    try {
      const result = eval(display);
      onCalculate(result);
      setDisplay(result);
    } catch (error) {
      // Handle calculation error
      console.error('Calculation error:', error);
    }
  };

  const handleClear = () => {
    setDisplay('');
  };

  return (
    <Box>
      <Text mb="2" fontSize="lg" fontWeight="bold">
        Calculator
      </Text>
      <Box mb="2" p="2" border="1px solid lightgray">
        <Text fontSize="md" fontWeight="bold" textAlign="right">
          {display}
        </Text>
      </Box>
      <Box>
        <Button onClick={() => handleButtonClick('1')}>1</Button>
        <Button onClick={() => handleButtonClick('2')}>2</Button>
        <Button onClick={() => handleButtonClick('3')}>3</Button>
        <Button onClick={() => handleButtonClick('+')}>+</Button>
      </Box>
      <Box mt="2">
        <Button onClick={() => handleButtonClick('4')}>4</Button>
        <Button onClick={() => handleButtonClick('5')}>5</Button>
        <Button onClick={() => handleButtonClick('6')}>6</Button>
        <Button onClick={() => handleButtonClick('-')}>-</Button>
      </Box>
      <Box mt="2">
        <Button onClick={() => handleButtonClick('7')}>7</Button>
        <Button onClick={() => handleButtonClick('8')}>8</Button>
        <Button onClick={() => handleButtonClick('9')}>9</Button>
        <Button onClick={() => handleButtonClick('*')}>*</Button>
      </Box>
      <Box mt="2">
        <Button onClick={() => handleButtonClick('0')}>0</Button>
        <Button onClick={() => handleButtonClick('.')}>.</Button>
        <Button onClick={handleClear}>C</Button>
        <Button onClick={handleCalculate}>=</Button>
        <Button onClick={() => handleButtonClick('/')}>/</Button>
      </Box>
    </Box>
  );
};

export default Calculator;

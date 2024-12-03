import React, { useState } from 'react';

const Calculator = () => {
  const [display, setDisplay] = useState('0');
  const [firstNumber, setFirstNumber] = useState(null);
  const [operation, setOperation] = useState(null);
  const [newNumber, setNewNumber] = useState(true);

  const handleNumber = (number) => {
    if (newNumber) {
      setDisplay(number);
      setNewNumber(false);
    } else {
      setDisplay(display === '0' ? number : display + number);
    }
  };

  const handleOperation = (op) => {
    setFirstNumber(parseFloat(display));
    setOperation(op);
    setNewNumber(true);
  };

  const handleEqual = () => {
    if (operation && firstNumber !== null) {
      const secondNumber = parseFloat(display);
      let result;

      switch (operation) {
        case '+':
          result = firstNumber + secondNumber;
          break;
        case '-':
          result = firstNumber - secondNumber;
          break;
        case '×':
          result = firstNumber * secondNumber;
          break;
        case '÷':
          result = firstNumber / secondNumber;
          break;
        default:
          return;
      }

      setDisplay(result.toString());
      setFirstNumber(null);
      setOperation(null);
      setNewNumber(true);
    }
  };

  const handleClear = () => {
    setDisplay('0');
    setFirstNumber(null);
    setOperation(null);
    setNewNumber(true);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <div className="mb-4 p-4 bg-gray-200 rounded text-right text-2xl font-mono">
          {display}
        </div>
        <div className="grid grid-cols-4 gap-2">
          <button onClick={handleClear} className="col-span-2 bg-red-500 text-white p-4 rounded hover:bg-red-600">
            Clear
          </button>
          <button onClick={() => handleOperation('÷')} className="bg-blue-500 text-white p-4 rounded hover:bg-blue-600">
            ÷
          </button>
          <button onClick={() => handleOperation('×')} className="bg-blue-500 text-white p-4 rounded hover:bg-blue-600">
            ×
          </button>
          {[7, 8, 9].map((num) => (
            <button
              key={num}
              onClick={() => handleNumber(num.toString())}
              className="bg-gray-300 p-4 rounded hover:bg-gray-400"
            >
              {num}
            </button>
          ))}
          <button onClick={() => handleOperation('-')} className="bg-blue-500 text-white p-4 rounded hover:bg-blue-600">
            -
          </button>
          {[4, 5, 6].map((num) => (
            <button
              key={num}
              onClick={() => handleNumber(num.toString())}
              className="bg-gray-300 p-4 rounded hover:bg-gray-400"
            >
              {num}
            </button>
          ))}
          <button onClick={() => handleOperation('+')} className="bg-blue-500 text-white p-4 rounded hover:bg-blue-600">
            +
          </button>
          {[1, 2, 3].map((num) => (
            <button
              key={num}
              onClick={() => handleNumber(num.toString())}
              className="bg-gray-300 p-4 rounded hover:bg-gray-400"
            >
              {num}
            </button>
          ))}
          <button onClick={handleEqual} className="bg-green-500 text-white p-4 rounded hover:bg-green-600">
            =
          </button>
          <button
            onClick={() => handleNumber('0')}
            className="col-span-2 bg-gray-300 p-4 rounded hover:bg-gray-400"
          >
            0
          </button>
          <button
            onClick={() => handleNumber('.')}
            className="bg-gray-300 p-4 rounded hover:bg-gray-400"
          >
            .
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
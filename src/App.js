import { useState, useCallback } from 'react';
import NumberInput from './components/NumberInput';
import './App.css';

function App() {
  const [numbers, setNumbers] = useState({
    num1: '',
    num2: '',
    sum: 0
  });

  const handleNumberChange = useCallback((field) => (value) => {
    setNumbers(prev => ({
      ...prev,
      [field]: value
    }));
  }, []);

  const calculateSum = useCallback(() => {
    const sum = Number(numbers.num1) + Number(numbers.num2);
    if (isNaN(sum)) {
      alert('Please enter valid numbers');
      return;
    }
    setNumbers(prev => ({ ...prev, sum }));
  }, [numbers.num1, numbers.num2]);

  const clearAll = useCallback(() => {
    setNumbers({
      num1: '',
      num2: '',
      sum: 0
    });
  }, []);

  return (
    <div className="App">
      <div className="calculator">
        <h1>Simple Sum Calculator</h1>
        <div className="input-group">
          <NumberInput
            value={numbers.num1}
            onChange={handleNumberChange('num1')}
            placeholder="Enter First Number"
          />
          <NumberInput
            value={numbers.num2}
            onChange={handleNumberChange('num2')}
            placeholder="Enter Second Number"
          />
        </div>
        <button onClick={calculateSum}>Add Numbers</button>
        <button onClick={clearAll}>Clear</button>
        <div className="result">
          <h2>Result: {numbers.sum}</h2>
        </div>
      </div>
    </div>
  );
}

export default App;

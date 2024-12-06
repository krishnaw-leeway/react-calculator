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
      <div className="calculator-container">
        <h1 className="calculator-title">Simple Sum Calculator</h1>
        <div className="calculator-body">
          <div className="input-group">
            <NumberInput
              value={numbers.num1}
              onChange={handleNumberChange('num1')}
              placeholder="Enter First Number"
              className="calculator-input"
            />
            <div className="operator">+</div>
            <NumberInput
              value={numbers.num2}
              onChange={handleNumberChange('num2')}
              placeholder="Enter Second Number"
              className="calculator-input"
            />
          </div>
          <div className="button-group">
            <button onClick={calculateSum} className="calculate-btn">Calculate Sum</button>
            <button onClick={clearAll} className="clear-btn">Clear All</button>
          </div>
          <div className="result">
            <h2>Result: <span className="result-value">{numbers.sum}</span></h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

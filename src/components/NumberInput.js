const NumberInput = ({ value, onChange, placeholder }) => (
  <input
    style={{ width: '100%' }}
    type="number"
    value={value}
    onChange={(e) => onChange(e.target.value)}
    placeholder={placeholder}
  />
);

export default NumberInput; 
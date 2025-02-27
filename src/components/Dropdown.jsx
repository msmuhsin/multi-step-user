import React from 'react';

const Dropdown = ({ options, value, onChange, label }) => {
  return (
    <div className="form-group">
      <label htmlFor="dropdown">{label}</label>
      <select 
        id="dropdown" 
        value={value} 
        onChange={onChange}
        className="form-control"
      >
        <option value="">-- Select a user --</option>
        {options.map(option => (
          <option key={option.id} value={option.id}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
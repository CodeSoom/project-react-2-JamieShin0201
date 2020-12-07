import React from 'react';

export default function TextField({
  label, type = 'text', name, value, onChange,
}) {
  function handleChange(event) {
    const { target } = event;
    onChange({ name, value: target.value });
  }

  return (
    <>
      <label htmlFor={name}>
        {label}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={handleChange}
      />
    </>
  );
}

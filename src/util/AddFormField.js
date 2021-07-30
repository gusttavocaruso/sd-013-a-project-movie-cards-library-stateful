import React from 'react';

export const inputField = (elemNames, type, value, onChange) => {
  const { title, prop, name } = elemNames;
  return (
    <label data-testid={ `${name}-input-label` } htmlFor={ `${name}}-input` }>
      { title }
      <input
        data-testid={ `${name}-input` }
        property={ prop }
        type={ type }
        value={ value }
        onChange={ onChange }
      />
    </label>
  );
};
export const selectField = (elemNames, value, onChange, options) => {
  const { title, prop, name } = elemNames;
  return (
    <label data-testid={ `${name}-input-label` } htmlFor={ `${name}}-input` }>
      { title }
      <select
        data-testid={ `${name}-input` }
        property={ prop }
        value={ value }
        onChange={ onChange }
      >
        {options.map((option, index) => (
          <option
            key={ `${name}-option${index}` }
            data-testid={ `${name}-option` }
            value={ option.value }
          >
            {option.name}
          </option>))}

      </select>
    </label>
  );
};

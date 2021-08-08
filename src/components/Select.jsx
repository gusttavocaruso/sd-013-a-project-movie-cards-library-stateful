import React from 'react';
import PropTypes from 'prop-types';

class Select extends React.Component {
  render() {
    const {
      labelDataType,
      labelText,
      htmlFor,
      value,
      onChange,
      optionDataType,
      selectDataType,
    } = this.props;

    return (
      <label
        data-testid={ labelDataType }
        htmlFor={ htmlFor }
        value={ value }
      >
        { labelText }
        <select
          data-testid={ selectDataType }
          name={ htmlFor }
          onChange={ onChange }
          value={ value }
        >
          <option value="" data-testid={ optionDataType }>Todos</option>
          <option value="action" data-testid={ optionDataType }>Ação</option>
          <option value="comedy" data-testid={ optionDataType }>Comédia</option>
          <option value="thriller" data-testid={ optionDataType }>Suspense</option>
        </select>
      </label>
    );
  }
}

const { string, func } = PropTypes;

Select.propTypes = {
  labelDataType: string,
  htmlFor: string,
  value: string,
  onChange: func,
  optionDataType: string,
  selectDataType: string,
}.isRequired;

export default Select;

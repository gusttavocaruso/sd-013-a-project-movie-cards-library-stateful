import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Select extends Component {
  render() {
    const {
      labelDataTestId,
      value,
      onChange,
      optionDataTestId,
      nome,
    } = this.props;
    return (
      <label
        data-testid={ labelDataTestId }
        value={ value }
        htmlFor={ nome }
      >
        Filtrar por gênero
        <select
          data-testid="select-input"
          onChange={ onChange }
          name={ nome }
          value={ value }
        >
          <option value="" data-testid={ optionDataTestId }>Todos</option>
          <option value="action" data-testid={ optionDataTestId }>Ação</option>
          <option value="comedy" data-testid={ optionDataTestId }>Comédia</option>
          <option value="thriller" data-testid={ optionDataTestId }>Suspense</option>
        </select>
      </label>
    );
  }
}

Select.propTypes = {
  labelDataTestId: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  optionDataTestId: PropTypes.string,
  name: PropTypes.func,
}.isRequired;

export default Select;

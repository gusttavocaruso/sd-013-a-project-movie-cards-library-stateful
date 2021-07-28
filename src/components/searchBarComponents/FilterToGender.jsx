import React from 'react';
import PropTypes from 'prop-types';

class FilterToGender extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label data-testid="select-input-label" htmlFor="select-form">
        Filtrar por gênero
        <select
          value={ value }
          onChange={ onChange }
          name=""
          id="select-form"
          data-testid="select-input"
        >
          <option
            data-testid="select-option"
            name="todos"
            id="todos"
            value=""
          >
            Todos
          </option>
          <option
            data-testid="select-option"
            name="acao"
            id="acao"
            value="action"
          >
            Ação
          </option>
          <option
            name="comedy"
            data-testid="select-option"
            id="comedy"
            value="comedy"
          >
            Comédia
          </option>
          <option
            name="suspense"
            data-testid="select-option"
            id="suspense"
            value="thriller"
          >
            Suspense
          </option>
        </select>
      </label>
    );
  }
}

FilterToGender.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

FilterToGender.defaultProps = {
  value: '',
  onChange: undefined,
};

export default FilterToGender;

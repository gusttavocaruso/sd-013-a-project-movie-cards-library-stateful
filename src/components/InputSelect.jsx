import React from 'react';
import PropTypes from 'prop-types';

class InputSelect extends React.Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <label htmlFor="select-add-movie" data-testid="genre-input-label">
        Gênero
        <select
          name="genre"
          id="select-add-movie"
          data-testid="genre-input"
          value={ value }
          onChange={ handleChange }
        >
          <option data-testid="genre-option" value="action"> Ação </option>
          <option data-testid="genre-option" value="comedy"> Comédia </option>
          <option data-testid="genre-option" value="thriller"> Suspense </option>
        </select>
      </label>
    );
  }
}

InputSelect.propTypes = {
  value: PropTypes.string,
  handleChange: PropTypes.func,
}.isRequired;

export default InputSelect;

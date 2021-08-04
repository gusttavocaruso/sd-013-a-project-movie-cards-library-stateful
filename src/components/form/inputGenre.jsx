import React from 'react';
import PropTypes from 'prop-types';

class InputGenre extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label data-testid="genre-input-label" htmlFor="genre-input">
        Gênero
        <select
          name="genre"
          value={ value }
          id="genre-input"
          onChange={ onChange }
          data-testid="genre-input"
        >
          <option value="action" data-testid="genre-option">Ação</option>
          <option value="comedy" data-testid="genre-option">Comédia</option>
          <option value="thriller" data-testid="genre-option">Suspense</option>
        </select>
      </label>
    );
  }
}

InputGenre.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
}.isRequired;

export default InputGenre;

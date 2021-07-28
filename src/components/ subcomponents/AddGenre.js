import React from 'react';
import PropTypes from 'prop-types';

class AddGenre extends React.Component {
  render() {
    const { value, handleChange } = this.props;

    return (
      <label htmlFor="add-genre" data-testid="genre-input-label">
        Gênero
        <select
          name="genre"
          id="add-genre"
          value={ value }
          data-testid="genre-input"
          onChange={ handleChange }
        >
          <option
            data-testid="genre-option"
            name="action"
            value="action"
          >
            Ação
          </option>

          <option
            data-testid="genre-option"
            name="comedy"
            value="comedy"
          >
            Comédia
          </option>

          <option
            data-testid="genre-option"
            name="thriller"
            value="thriller"
          >
            Suspense
          </option>
        </select>
      </label>
    );
  }
}

AddGenre.propTypes = {
  value: PropTypes.string,
  handleChange: PropTypes.func,
};

AddGenre.defaultProps = {
  value: '',
  handleChange: undefined,
};

export default AddGenre;

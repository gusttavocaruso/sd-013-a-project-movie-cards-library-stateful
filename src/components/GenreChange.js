import React from 'react';
import PropTypes from 'prop-types';

class GenreChange extends React.Component {
  render() {
    const { genre, onChange } = this.props;

    return (
      <label
        htmlFor="genre-change"
        data-testid="genre-input-label"
      >
        Gênero
        <select
          name="genre"
          id="genre-change"
          data-testid="genre-input"
          value={ genre }
          onChange={ onChange }
        >
          <option
            data-testid="genre-option"
            value="action"
          >
            Ação
          </option>
          <option
            data-testid="genre-option"
            value="comedy"
          >
            Comédia
          </option>
          <option
            data-testid="genre-option"
            value="thriller"
          >
            Suspense
          </option>
        </select>
      </label>
    );
  }
}

GenreChange.propTypes = {
  genre: PropTypes.string,
  onChange: PropTypes.func,
};

GenreChange.defaultProps = {
  genre: '',
  onChange: [],
};

export default GenreChange;

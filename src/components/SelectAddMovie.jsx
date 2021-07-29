import React from 'react';
import PropTypes from 'prop-types';

class SelectAddMovie extends React.Component {
  render() {
    const { genre, onSelectChange } = this.props;
    return (
      <section>
        <label htmlFor="select-add-movie" data-testid="genre-input-label">
          Gênero
          <select
            value={ genre }
            name="genre"
            id="select-add-movie"
            onChange={ onSelectChange }
            data-testid="genre-input"
          >
            <option data-testid="genre-option" value="action">Ação</option>
            <option data-testid="genre-option" value="comedy">Comédia</option>
            <option data-testid="genre-option" value="thriller">Suspense</option>
          </select>
        </label>
      </section>
    );
  }
}

SelectAddMovie.propTypes = {
  genre: PropTypes.string.isRequired,
  onSelectChange: PropTypes.func.isRequired,
};

export default SelectAddMovie;

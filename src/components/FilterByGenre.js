import React from 'react';
import PropTypes from 'prop-types';

class FilterByGenre extends React.Component {
  render() {
    const { selectedGenre, onSelectedGenreChange } = this.props;
    return (
      <label
        htmlFor="filter-genre"
        data-testid="select-input-label"
      >
        Filtrar por gênero
        <select
          id="filter-genre"
          value={ selectedGenre }
          onChange={ onSelectedGenreChange }
          data-testid="select-input"
        >
          <option
            value=""
            data-testid="select-option"
          >
            Todos
          </option>
          <option
            value="action"
            data-testid="select-option"
          >
            Ação
          </option>
          <option
            value="comedy"
            data-testid="select-option"
          >
            Comédia
          </option>
          <option
            value="thriller"
            data-testid="select-option"
          >
            Suspense
          </option>
        </select>
      </label>
    );
  }
}

FilterByGenre.propTypes = {
  selectedGenre: PropTypes.string,
  onSelectedGenreChange: PropTypes.func,
};

FilterByGenre.defaultProps = {
  selectedGenre: '',
  onSelectedGenreChange: [],
};

export default FilterByGenre;

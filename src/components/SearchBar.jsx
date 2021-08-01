import React from 'react';
import PropTypes from 'prop-types';
import SelectForm from './SelectForm';

class SearchBar extends React.Component {
  constructor() {
    super();

    this.state = {

    };
  }

  render() {
    const { searchText } = this.props;
    const { bookmarkedOnly } = this.props;
    const { onSearchTextChange } = this.props;
    const { onBookmarkedChange } = this.props;
    const { selectedGenre } = this.props;
    const { onSelectedGenreChange } = this.props;

    return (
      <form data-testid="search-bar-form">
        <label
          data-testid="text-input-label"
          htmlFor="inputText"
          name="Mostrar somente favoritos"
        >
          Inclui o texto:
          <input
            type="text"
            value={ searchText }
            onChange={ onSearchTextChange }
            data-testid="text-input"
            id="inputText"
          />
        </label>
        <label
          data-testid="checkbox-input-label"
          htmlFor="inputCheck"
          name="Mostrar somente favoritos"
        >
          Mostrar somente favoritos
          <input
            type="checkbox"
            checked={ bookmarkedOnly }
            onChange={ onBookmarkedChange }
            data-testid="checkbox-input"
            id="inputCheck"
          />
        </label>
        <SelectForm
          onSelectedGenreChange={ onSelectedGenreChange }
          selectedGenre={ selectedGenre }
        />
      </form>
    );
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
  bookmarkedOnly: PropTypes.bool.isRequired,
  onBookmarkedChange: PropTypes.func.isRequired,
  selectedGenre: PropTypes.string.isRequired,
  onSelectedGenreChange: PropTypes.func.isRequired,
};

export default SearchBar;

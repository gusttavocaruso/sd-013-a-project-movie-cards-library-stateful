import React from 'react';
import PropTypes from 'prop-types';
import Input from './Input';
import Select from './Select';

class SearchBar extends React.Component {
  render() {
    const {
      searchText,
      onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange,
      selectedGenre,
      onSelectedGenreChange,
    } = this.props;

    return (
      <form data-testid="search-bar-form">
        <Input
          labelDataType="text-input-label"
          htmlFor="searchText"
          labelText="Inclui o texto"
          inputDataType="text-input"
          value={ searchText }
          onChange={ onSearchTextChange }
        />
        <Input
          labelDataType="checkbox-input-label"
          htmlFor="bookmarkedOnly"
          labelText="Mostrar somente favoritos"
          inputDataType="checkbox-input"
          type="checkbox"
          checked={ bookmarkedOnly }
          onChange={ onBookmarkedChange }
        />

        <Select
          labelDataType="select-input-label"
          labelText="Filtrar por gênero"
          value={ selectedGenre }
          selectDataType="select-input"
          onChange={ onSelectedGenreChange }
          optionDataType="select-option"
          htmlFor="selectedGenre"
        />
      </form>
    );
  }
}

const { string, func, bool } = PropTypes;

SearchBar.propTypes = {
  searchText: string,
  onSearchTextChange: func,
  bookmarkedOnly: bool,
  onBookmarkedChange: func,
  selectedGenre: string,
  onSelectedGenreChange: func,
}.isRequired;

export default SearchBar;

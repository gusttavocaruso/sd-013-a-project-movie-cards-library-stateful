import React from 'react';
import PropTypes from 'prop-types';

import InputCheckbox from './Form/InputCheckbox';
import InputText from './Form/InputText';
import InputSelect from './Form/InputSelect';

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
        <InputText
          testId="text-input"
          name="searchText"
          value={ searchText }
          onChange={ onSearchTextChange }
        >
          Inclui o texto:
        </InputText>
        <InputCheckbox
          testId="checkbox-input"
          name="bookmarkedOnly"
          value={ bookmarkedOnly }
          onChange={ onBookmarkedChange }
        >
          Mostrar somente favoritos
        </InputCheckbox>
        <InputSelect
          testId="select-input"
          name="bookmarkedOnly"
          value={ selectedGenre }
          onChange={ onSelectedGenreChange }
          options={ [
            { text: 'Todos', value: '' },
            { text: 'Ação', value: 'action' },
            { text: 'Comédia', value: 'comedy' },
            { text: 'Suspense', value: 'thriller' },
          ] }
        >
          Filtrar por gênero
        </InputSelect>
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

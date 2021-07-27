import React, { Component } from 'react';
import { InputSearchBar } from './SearchBar_Input';

export class SearchBar extends Component {
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
        <InputSearchBar
          type="text"
          information={ {
            testId: { input: 'text-input', label: 'text-input-label' },
            inputName: 'searchText',
            textLabel: 'Inclui o texto',
            value: searchText,
            onChangeFunction: onSearchTextChange,
          } }
        />
        <InputSearchBar
          type="checkbox"
          information={ {
            testId: { input: 'checkbox-input', label: 'checkbox-input-label' },
            inputName: 'bookmarkedOnly',
            textLabel: 'Mostrar somente favoritos',
            value: bookmarkedOnly,
            onChangeFunction: onBookmarkedChange,
          } }
        />
        <InputSearchBar
          type="select"
          information={ {
            testId: { input: 'select-input', label: 'select-input-label' },
            inputName: 'selectedGenre',
            textLabel: 'Filtrar por gênero',
            value: selectedGenre,
            onChangeFunction: onSelectedGenreChange,
            options: [
              { value: '', text: 'Todos' },
              { value: 'action', text: 'Ação' },
              { value: 'comedy', text: 'Comédia' },
              { value: 'thriller', text: 'Suspense' },
            ],
          } }
        />
      </form>
    );
  }
}

export default SearchBar;

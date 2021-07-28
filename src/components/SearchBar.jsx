import React from 'react';
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
      <form data-testid='search-bar-form'>
        <InputText
          name='searchText'
          value={searchText}
          onChange={onSearchTextChange}
        >
          Inclui o texto:
        </InputText>
        <InputCheckbox
          name='bookmarkedOnly'
          value={bookmarkedOnly}
          onChange={onBookmarkedChange}
        >
          Mostrar somente favoritos
        </InputCheckbox>
        <InputSelect
          name='bookmarkedOnly'
          value={selectedGenre}
          onChange={onSelectedGenreChange}
          options={[
            { text: 'Todos', value: '' },
            { text: 'Ação', value: 'action' },
            { text: 'Comédia', value: 'comedy' },
            { text: 'Suspense', value: 'thriller' },
          ]}
        >
          Filtrar por gênero
        </InputSelect>
      </form>
    );
  }
}

export default SearchBar;

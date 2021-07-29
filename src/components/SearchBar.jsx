import React from 'react';
import PropTypes from 'prop-types';

// Consultado a sintaxe das props no repositório do Fedolfo, meus agradecimentos!
class SearchBar extends React.Component {
  render() {
    const { searchText, bookmarkedOnly, selectedGenre,
      onSearchTextChange, onBookmarkedChange, onSelectedGenreChange,
    } = this.props;
    return (
      <form className="formContainer" data-testid="search-bar-form">
        <label htmlFor="searchText" data-testid="text-input-label">
          Inclui o texto
          <input
            data-testid="text-input"
            id="searchText"
            type="text"
            name="searchText"
            onChange={ onSearchTextChange }
            value={ searchText }
          />
        </label>
        <label htmlFor="bookmarkedOnly" data-testid="checkbox-input-label">
          Mostrar somente favoritos
          <input
            type="checkbox"
            name="bookmarkedOnly"
            onChange={ onBookmarkedChange }
            checked
            data-testid="checkbox-input"
            id="bookmarkedOnly"
            value={ bookmarkedOnly }
          />
        </label>
        <label htmlFor="selectedGenre" data-testid="select-input-label">
          Filtrar por gênero
          <select
            data-testid="select-input"
            name="selectedGenre"
            id="selectedGenre"
            value={ selectedGenre }
            onChange={ onSelectedGenreChange }
          >
            <option data-testid="select-option" value="">Todos</option>
            <option data-testid="select-option" value="action">Ação</option>
            <option data-testid="select-option" value="comedy">Comédia</option>
            <option data-testid="select-option" value="thriller">Suspense</option>
          </select>
        </label>
      </form>
    );
  }
}

export default SearchBar;

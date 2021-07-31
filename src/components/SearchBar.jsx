import React, { Component } from 'react';

class SearchBar extends Component {
  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.props;

    return (
      <form className="form" data-testid="search-bar-form">
        <label data-testid="text-input-label" htmlFor="text-input">
          Inclui o texto:
          <input
            type="text"
            name="name"
            value={ searchText }
            onChange=""
            data-testid="text-input"
          />
        </label>

        <label htmlFor="checkbox-input" data-testid="checkbox-input-label">
          <input
            type="checkbox"
            name="Filmes favoritos"
            data-testid="checkbox-input"
            value={ selectedGenre }
            checked={ bookmarkedOnly }
            onChange=""
          />
          Mostrar somente favoritos
        </label>
      </form>
    );
  }
}

export default SearchBar;

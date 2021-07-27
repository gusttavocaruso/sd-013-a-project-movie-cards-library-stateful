// implement SearchBar component here
import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super();

    this.state = {
      searchText: '', // uma string
      //   onSearchTextChange: (), //uma callback
      bookmarkedOnly: true, // um boolean
      //   onBookmarkedChange: () , //uma callback
      // selectedGenre: '', // uma string
    //   onSelectedGenreChange: (),// uma callback
    };
  }

  onBookmarkedChange(event) {
    this.setState({ bookmarkedOnly: event.target.value });
  }

  onSearchTextChange(event) {
    this.setState({ searchText: event.target.value });
  }

  onSelectedGenreChange(event) {
    // this.setState({ bookmarkedOnly: event.target.value });
  }

  render() {
    return (
    //   <h1>Eu sou o searchbar</h1>
      <form data-testid="search-bar-form">

        <label htmlFor="text-input-label" data-testid="text-input-label">
          Inclui o texto:
          <input
            className="text-input-label"
            data-testid="text-input"
            type="text"
            // value="this.searchText"
            onChange="onSearchTextChange()"
          />
        </label>

        <label
          htmlFor="mostra-favoritos"
          data-testid="checkbox-input-label"
        >
          Somente Favoritos:
          <input
            className="mostra-favoritos"
            data-testid="select-input-label"
            type="checkbox"
            // checked = 'bookmarkedOnly()'
            onChange="onBookmarkedChange()"
          />
        </label>

        <label htmlFor="'escolhe-genero'">
          <select
            className="escolhe-genero"
            name=""
            id=""
            data-testid="select-input"
            onChange="onSelectedGenreChange()"
          // value='selectedGenre()'
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

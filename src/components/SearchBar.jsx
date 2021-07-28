// implement SearchBar component here
import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super();

    // this.onBookmarkedChange = this.bookmarkedOnly.bind(this);
    // this.onSearchTextChange = this.onSearchTextChange.bind(this);
    // this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '', 
    };
  }

    onBookmarkedChange = (event) => {
      // event.preventDefault();
      this.setState({ bookmarkedOnly: event.target.checked });
      // console.log(event.target.checked);
    }

    onSearchTextChange = (event) => {
      this.setState({ searchText: event.target.value });
      // console.log(event.target.value);
    }

    onSelectedGenreChange = (event) => {
      this.setState({ selectedGenre: event.target.value });
      // console.log(event.target.value);
    }

    render() {
      const { value, onChange, searchText } = this.props;
      // const {value} = this.props;
      return (
      //   <h1>Eu sou o searchbar</h1>
        <form data-testid="search-bar-form">

          <label htmlFor="text-input-label" data-testid="text-input-label">
            Inclui o texto:
            <input
              className="text-input-label"
              data-testid="text-input"
              type="text"
              value={ searchText }
              onChange={ this.props.onSearchTextChange }
            />
          </label>

          <label
            htmlFor="mostra-favoritos"
            data-testid="checkbox-input-label"
          >
            Mostrar somente favoritos
            <input
              className="mostra-favoritos"
              data-testid="checkbox-input"
              type="checkbox"
              checked={ this.props.bookmarkedOnly }
              onChange={ this.props.onBookmarkedChange }
            />
          </label>

          <label htmlFor='genre' data-testid="select-input-label">
            Filtrar por gênero
            <select
              className='genre'
              data-testid="select-input"
              onChange= {this.props.onSelectedGenreChange }
              value= {this.props.selectedGenre}
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

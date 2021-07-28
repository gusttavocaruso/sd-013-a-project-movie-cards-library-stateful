// implement SearchBar component here
import React, { Component } from 'react'

class SearchBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      
    }
  }
  
  render() {
    const {searchText,
      onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange,
      selectedGenre,
      onSelectedGenreChange} = this.props;
    return (
      <form data-testid="search-bar-form"> 
        <label data-testid="text-input-label">
          Inclui o texto:
          <input data-testid="text-input" 
            type="text" 
            value= { searchText }
            onChange={onSearchTextChange} 
          />
        </label>
        <label data-testid="checkbox-input-label">
          Mostrar somente favoritos
          <input data-testid="checkbox-input"
            type="checkbox" 
            checked={bookmarkedOnly}
            onChange={onBookmarkedChange} 
          />
        </label>
        <label data-testid="select-input-label">
          Filtrar por gênero
          <select data-testid="select-input"
            onChange = { onSelectedGenreChange } 
            value = { selectedGenre } >
            <option data-testid="select-option" value="">Todos</option>
            <option data-testid="select-option" value="action">Ação</option>
            <option data-testid="select-option" value="comedy">Comédia</option>
            <option data-testid="select-option" value="thriller">Suspense</option>
          </select>
        </label>
      </form >
    )
  }
}

export default SearchBar
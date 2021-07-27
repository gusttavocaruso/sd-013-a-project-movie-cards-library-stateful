// implement MovieLibrary component here
import React from 'react';
import SearchBar from './SearchBar';

class MovieLibrary extends React.Component {
  constructor() {
    super();

    this.state = {
      searchText: '',
      bookmarkedOnly: '',
      selectedGenre: '',
    }
  }
  onSearchTextChange = () => {

  }
  onBookmarkedChange = () => {

  }
  onSelectedGenreChange = () => {

  }
  render() {
    return (
      <div>
        <SearchBar searchText={ this.state.searchText } onSearchTextChange={ this.onSearchTextChange } 
        bookmarkedOnly={ this.state.bookmarkedOnly } onBookmarkedChange={ this.onBookmarkedChange }
        selectedGenre={ this.state.selectedGenre } onSelectedGenreChange={ this.onSelectedGenreChange }
        />
      </div>
    )
  }
}

export default MovieLibrary;

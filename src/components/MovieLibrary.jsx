// implement MovieLibrary component here
import React from 'react';
import AddMovie from './AddMovie';
import SearchBar from './SearchBar';

class MovieLibrary extends React.Component {
  constructor() {
    super();

    this.state = {
      searchText: '',
      bookmarkedOnly: '',
      selectedGenre: '',
    };
  }

  onSearchTextChange = () => {

  }

  onBookmarkedChange = () => {

  }

  onSelectedGenreChange = () => {

  }

  onClickAddMovie = () => {

  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <div>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.onSearchTextChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.onBookmarkedChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.onSelectedGenreChange }
        />
        <AddMovie onClick={ this.onClickAddMovie }/>
      </div>
    );
  }
}

export default MovieLibrary;

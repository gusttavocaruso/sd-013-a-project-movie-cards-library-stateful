// implement MovieLibrary component here
import React, { Component } from 'react';

import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    const { movies } = this.props;
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };
    this.changeHandle = this.changeHandle.bind(this);
  }

  changeHandle = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  filterBookmark(event) {
    if (event.bookmark === true) {

    }
  }
  

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;

    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText = { searchText }
          onSearchTextChange = { this.changeHandle }
          bookmarkedOnly = { bookmarkedOnly }
          onBookmarkedChange = { this.changeHandle }
          selectedGenre = { selectedGenre }
          onSelectedGenreChange = { this.changeHandle }
        />
        <MovieList movies={ movies } />
        <AddMovie />
      </div>
    );
  }
}

export default MovieLibrary;

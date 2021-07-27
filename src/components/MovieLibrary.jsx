import React, { Component } from 'react';
import AddMovie from './AddMovie';
import SearchBar from './SearchBar'

export default class MovieLibrary extends Component {
  constructor() {
    super();
    const { movies } = this.props;

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: movies,
    };
  }

  render() {
    return (
      <div>
        <SearchBar 
         searchText="uma string"
         onSearchTextChange="uma callback"
         bookmarkedOnly="um boolean"
         onBookmarkedChange="uma callback"
         selectedGenre="uma string"
         onSelectedGenreChange="uma callback"
         />
        <AddMovie onClick="uma callback"/>
      </div>

    );
  }
}

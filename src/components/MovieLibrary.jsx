import React from 'react';
import SearchBar from './SearchBar';

class MovieLibrary extends React.Component {
  constructor() {
    super();

    this.state {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: this.props.movies,
    }
  }
  render() {
    const { state } = this;
    const { movies } = this.props;
    return (
      <SearchBar searchText={this.state.searchText} />
    )
  }
}

export default MovieLibrary;

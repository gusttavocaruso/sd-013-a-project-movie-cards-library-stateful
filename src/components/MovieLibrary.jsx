import React from 'react';
import SearchBar from './SearchBar';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);

    const { movies } = this.props;

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };
  }

  onSearchTextChange(event) {
    this.setState({
      searchText: event.target.value,
    });
    console.log(this.state.searchText);
  }

  onBookmarkedChange(event) {
    this.setState({
      bookmarkedOnly: event.target.checked,
    });
    console.log(this.state);
  }

  onSelectedGenreChange(event) {
    this.setState({
      selectedGenre: event.target.value,
    });
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    return (
      <SearchBar
        searchText={ searchText }
        onSearchTextChange={ (event) => this.onSearchTextChange(event) }
        bookmarkedOnly={ bookmarkedOnly }
        onBookmarkedChange={ (event) => this.onBookmarkedChange(event) }
        selectedGenre={ selectedGenre }
        onSelectedGenreChange={ (event) => this.onSelectedGenreChange(event) }
      />
    );
  }
}

export default MovieLibrary;

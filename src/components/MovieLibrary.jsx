import React from 'react';
import MovieList from './MovieList';
import SearchBar from './SearchBar';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);

    const { movies } = this.props;

    this.state = {
      searchText: "",
      bookmarkedOnly: false,
      selectedGenre: "",
      movies: movies,
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange({ target }) {
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const { name } = target;
    this.setState({
      [name]: value
    });
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;

    return(
      <section>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.handleInputChange }
          onBookmarkedChange={ this.handleInputChange }
          bookmarkedOnly={ bookmarkedOnly }
          onSelectedGenreChange={ this.handleInputChange }
          selectedGenre={ selectedGenre }
        />
        <MovieList movies={ movies } />
      </section>
    );
  }
}

export default MovieLibrary;

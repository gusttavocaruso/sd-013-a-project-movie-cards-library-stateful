// implement MovieLibrary component here
import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import MovieList from './MovieList';

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

  onSearchTextChange = ({ target }) => {
    const { value } = target;
    this.setState({
      searchText: value,
    });
  }

  onSelectedGenreChange = ({ target }) => {
    const { value } = target;
    this.setState({
      selectedGenre: value,
    });
  }

  onBookmarkedChange = (event) => {
    if (event.target.checked === true) {
      this.setState({
        bookmarkedOnly: true,
      });
    } else {
      this.setState({
        bookmarkedOnly: false,
      });
    }
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    const filteredMovies = movies
      .filter(({ title, storyline, subtitle }) => title.toLowerCase()
        .includes(searchText.toLowerCase()) || storyline.toLowerCase()
        .includes(searchText.toLowerCase()) || subtitle.toLowerCase()
        .includes(searchText.toLowerCase()))
      .filter((movie) => (bookmarkedOnly ? movie.bookmarked
        === bookmarkedOnly : [...movies]))
      .filter((movie) => movie.genre.includes(selectedGenre));
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
        <MovieList movies={ filteredMovies } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieLibrary;

import React from 'react';
import PropTypes from 'prop-types';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

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
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
  }

  onSearchTextChange({ target }) {
    const { value } = target;
    this.setState({
      searchText: value,
    });
  }

  onBookmarkedChange({ target }) {
    if (target.checked === true) {
      this.setState({
        bookmarkedOnly: true,
      });
    }
  }

  onSelectedGenreChange({ target }) {
    const { value } = target;
    this.setState({
      selectedGenre: value,
    });
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    // função feita com base no código da Júlia
    const filterMovie = movies.filter(({ title, subtitle, storyline }) => (
      title.toLowerCase().includes(searchText.toLowerCase())
      || storyline.toLowerCase().includes(searchText.toLowerCase())
      || subtitle.toLowerCase().includes(searchText.toLowerCase())))
      .filter(({ bookmarked }) => (
        bookmarkedOnly ? bookmarked === bookmarkedOnly : true))
      .filter((movie) => movie.genre.includes(selectedGenre));

    return (
      <div>
        <SearchBar
          searchText={ searchText }
          bookmarkedOnly={ bookmarkedOnly }
          selectedGenre={ selectedGenre }
          onBookmarkedChange={ this.onBookmarkedChange }
          onSearchTextChange={ this.onSearchTextChange }
          onSelectedGenreChange={ this.onSelectedGenreChange }
        />
        <MovieList movies={ filterMovie } />
        <AddMovie />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieLibrary;

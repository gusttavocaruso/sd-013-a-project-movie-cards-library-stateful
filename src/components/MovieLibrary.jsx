import PropTypes from 'prop-types';
import React from 'react';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);

    const { movies } = props;

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };
  }

  onSearchTextChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  onSelectedGenreChange = ({ target }) => {
    const { name, value } = target;
    const { movies } = this.props;

    this.setState({
      [name]: value,
      movies: movies.filter((movie) => movie.genre === value || value === ''),
    });
  }

  onBookmarkedChange = ({ target }) => {
    const { name, value } = target;
    console.log(name, value);
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.onSearchTextChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.onBookmarkedChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.onSelectedGenreChange }
        />
        <MovieList
          movies={ movies }
          searchText={ searchText }
          onBookmarkedChange={ this.onBookmarkedChange }
          selectedGenre={ selectedGenre }
        />
        <AddMovie />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.shape({
    filter: PropTypes.func,
  }).isRequired,
};

export default MovieLibrary;

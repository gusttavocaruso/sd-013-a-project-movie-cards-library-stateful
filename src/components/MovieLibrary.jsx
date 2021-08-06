import React from 'react';
import PropTypes from 'prop-types';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
    };
  }

  handleChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  }

  addNewMovie = ({ title, subtitle, storyline, rating, genre, imagePath }) => {
    const newMovie = { title,
      subtitle,
      storyline,
      rating: parseFloat(rating),
      genre,
      imagePath,
    };

    this.setState(({ movies }) => ({ movies: [...movies, newMovie] }));
  }

  filterMovies(movieList) {
    const { bookmarkedOnly, selectedGenre, searchText } = this.state;

    const search = movieList.filter((movie) => {
      const check = (movie.title.toLowerCase().includes(searchText.toLowerCase())
      || movie.subtitle.toLowerCase().includes(searchText.toLowerCase())
      || movie.storyline.toLowerCase().includes(searchText.toLowerCase()));
      return check;
    });

    const favorite = bookmarkedOnly ? search.filter((movie) => movie.bookmarked) : search;

    const result = selectedGenre ? favorite
      .filter((movie) => movie.genre === selectedGenre) : favorite;
    return result;
  }

  render() {
    const { searchText,
      bookmarkedOnly,
      selectedGenre,
      movies,
    } = this.state;

    return (
      <div>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.handleChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.handleChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.handleChange }
        />
        <MovieList movies={ this.filterMovies(movies) } />
        <AddMovie onClick={ this.addNewMovie } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
};

export default MovieLibrary;

import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';
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

  handleFilterMovies = () => {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;

    let filterText = movies.filter((movie) => (
      movie.title.toLowerCase().includes(searchText.toLocaleLowerCase())
      || movie.subtitle.toLowerCase().includes(searchText.toLocaleLowerCase())
      || movie.storyline.toLowerCase().includes(searchText.toLocaleLowerCase())));

    if (bookmarkedOnly === true) {
      filterText = filterText.filter((movie) => movie.bookmarked === bookmarkedOnly);
    }
    if (selectedGenre !== '') {
      filterText = filterText.filter((movie) => movie.genre === selectedGenre);
    }
    return filterText;
  }

  handleChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  }

  handleClick = (movie) => {
    this.setState((prevState) => ({
      movies: [...prevState.movies, movie],
    }));
  }

  render() {
    const { handleChange, handleClick, handleFilterMovies } = this;
    const {
      searchText,
      bookmarkedOnly,
      selectedGenre,
      movies } = this.state;
    return (
      <section>
        <SearchBar
          onSearchTextChange={ handleChange }
          onBookmarkedChange={ handleChange }
          onSelectedGenreChange={ handleChange }
          searchText={ searchText }
          bookmarkedOnly={ bookmarkedOnly }
          selectedGenre={ selectedGenre }
          movies={ movies }
        />
        <MovieList movies={ handleFilterMovies() } />
        <AddMovie onClick={ handleClick } />
      </section>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.number,
    imagePath: PropTypes.string,
    bookmarked: PropTypes.bool,
    genre: PropTypes.string,
  })),
};

MovieLibrary.defaultProps = {
  movies: {},
};

export default MovieLibrary;

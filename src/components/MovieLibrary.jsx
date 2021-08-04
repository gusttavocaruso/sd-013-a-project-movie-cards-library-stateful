import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

class MovieLibrary extends React.Component {
  constructor(props) { // Pq colocar o props?
    super(props);
    const { movies } = this.props;
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };
  }

  handleChange = ({ target }) => {
    const valor = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [target.name]: valor,
    });
  }

  handleOnClick = (newMovie) => {
    this.setState((previusState) => ({
      movies: [...previusState.movies, newMovie],
    }));
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    return (
      <section>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.handleChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.handleChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.handleChange }
        />
        <MovieList
          movies={ movies.filter((movie) => movie.title.includes(searchText)
            || movie.subtitle.includes(searchText)
            || movie.storyline.includes(searchText))
            .filter((movie) => (bookmarkedOnly ? movie.bookmarked === true : movie))
            .filter((movie) => movie.genre.includes(selectedGenre)) }
        />
        <AddMovie onClick={ this.handleOnClick } />
      </section>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.string.isRequired,
};

export default MovieLibrary;

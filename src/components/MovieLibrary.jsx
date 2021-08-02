import React from 'react';
import PropTypes from 'prop-types';
import AddMovie from './AddMovie';
import MovieList from './MovieList';
import SearchBar from './SearchBar';

// faltando escrever as funções que irão modificar os states.
// não se preocupe com os erros bobos do npm :)

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

    this.handleChange = this.handleChange.bind(this);
    this.addMovieClick = this.handleChange.bind(this);
  }

  handleChange({ target }) { // te amo course <3
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  }

  addMovieClick(product) {
    this.setState((previousState) => ({
      movies: [...previousState.movies, product], // todos os filmes mais o atual
    }));
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    return (
      <>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.handleChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.handleChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.handleChange }
        />
        <MovieList
          movies={ movies
            .filter(({ title, storyline, subtitle }) => title.toLowerCase()
              .includes(searchText.toLowerCase())
              || storyline.toLowerCase().includes(searchText.toLowerCase())
              || subtitle.toLowerCase().includes(searchText.toLowerCase()))
            .filter(({ genre }) => genre.includes(selectedGenre))
            .filter(({ bookmarked }) => (bookmarkedOnly
              ? bookmarked === bookmarkedOnly : [...movies])) }
        />
        <AddMovie onCLick={ this.addMovieClick } />
      </>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieLibrary;

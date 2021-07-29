import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
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
    this.addProduct = this.addProduct.bind(this);
  }

  onSearchTextChange({ target }) {
    const { value } = target;
    this.setState({
      searchText: value,
    });
  }

  onBookmarkedChange(event) {
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

  onSelectedGenreChange({ target }) {
    const { value } = target;
    this.setState({
      selectedGenre: value,
    });
  }

  addProduct(product) {
    this.setState((previousState) => ({
      movies: [...previousState.movies, product],
    }));
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    const resultPesquisa = movies.filter((movie) => movie.title.includes(searchText))
      .filter((movie) => movie.genre.includes(selectedGenre))
      .filter((movie) => (bookmarkedOnly ? movie.bookedmarked
         === bookmarkedOnly : true));

    return (
      <section>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.onSearchTextChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.onBookmarkedChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.onSelectedGenreChange }
        />
        <MovieList movies={ resultPesquisa } />
        <AddMovie onClick={ this.addProduct } />
      </section>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.Object).isRequired,
};

export default MovieLibrary;

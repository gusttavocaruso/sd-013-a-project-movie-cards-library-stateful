import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
    };
  }

  onClick = () => {
    console.log('deu certo');
  }

  handleSearch = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
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
          bookmarkedOnly={ bookmarkedOnly }
          selectedGenre={ selectedGenre }
          onSearchTextChange={ this.handleSearch }
          onBookmarkedChange={ this.handleSearch }
          onSelectedGenreChange={ this.handleSearch }
        />
        <MovieList
          movies={ movies
            .filter((movie) => (bookmarkedOnly === false
              ? movie : movie.bookmarked === bookmarkedOnly))
            .filter((movie) => (selectedGenre === ''
              ? movie : movie.genre === selectedGenre))
            .filter((movie) => movie.title.includes(searchText)
              || movie.subtitle.includes(searchText)
              || movie.storyline.includes(searchText)) }
        />
        <AddMovie onClick={ this.onClick } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.string.isRequired,
};

export default MovieLibrary;

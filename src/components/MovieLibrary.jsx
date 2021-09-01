import React, { Component } from 'react';
import PropTypes from 'prop-types';

import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);

    const { movies } = this.props;

    this.onClick = this.onClick.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movieList: movies,
    };
  }

  // A função handleChange foi extraida do matarial de estudo da Trybe
  handleChange({ target }) {
    const { id } = target;

    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [id]: value,
    });
    // console.log(id);

    const { movieList } = this.state;
    const newList = movieList;
    const { movies } = this.props;
    if (id === 'bookmarkedOnly' && value === true) {
      this.setState({
        movieList: newList.filter((movie) => movie.bookmarked),
      });
    } else {
      this.setState({
        movieList: movies,
      });
    }
    if (id !== 'bookmarkedOnly' && value !== '') {
      this.searchFilme(value);
      // this.setState({
      //   movieList: newList.filter((movie) => {
      //     let search = false;
      //     if (movie.title.includes(value)) search = true;
      //     if (movie.subtitle.includes(value)) search = true;
      //     if (movie.storyline.includes(value)) search = true;
      //     if (movie.genre.includes(value)) search = true;
      //     return search;
      //   }),
      // });
    }
    // console.log(value);
  }

  onClick(movie) {
    console.log(movie);
    const { movies } = this.props;
    const newList = movies.slice();
    newList.push(movie);
    this.setState({
      movieList: newList,
    });
  }

  searchFilme = (value) => {
    const { movieList } = this.state;
    const newList = movieList;
    this.setState({
      movieList: newList.filter((movie) => {
        let search = false;
        if (movie.title.includes(value)) search = true;
        if (movie.subtitle.includes(value)) search = true;
        if (movie.storyline.includes(value)) search = true;
        if (movie.genre.includes(value)) search = true;
        return search;
      }),
    });
  }

  render() {
    const { movieList, searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.handleChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.handleChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.handleChange }
        />
        <MovieList movies={ movieList } />
        <AddMovie onClick={ this.onClick } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(Object).isRequired,
};

export default MovieLibrary;

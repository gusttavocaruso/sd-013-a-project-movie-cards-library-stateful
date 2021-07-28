// implement MovieLibrary component here
import React from 'react';
import PropTypes from 'prop-types';
import MovieList from './MovieList';
import SearchBar from './SearchBar';

import AddMovie from './AddMovie';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);

    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.onSubmitForm = this.onSubmitForm.bind(this);
    this.onFilter = this.onFilter.bind(this);

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
      filterdList: props.movies,
    };
  }

  onFilter() {
    const { searchText } = this.state;
    this.setState((estadoAnterior) => {
      const filterdList = estadoAnterior.movies.filter((movie) => (
        movie.title.includes(searchText)
      ));
      return {
        movies: filterdList,
      };
    });
  }

  onSearchTextChange(event) {
    this.setState({
      searchText: event.target.value,
    });
    // this.onFilter();
  }

  onBookmarkedChange(event) {
    this.setState({
      bookmarkedOnly: event.target.checked,
    });
  }

  onSelectedGenreChange(event) {
    this.setState({
      selectedGenre: event.target.value,
    });
  }

  onSubmitForm(event, movie) {
    event.preventDefault();
    this.setState((estadoAnterior) => ({
      movies: [...estadoAnterior.movies, movie],
    }));
  }

  render() {
    const {
      searchText,
      bookmarkedOnly,
      selectedGenre,
      movies,
    } = this.state;

    const {
      onSearchTextChange,
      onBookmarkedChange,
      onSelectedGenreChange,
      onSubmitForm,
    } = this;

    console.log(this.state);

    return (
      <>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ onSearchTextChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ onBookmarkedChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ onSelectedGenreChange }
        />
        <MovieList
          movies={ movies }
          searchText={ searchText }
          bookmarkedOnly={ bookmarkedOnly }
          selectedGenre={ selectedGenre }
        />
        <AddMovie onClick={ onSubmitForm } />
      </>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
};

export default MovieLibrary;

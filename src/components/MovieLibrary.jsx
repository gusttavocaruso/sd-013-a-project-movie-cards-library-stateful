import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
      backupMovies: props.movies,
    };
  }

  filterMovies = () => {
    const { searchText, bookmarkedOnly, selectedGenre, backupMovies } = this.state;

    if (searchText !== '') {
      this.setState({ movies: backupMovies });
      this.setState((prevState) => ({ movies: prevState.movies.filter((m) => (
        m.title.toLowerCase().includes(searchText.toLowerCase())
        || m.subtitle.toLowerCase().includes(searchText.toLowerCase())
        || m.storyline.toLowerCase().includes(searchText.toLowerCase())
      )),
      }));
    }

    if (bookmarkedOnly) {
      this.setState({ movies: backupMovies });
      this.setState((prevState) => (
        { movies: prevState.movies.filter((m) => m.bookmarked) }
      ));
    }

    if (selectedGenre !== '') {
      this.setState({ movies: backupMovies });
      this.setState((prevState) => (
        { movies: prevState.movies.filter((m) => m.genre === selectedGenre) }
      ));
    }

    if (searchText === '' && !bookmarkedOnly && selectedGenre === '') {
      this.setState({ movies: backupMovies });
    }
  }

  handleChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
    });

    this.setState({ [name]: value }, () => this.filterMovies());
  }

  addMov = (newMovie) => {
    const { movies } = this.props;
    const { backupMovies } = this.state;

    this.setState({
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: [...movies, newMovie],
      backupMovies: [...backupMovies, newMovie],
    });
    // Se usar push() ou shift() direto no movies vai alterar o array original e quebrar o teste.
    // Tem que criar uma cópia do array com map ou spread e depois adicionar o novo filme nessa cópia.
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    const { handleChange, addMov } = this;
    return (
      <>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ handleChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ handleChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ handleChange }
        />
        <MovieList movies={ movies } />
        <AddMovie onClick={ addMov } />
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

import React, { Component } from 'react';
import AddMovie from './AddMovie';
import MovieList from './MovieList';
import SearchBar from './SearchBar';

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
  }

  // filterMovies = () => {
  //   const { movies, selectedGenre, searchText } = this.state;
  //   const filted = movies.filter((movie) => {
  //     movie.bookmarkedOnly === true
  //     || movie.genre.includes(selectedGenre)
  //     || movie.title.includes(searchText)
  //     || movie.subtitle.includes(searchText)
  //     || movie.storyline.includes(searchText)
  //   });
  //   console.log(filted);
  //   this.setState({
  //     [movies]: filted,
  //   });
  // }

  handleChange = ({ target }) => {
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
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.handleChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.handleChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.handleChange }
        />
        <AddMovie />
        <MovieList movies={ movies } />
      </div>
    );
  }
}

export default MovieLibrary;

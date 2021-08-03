import React from 'react';
import SearchBar from './SearchBar';
import data from '../data';
import AddMovie from './AddMovie';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: data,
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleClick = (movie) => {
    this.setState((prevState) => ({
      movies: [...prevState.movies, movie],
    }));
  }

  // onBookmarkedChange = (event) => {
  //   this.setState({
  //     bookmarkedOnly: event.target.value,
  //   });
  // }

  // onSelectedGenreChange = (event) => {
  //   this.setState({
  //     selectedGenre: event.target.value,
  //   });
  // }

  render() {
    const { handleChange, handleClick } = this;
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
        <AddMovie onClick={ handleClick } />
      </section>
    );
  }
}

export default MovieLibrary;

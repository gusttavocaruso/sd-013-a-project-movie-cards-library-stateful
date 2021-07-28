// implement MovieLibrary component here
import React from 'react';
import MovieList from './MovieList';
import AddMovie from './AddMovie';
import SearchBar from './SearchBar';
import movies from '../data';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: this.props.movies,
    };
  }

  onSearchTextChange = ({ target }) => {
    const { value } = target;
    this.setState({
      searchText: value,
    });
  }

  onBookmarkedChange = ({ target }) => {
    const { checked } = target;
    this.setState({
      bookmarkedOnly: checked,
    });
  }

  onSelectedGenreChange = ({ target }) => {
    const { value } = target;
    this.setState({
      selectedGenre: value,
    });
  }

  onClickAddMovie = (movie) => {
    this.setState({
      movies: this.state.movies.concat([movie]),
    });
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <div>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.onSearchTextChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.onBookmarkedChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.onSelectedGenreChange }
        />
        <MovieList movies={ this.state.movies } searchText={ searchText }
          bookmarkedOnly= { bookmarkedOnly } selectedGenre={ selectedGenre }/>
        <AddMovie onClick={ this.onClickAddMovie }/>
      </div>
    );
  }
}

export default MovieLibrary;

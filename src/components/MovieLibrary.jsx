import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

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
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(event) {
    const { name } = event.target;
    const value = event.target.type === 'checkbox'
      ? event.target.checked : event.target.value;
    this.setState({
      [name]: value,
    });
  }

  handleClick(movieObject) {
    const { movies } = this.state;
    this.setState({
      movies: [...movies, movieObject],
    });
  }

  searchByText = () => {
    const { searchText, movies } = this.state;
    const searchLower = searchText.toLowerCase();
    const filteredByText = movies.filter((movie) => (searchText
      ? movie.title.toLowerCase().includes(searchLower)
      || movie.subtitle.toLowerCase().includes(searchLower)
      || movie.storyline.toLowerCase().includes(searchLower) : movies));

    return filteredByText;
  }

  searchByBookmarked = () => {
    const { bookmarkedOnly } = this.state;
    const filteredList = this.searchByText();
    return filteredList.filter((item) => (
      bookmarkedOnly ? item.bookmarked === true : filteredList));
  }

  searchByGenre = () => {
    const { selectedGenre } = this.state;
    const filteredList = this.searchByBookmarked();
    return filteredList.filter((item) => (
      selectedGenre ? item.genre === selectedGenre : filteredList));
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
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
        <MovieList movies={ this.searchByGenre() } />
        <AddMovie onClick={ this.handleClick } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieLibrary;

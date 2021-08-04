import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

class MovieLibrary extends React.Component {
  constructor(props) {
    super();
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
      choseMovies: [...props.movies],
    };
  }

  onSearchTextChange({ target }) {
    this.setState({
      searchText: target.value,
    });
  }

  onBookmarkedChange({ target }) {
    this.setState({
      bookmarkedOnly: target.checked,
    });
  }

  onSelectedGenreChange({ target }) {
    this.setState({
      selectedGenre: target.value,
    });
  }

  selectedMovies = (event) => {
    const { movies } = this.state;
    this.setState({
      choseMovies: movies.filter((movie) => {
        const byTitle = movie.title.toLowerCase().includes(event);
        const bySubtitle = movie.subtitle.toLowerCase().includes(event);
        const byStoryline = movie.storyline.toLowerCase().includes(event);
        return byTitle || bySubtitle || byStoryline;
      }),
    });
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, choseMovies } = this.state;
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
        <MovieList movies={ choseMovies } />
        <AddMovie />
      </div>
    );
  }
}
MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};
export default MovieLibrary;

// Questões referentes a este arquivo feitas com ajuda de Adriana da turma 13, tribo a.

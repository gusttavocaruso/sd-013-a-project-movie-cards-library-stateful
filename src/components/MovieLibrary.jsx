import React from 'react';
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
      movies: movies,
    }

    this.handleChange = this.handleChange.bind(this);
    this.addMovieHandleClick = this.addMovieHandleClick.bind(this);
    this.moviesFilter = this.moviesFilter.bind(this);
  }

  moviesFilter() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;

    return movies
      .filter(({ title, subtitle, storyline }) => { // Filtro da barra de busca
        const filterByTitle = title.toUpperCase().includes(searchText.toUpperCase());
        const filterBySinopsis = subtitle.toUpperCase().includes(searchText.toUpperCase());
        const filterByStoryline = storyline.toUpperCase().includes(searchText.toUpperCase());

        return filterByTitle || filterBySinopsis || filterByStoryline;
      })
      .filter(({ bookmarked }, _index, lastFilteredMovies) => ( // Filtro dos favoritos
        bookmarkedOnly ? bookmarked === bookmarkedOnly : lastFilteredMovies
      ))
      .filter(({ genre }, _index, lastFilteredMovies) => ( // Filtro do gênero
        selectedGenre !== '' ? selectedGenre === genre : lastFilteredMovies
      ));
  }

  addMovieHandleClick(state) {
    const { movies } = this.state;

    this.setState({
      movies: [...movies, state]
    })
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    const filteredMovies = this.moviesFilter();

    return(
      <section>
        <SearchBar 
          searchText={ searchText } 
          onSearchTextChange={ this.handleChange } 
          bookmarkedOnly={ bookmarkedOnly } 
          onBookmarkedChange={ this.handleChange } 
          selectedGenre={ selectedGenre } 
          onSelectedGenreChange={ this.handleChange } 
        />
        <MovieList movies={ filteredMovies } />
        <AddMovie onClick={ this.addMovieHandleClick } />
      </section>
    );
  }
}

export default MovieLibrary;
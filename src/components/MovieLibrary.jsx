// implement MovieLibrary component here
import React from 'react';
import AddMovie from './AddMovie';
import MovieList from './MovieList';
import SearchBar from './SearchBar';

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

        this.onSearchTextChange = this.onSearchTextChange.bind(this);
        this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
        this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
        this.onMoviesSearched = this.onMoviesSearched.bind(this);
        this.addMovieToList = this.addMovieToList.bind(this);
      }
      onSearchTextChange(event) {
        this.setState({
          searchText: event.target.value,
        });
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

  onMoviesSearched() {
    const { movies, bookmarkedOnly, selectedGenre, searchText } = this.state;

    let filteredMoviesList = movies;

    if (bookmarkedOnly) {
      filteredMoviesList = movies.filter((movie) => movie.bookmarked);
    }

    if (selectedGenre !== '') {
      filteredMoviesList = movies.filter((movie) => movie.genre === selectedGenre);
    }

    if (searchText !== '') {
      filteredMoviesList = movies.filter((movie) => {
        return movie.title.toLowerCase().includes(searchText.toLocaleLowerCase())
        || movie.subtitle.toLowerCase().includes(searchText.toLocaleLowerCase())
        || movie.storyline.toLowerCase().includes(searchText.toLocaleLowerCase());
      });
    }

    return filteredMoviesList;
  }

  addMovieToList(addedMovie) {
    const { movies } = this.state;
    this.setState({
      movies: [...movies, addedMovie],
    });
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    return (

      <main>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ (event) => this.onSearchTextChange(event) }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ (event) => this.onBookmarkedChange(event) }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ (event) => this.onSelectedGenreChange(event) }
        />
        <MovieList
          movies={ this.onMoviesSearched() }
        />
        <AddMovie onClick={ this.addMovieToList } />
      </main>
    );
  }
}

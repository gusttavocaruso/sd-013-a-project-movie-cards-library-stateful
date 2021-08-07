import React from 'react';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movieList } = this.state;
    return (
      <div>
        <h2> Minha incrível Biblioteca de Filmes </h2>
        <SearchBar
          searchText={ searchText }
          bookmarkedOnly={ bookmarkedOnly }
          selectedGenre={ selectedGenre }
          onSearchTextChange={ this.handleChange }
          onBookmarkedChange={ this.handleChange }
          onSelectedGenreChange={ this.handleChange }
        />
        <MovieList movies={ movieList } />
        <AddMovie />
      </div>
    );
  }
}

export default MovieLibrary;

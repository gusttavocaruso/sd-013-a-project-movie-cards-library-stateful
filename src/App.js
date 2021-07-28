import React from 'react';
import './App.css';
import Header from './components/Header';
import movies from './data';
import MovieList from './components/MovieList';
import SearchBar from './components/SearchBar';
import AddMovie from './components/AddMovie';

function App() {
  return (
    <div className="App">
      <Header />
      <SearchBar
        searchText
        onSearchTextChange
        bookmarkedOnly
        onBookmarkedChange
        selectedGenre
        onSelectedGenreChange
      />
      <MovieList movies={ movies } />
      <AddMovie onClick />
    </div>
  );
}

export default App;

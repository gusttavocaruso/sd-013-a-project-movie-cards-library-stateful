import React from 'react';
import Header from './components/Header';
import './App.css';
import AddMovie from './components/AddMovie';
import SearchBar from './components/SearchBar';
import MovieLibrary from './components/MovieLibrary';
import movies from './data';

function App() {
  return (
    <div className="App">
      <Header />
      <SearchBar />
      <MovieLibrary movies={ movies } />
      <AddMovie onClick={ () => {} } />
    </div>
  );
}

export default App;

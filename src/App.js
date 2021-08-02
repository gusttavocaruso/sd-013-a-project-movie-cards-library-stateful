import React from 'react';
import Header from './components/Header';
import MovieLibrary from './components/MovieLibrary';
import SearchBar from './components/SearchBar';
import data from './data';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <MovieLibrary movies={ data } />
      <SearchBar />
    </div>
  );
}

export default App;

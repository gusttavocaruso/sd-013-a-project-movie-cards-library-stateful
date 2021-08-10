import React from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import AddMovie from './components/AddMovie';
// import MovieList from './components/MovieList';
import './App.css';
// import data from './data';

function App() {
  return (
    <div className="App">
      <Header />
      <SearchBar />
      {/* <MovieList /> */}
      <AddMovie />
      {/* <MovieLibrary movies= { data } /> */}
    </div>
  );
}

export default App;

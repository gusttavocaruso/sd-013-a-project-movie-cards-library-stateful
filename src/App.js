import React from 'react';
import Header from './components/Header';
import movies from './data';
// import MovieList from './components/MovieList';
// import AddMovie from './components/AddMovie';
import MovieLibrary from './components/MovieLibrary';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      {/* <MovieList movies={ movies } sardinha={ movies } />
      <AddMovie movies={ movies } /> */}
      <MovieLibrary movies={ movies } />
    </div>
  );
}

export default App;

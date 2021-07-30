import React from 'react';
import Header from './components/Header';
import AddMovies from './components/AddMovie';
// import MovieCard from './components/MovieCard';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <AddMovies />
      {/* <MovieCard /> */}
    </div>
  );
}

export default App;

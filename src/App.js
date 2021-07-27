import React from 'react';
import './App.css';

import movies from './data';

import Header from './components/Header';
import MovieList from './components/MovieList';

function App() {
  return (
    <div className="App">
      <Header />
      <h1 className="result">
        {' '}
        <span className="genre">Genre:</span>
        Anime
        {' '}
        <hr className="division" />
        {' '}
        Action
        {' '}
      </h1>
      <MovieList movies={ movies } />
    </div>
  );
}

export default App;

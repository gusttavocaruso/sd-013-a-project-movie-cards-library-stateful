import React from 'react';
import Header from './components/Header';
import './App.css';
import MovieLibrary from './components/MovieLibrary';
import movieList from './data';

function App() {
  return (
    <div className="App">
      <Header />
      <MovieLibrary movies={ movieList } />
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import AddMovie from './components/AddMovie';
import Header from './components/Header';
import MovieList from './components/MovieList';
import movies from './data';

function App() {
  return (
    <div className="App">
      <Header />
      <MovieList movies={ movies } />
      <AddMovie />
    </div>
  );
}

export default App;

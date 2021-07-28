import React from 'react';
import Header from './components/Header';
import './App.css';
import AddMovie from './components/AddMovie';
import MovieList from './components/MovieList';

function App() {
  return (
    <div className="App">
      <Header />
      <AddMovie />
      <MovieList />
    </div>
  );
}

export default App;

import React from 'react';
import movies from './data';
import Header from './components/Header';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <MovieLibrary movies
    </div>
  );
}

export default App;

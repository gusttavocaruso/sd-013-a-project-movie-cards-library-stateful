// Projeto realizado com a colcaboração dos meus colegas Júlia Oughton Baptista, Vinicius Dionysio e Walace Nascimento

import React from 'react';
import Header from './components/Header';
import MovieLibrary from './components/MovieLibrary';
import data from './data';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <MovieLibrary movies={ data } />
    </div>
  );
}

export default App;

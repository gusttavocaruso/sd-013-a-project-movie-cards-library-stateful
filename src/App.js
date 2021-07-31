import React from 'react';
import Header from './components/Header';
import './App.css';
import movies from './data';
import SearchBar from './components/SearchBar';
import MovieLibrary from './components/MovieLibrary';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <SearchBar />
        <MovieLibrary movies={ movies } />
      </div>
    );
  }
}

export default App;

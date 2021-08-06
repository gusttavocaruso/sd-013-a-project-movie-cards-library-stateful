import React from 'react';
import Header from './components/Header';
import './App.css';
import MovieLibrary from './components/MovieLibrary';
import data from './data';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { movies: data };
  }

  render() {
    const { movies } = this.state;
    return (
      <div>
        <Header />
        <MovieLibrary movies={ movies } />
      </div>
    );
  }
}

export default App;

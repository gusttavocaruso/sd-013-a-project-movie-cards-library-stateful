import React from 'react';
import Header from './components/Header';
import './App.css';
/* import MovieList from './components/MovieList'; */
/* import movies from './data'; */
/* import SearchBar from './components/SearchBar'; */
import AddMovie from './components/AddMovie';

class App extends React.Component {
  luizito = () => {
    console.log('ola');
  }

  render() {
    return (
      <div className="App">
        <Header />
        <AddMovie />
      </div>
    );
  }
}

export default App;

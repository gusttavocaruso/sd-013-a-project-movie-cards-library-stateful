import React from 'react';
import Header from './components/Header';
import './App.css';
import SearchBar from './components/SearchBar';

class App extends React.Components {
  render() {
    return (
      <div className="App">
        <Header />
        <SearchBar />
      </div>
    );
  }
}

export default App;

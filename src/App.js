import React from 'react';
import Header from './components/Header';
import './App.css';

import SearchBar from './components/SearchBar';

function App() {
  return (
    <div className="App">
      <Header />
      <SearchBar
        searchText=""
        onSearchTextChange="callback"
        bookmarkedOnly="false"
        onBookmarkedChange=""
        onSelectedGenreChange="callback"
      />
    </div>
  );
}

export default App;

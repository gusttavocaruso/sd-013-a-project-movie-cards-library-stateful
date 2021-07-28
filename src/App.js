import React from 'react';
import Header from './components/Header';
import './App.css';

import SearchBar from './components/SearchBar';

function App() {
  return (
    <div className="App">
      <Header />
      <SearchBar
        searchText="something"
        // onSearchTextChange="callback"
        // bookmarkedOnly="false"
        // onBookmarkedChange=""
        // selectedGenre=""
        // onSelectedGenreChange="callback"
      />
    </div>
  );
}

export default App;

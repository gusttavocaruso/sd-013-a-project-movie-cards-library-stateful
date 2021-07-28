// implement SearchBar component here
import React from 'react';

class SearchBar extends React.Component {
  render() {
    return (
      <div className="contatiner-searchbar">
        <input type="text" name="filtro" id="filtro" />
      </div>
    );
  }
}

export default SearchBar;

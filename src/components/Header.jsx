import React from 'react';

import '../styles/Header.css';

class Header extends React.Component {
  render() {
    return (
      <header>
        <img className="logo" src="images/logo.svg" alt="logo" />
        <h1 className="mcl-title">Movie Cards Library</h1>
        <input
          className="search-bar"
          type="text"
          placeholder="Search for Title, Genre, Cast..."
        />
      </header>
    );
  }
}

export default Header;

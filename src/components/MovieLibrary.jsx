// implement MovieLibrary component hereimport React, { Component } from 'react';
import React from 'react';
import SearchBar from './SearchBar';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      // selectedGenre: '',
      // movies: this.props.movies,
    };
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
  }

  onSearchTextChange = (event) => {
    this.setState({
      searchText: event.target.value,
    });
  };

  onBookmarkedChange = (event) => {
    this.setState({
      bookmarkedOnly: event.target.value,
    });
  };

  render() {
    const { searchText, bookmarkedOnly } = this.state;
    return (
      <SearchBar
        searchText={ searchText }
        onSearchTextChange={ this.onSearchTextChange }
        bookmarkedOnly={ bookmarkedOnly }
        onBookmarkedChange={ this.onBookmarkedChange }
      />
    );
  }
}

export default MovieLibrary;

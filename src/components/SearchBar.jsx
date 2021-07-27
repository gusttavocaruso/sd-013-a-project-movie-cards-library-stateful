import React from 'react';

class SearchBar extends React.Component {
  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.props;
    return (
      <form data-testid="search-bar-form">
        Teste
        { searchText }
        { bookmarkedOnly }
        { selectedGenre }
      </form>
    );
  }
}

export default SearchBar;
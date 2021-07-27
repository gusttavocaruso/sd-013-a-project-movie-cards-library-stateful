import React from 'react';

class SearchBar extends React.Component {
  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.props;
    return (
      <div>
        Teste
        { searchText }
        { bookmarkedOnly }
        { selectedGenre }
      </div>
    );
  }
}

export default SearchBar;
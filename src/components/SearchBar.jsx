import React from 'react';
import SearchInput from './SearchInput';

class SearchBar extends React.Component {
  render() {

    return (
      <form data-testid="search-bar-form">
        <SearchInput />
      </form>
    );
  }
}

export default SearchBar;
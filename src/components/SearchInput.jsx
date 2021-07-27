import React from 'react';

class SearchInput extends React.Component {
  render() {
    const { searchText, onSearchTextChange } = this.props;
    return (
      <label htmlFor="search" data-testid="text-input-label">
        Inclui o texto:
        <input
        type="text"
        id="search"
        name="search"
        value={searchText}
        onChange={onSearchTextChange}
        />
      </label>
    )
  }
}

export default SearchInput;
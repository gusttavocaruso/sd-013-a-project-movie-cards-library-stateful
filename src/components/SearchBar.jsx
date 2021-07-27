// implement SearchBar component here
import React from 'react';

class SearchBar extends React.Component {
  render() {
    return (
      <div>
        <form>
          <label htmlFor="input-filter">
            pesquise:
            <input type="text" id="input-filter" />
          </label>
        </form>
      </div>
    );
  }
}

export default SearchBar;

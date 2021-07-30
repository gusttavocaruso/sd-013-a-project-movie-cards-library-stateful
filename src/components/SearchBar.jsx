import React from 'react';

class SearchBar extends React.Component {
  render() {
    return (
      <section>
        <form data-testid="search-bar-form">
          <label htmlFor="Inclui o texto" data-testid="Inclui o texto">
            <input type="text" value="searchText" />
          </label>
          {/* <label htmlFor=""></label> */}
        </form>
      </section>
    );
  }
}

export default SearchBar;

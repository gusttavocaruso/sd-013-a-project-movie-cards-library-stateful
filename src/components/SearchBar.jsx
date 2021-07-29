import React from 'react';

class SearchBar extends React.Component {
  render() {
    return (
      <section>
        <form data-testid="search-bar-form">
          <label htmlFor="name">
            <input type="text" name="name" />
          </label>
        </form>
      </section>
    );
  }
}

// SearchBar.propTypes = {
//   movie: PropTypes.shape({
//     searchText: PropTypes.string,
//     onSearchTextChange: PropTypes.callback,
//     bookmarkedOnly: PropTypes.boolean,
//     onBookmarkedChange: PropTypes.callback,
//     selectedGenre: PropTypes.string,
//     onSelectedGenreChange: PropTypes.callback,
//   }).isRequired,
// };

export default SearchBar;

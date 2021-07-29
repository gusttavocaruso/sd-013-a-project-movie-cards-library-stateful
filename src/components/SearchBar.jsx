import React from 'react';

class SearchBar extends React.Component {
  render() {
    return (
      <section>
        <h1>Movie Cards</h1>
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

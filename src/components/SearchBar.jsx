// implement SearchBar component here
import React from 'react'; 

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
  }



  render() {
    const { searchText, onSearchTextChange, bookmarkedOnly, onBookmarkedChange, selectedGenre, onSelectedGenreChange } = this.props;

    return (
      <p>teste</p>
    );
  }
}

export default SearchBar;
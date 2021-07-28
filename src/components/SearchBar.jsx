import React from 'react';

export default class extends React.Component {
  render() {
    const {
      searchText,
      onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange,
      selectedGenre,
      onSelectedGenreChange,
    } = this.props;
    return (
      <section>
        <form action="" data-testid="search-bar-form">
          <input type="text" name="" id="" />
        </form>
      </section>
    );
  }
}

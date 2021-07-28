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
        <h1>This Componet SearchBar</h1>
        <p>{searchText}</p>
        <p>{onSearchTextChange}</p>
        <p>{bookmarkedOnly}</p>
        <p>{onBookmarkedChange}</p>
        <p>{selectedGenre}</p>
        <p>{onSelectedGenreChange}</p>
      </section>
    );
  }
}

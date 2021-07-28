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
          <label htmlFor="" data-testid="text-input-label">
            Inclui o texto:
            <input
              type="text"
              name=""
              id=""
              data-testid="text-input"
              value={ searchText }
              onChange={ onSearchTextChange }
            />
          </label>
        </form>
      </section>
    );
  }
}

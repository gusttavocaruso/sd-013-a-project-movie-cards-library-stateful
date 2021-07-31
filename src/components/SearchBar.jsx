import React from 'react';
// import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  constructor() {
    super();

    this.state = {

    };
  }

  render() {
    // const { searchText } = this.props;
    // const { onSearchTextChange } = this.props;
    console.log(this.props);

    return (
      <form data-testid="search-bar-form">
        <label data-testid="text-input-label" htmlFor="input">
          Inclui o texto:
          <input
            type="text"
            // value={ searchText }
            // onChange={ onSearchTextChange }
            data-testid="text-input"
            id="input"
          />
        </label>

      </form>
    );
  }
}

SearchBar.propTypes = {
  // searchText: PropTypes.string.isRequired,
  // onSearchTextChange: PropTypes.func.isRequired,
  // bookmarkedOnly: PropTypes.bool.isRequired,
  // selectedGenre: PropTypes.string.isRequired,
  // onSelectedGenreChange: PropTypes.func.isRequired,
};

export default SearchBar;

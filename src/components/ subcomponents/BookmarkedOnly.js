import React from 'react';
import PropTypes from 'prop-types';

class BookmarkedOnly extends React.Component {
  render() {
    const { bookmarkedOnly, onBookmarkedChange } = this.props;

    return (
      <label htmlFor="search-checked" data-testid="checkbox-input-label">
        Mostrar somente favoritos
        <input
          name="bookmarkedOnly"
          id="search-checked"
          type="checkbox"
          checked={ bookmarkedOnly }
          onChange={ onBookmarkedChange }
          data-testid="checkbox-input"
        />
      </label>
    );
  }
}

BookmarkedOnly.propTypes = {
  bookmarkedOnly: PropTypes.bool,
  onBookmarkedChange: PropTypes.func,
};

BookmarkedOnly.defaultProps = {
  bookmarkedOnly: false,
  onBookmarkedChange: undefined,
};

export default BookmarkedOnly;

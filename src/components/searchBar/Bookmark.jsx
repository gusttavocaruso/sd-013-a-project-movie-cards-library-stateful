import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Bookmark extends Component {
  render () {
    const { bookmarkedOnly, onBookmarkedChange} = this.props;
    return (
      <label htmlFor="checkbox-input" data-testid="checkbox-input-label">
        Mostrar somente favoritos
        <input
          className="bookmarked-checkbox"
          name="checkbox-input"
          data-testid="checkbox-input"
          type="checkbox"
          checked={ bookmarkedOnly }
          onChange={ onBookmarkedChange }
        />
      </label>
    );
  }
}

Bookmark.propTypes = {
  bookmarkedOnly: PropTypes.bool.isRequired,
  onBookmarkedChange: PropTypes.func.isRequired,
};

export default Bookmark;
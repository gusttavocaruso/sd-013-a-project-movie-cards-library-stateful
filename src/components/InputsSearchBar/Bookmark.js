import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Bookmark extends Component {
  render() {
    const { bookmarkedOnly, onBookmarkedChange } = this.props;

    return (
      <div>
        <label data-testid="checkbox-input-label" htmlFor="bookmark">
          Mostrar somente favoritos
          <input
            type="checkbox"
            name="bookmarkedOnly"
            id="bookmark"
            checked={ bookmarkedOnly }
            onChange={ onBookmarkedChange }
            data-testid="checkbox-input"
          />
        </label>
      </div>
    );
  }
}

Bookmark.propTypes = {
  bookmarkedOnly: PropTypes.bool.isRequired,
  onBookmarkedChange: PropTypes.func.isRequired,
};

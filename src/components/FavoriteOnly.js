import React from 'react';
import PropTypes from 'prop-types';

class FavoriteOnly extends React.Component {
  render() {
    const { bookmarkedOnly, onBookmarkedChange } = this.props;

    return (
      <label
        htmlFor="favorite-only"
        data-testid="checkbox-input-label"
      >
        Mostrar somente favoritos
        <input
          type="checkbox"
          id="favorite-only"
          checked={ bookmarkedOnly }
          onChange={ onBookmarkedChange }
          data-testid="checkbox-input"
        />
      </label>
    );
  }
}

FavoriteOnly.propTypes = {
  bookmarkedOnly: PropTypes.bool,
  onBookmarkedChange: PropTypes.func,
};

FavoriteOnly.defaultProps = {
  bookmarkedOnly: '',
  onBookmarkedChange: [],
};

export default FavoriteOnly;

import React from 'react';
import PropTypes from 'prop-types';

class ShowFavorites extends React.Component {
  render() {
    const { bookmarkedOnly, onBookmarkedChange } = this.props;

    return (
      <label data-testid="checkbox-input-label" htmlFor="checkboxLabel">
        Mostrar somente favoritos
        <input
          data-testid="checkbox-input"
          id="checkboxLabel"
          type="checkbox"
          name="bookMarkedOnly"
          checked={ bookmarkedOnly }
          onChange={ onBookmarkedChange }
        />
      </label>
    );
  }
}

ShowFavorites.propTypes = {
  bookmarkedOnly: PropTypes.func,
  onBookmarkedChange: PropTypes.func,
};

ShowFavorites.defaultProps = {
  bookmarkedOnly: [],
  onBookmarkedChange: [],
};

export default ShowFavorites;

import React from 'react';
import PropTypes from 'prop-types';

class CheckBoxInputLabel extends React.Component {
  render() {
    const { bookmarkedOnly, onBookmarkedChange } = this.props;

    return (
      <label
        htmlFor="bookmarkedOnly"
        data-testid="checkbox-input-label"
      >
        <input
          type="checkbox"
          data-testid="checkbox-input"
          name="bookmarkedOnly"
          checked={ bookmarkedOnly }
          onChange={ onBookmarkedChange }
        />
        Mostrar somente favoritos
      </label>
    );
  }
}

CheckBoxInputLabel.propTypes = {
  bookmarkedOnly: PropTypes.string.isRequired,
  onBookmarkedChange: PropTypes.func.isRequired,
};

export default CheckBoxInputLabel;

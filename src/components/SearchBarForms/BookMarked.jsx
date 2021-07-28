import React, { Component } from 'react';
import PropTypes from 'prop-types';

class BookMarked extends Component {
  render() {
    const { checked, onChange } = this.props;
    return (
      <label htmlFor="bookmarkedOnly" data-testid="checkbox-input-label">
        Mostrar somente favoritos
        <input
          type="checkbox"
          name="bookmarkedOnly"
          checked={ checked }
          onChange={ onChange }
          data-testid="checkbox-input"
        />
      </label>
    );
  }
}

BookMarked.propTypes = {
  onChange: PropTypes.func.isRequired,
  checked: PropTypes.bool.isRequired,
};

export default BookMarked;

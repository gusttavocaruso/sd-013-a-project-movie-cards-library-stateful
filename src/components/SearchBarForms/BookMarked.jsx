import React, { Component } from 'react';
import PropTypes from 'prop-types';

class BookMarked extends Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label htmlFor="bookmarkedOnly" data-testid="checkbox-input-label">
        Mostrar somente favoritos
        <input
          type="checkbox"
          name="bookmarkedOnly"
          checked={ value }
          onChange={ onChange }
          data-testid="checkbox-input"
        />
      </label>
    );
  }
}

BookMarked.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default BookMarked;

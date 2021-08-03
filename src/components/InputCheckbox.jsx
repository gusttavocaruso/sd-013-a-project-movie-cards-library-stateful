import React from 'react';
import PropTypes from 'prop-types';

class InputCheckbox extends React.Component {
  render() {
    const { bookmarkedOnlyKey, onBookmarkedChangeKey } = this.props;

    return (
      <label data-testid="checkbox-input-label" htmlFor="input-text-checkbox">
        Mostrar somente favoritos
        <input
          type="checkbox"
          checked={ bookmarkedOnlyKey }
          onChange={ onBookmarkedChangeKey }
          data-testid="checkbox-input"
        />
      </label>
    );
  }
}

InputCheckbox.propTypes = {
  bookmarkedOnlyKey: PropTypes.bool,
  onBookmarkedChangeKey: PropTypes.func,
};

InputCheckbox.defaultProps = {
  bookmarkedOnlyKey: false,
  onBookmarkedChangeKey: PropTypes.func,
};

export default InputCheckbox;

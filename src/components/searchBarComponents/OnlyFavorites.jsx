import React from 'react';
import PropTypes from 'prop-types';

class OnlyFavorites extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label data-testid="checkbox-input-label" htmlFor="checkbox">
        Mostrar somente favoritos
        <input
          type="checkbox"
          data-testid="checkbox-input"
          id="checkbox"
          checked={ value }
          onChange={ onChange }
        />
      </label>
    );
  }
}

OnlyFavorites.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

OnlyFavorites.defaultProps = {
  value: '',
  onChange: undefined,
};

export default OnlyFavorites;

import React from 'react';
import PropTypes from 'prop-types';

class Subtitle extends React.Component {
  render() {
    const { value, onChange } = this.props;

    return (
      <label htmlFor="subtitle" data-testid="subtitle-input-label">
        Subtítulo
        <input
          type="text"
          id="subtitle"
          data-testid="subtitle-input"
          name="subtitle"
          value={ value }
          onChange={ onChange }
        />
      </label>
    );
  }
}

Subtitle.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
}.isRequired;

export default Subtitle;

import React from 'react';
import PropTypes from 'prop-types';

class Subtitle extends React.Component {
  render() {
    const { onChange, value } = this.props;
    return (

      <label data-testid="subtitle-input-label" htmlFor="subtitle">
        Subtítulo:
        <input
          type="text"
          name="subtitle"
          value={ value }
          onChange={ onChange }
          data-testid="subtitle-input"
        />
      </label>
    );
  }
}

Subtitle.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default Subtitle;

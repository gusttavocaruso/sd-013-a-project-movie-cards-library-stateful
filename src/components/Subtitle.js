import React from 'react';
import PropTypes from 'prop-types';

class Subtitle extends React.Component {
  render() {
    const { subtitle, onChange } = this.props;

    return (
      <label data-testid="subtitle-input-label" htmlFor="subtitle">
        Subtítulo
        <input
          name="subtitle"
          onChange={ onChange }
          data-testid="subtitle-input"
          id="subtitle"
          value={ subtitle }
          type="text"
        />
      </label>
    );
  }
}

Subtitle.propTypes = {
  subtitle: PropTypes.string,
  onChange: PropTypes.func,
};

Subtitle.defaultProps = {
  subtitle: '',
  onChange: {},
};

export default Subtitle;

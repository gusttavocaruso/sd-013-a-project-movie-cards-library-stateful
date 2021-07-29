import React from 'react';
import PropTypes from 'prop-types';

class SubtitleInput extends React.Component {
  render() {
    const { HandleChange, componentValue } = this.props;
    return (
      <label data-testid="subtitle-input-label" htmlFor="subtitle">
        Subtítulo
        <input
          type="text"
          value={ componentValue }
          data-testid="subtitle-input"
          onChange={ HandleChange }
          name="subtitle"
        />
      </label>
    );
  }
}

SubtitleInput.propTypes = {
  HandleChange: PropTypes.func,
  componentValue: PropTypes.string,
};

SubtitleInput.defaultProps = {
  HandleChange: undefined,
  componentValue: undefined,
};

export default SubtitleInput;

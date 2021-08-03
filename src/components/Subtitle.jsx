import React from 'react';
import PropTypes from 'prop-types';

class SubTitleInput extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label htmlFor="Subtitle" data-testid="subtitle-input-label">
        Subtítulo
        <input
          name="subtitle"
          id="subtitle"
          type="text"
          value={ value }
          data-testid="subtitle-input"
          onChange={ onChange }
        />
      </label>
    );
  }
}

SubTitleInput.propTypes = { value: PropTypes.string }.isRequired;

SubTitleInput.defaultProps = {
  value: 'undefined',
};

export default SubTitleInput;

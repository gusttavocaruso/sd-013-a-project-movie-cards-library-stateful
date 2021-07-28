import React from 'react';
import PropTypes from 'prop-types';

class SubtitleComp extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label htmlFor="input-subtitle" data-testid="subtitle-input-label">
        Subtítulo
        <input
          value={ value }
          data-testid="subtitle-input"
          type="text"
          onChange={ onChange }
          name="subtitle"
          id="input-subtitle"
        />
      </label>
    );
  }
}

SubtitleComp.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

SubtitleComp.defaultProps = {
  value: '',
  onChange: '',
};

export default SubtitleComp;

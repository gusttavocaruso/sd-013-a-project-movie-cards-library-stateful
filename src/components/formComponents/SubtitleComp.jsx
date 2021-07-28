import React from 'react';
import PropTypes from 'prop-types';

class SubtitleComp extends React.Component {
  render() {
    const { subtitle, onChange } = this.props;
    return (
      <label htmlFor="input-subtitle" data-testid="subtitle-input-label">
        Subtítulo
        <input
          value={ subtitle }
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
  subtitle: PropTypes.string,
  onChange: PropTypes.func,
};

SubtitleComp.defaultProps = {
  subtitle: '',
  onChange: '',
};

export default SubtitleComp;

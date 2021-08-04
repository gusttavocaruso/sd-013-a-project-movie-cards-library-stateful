import React from 'react';
import PropTypes from 'prop-types';

class SubtitleChange extends React.Component {
  render() {
    const { subtitle, onChange } = this.props;

    return (
      <label
        data-testid="subtitle-input-label"
        htmlFor="subtitle-change"
      >
        Subtítulo
        <input
          id="subtitle-change"
          data-testid="subtitle-input"
          type="text"
          name="subtitle"
          value={ subtitle }
          onChange={ onChange }
        />
      </label>
    );
  }
}

SubtitleChange.propTypes = {
  subtitle: PropTypes.string,
  onChange: PropTypes.func,
};

SubtitleChange.defaultProps = {
  subtitle: '',
  onChange: [],
};

export default SubtitleChange;

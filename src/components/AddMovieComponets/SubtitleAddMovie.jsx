import React from 'react';
import PropTypes from 'prop-types';

class SubtitleAddMovie extends React.Component {
  render() {
    const { subtitleValue, onChange } = this.props;
    return (
      <label htmlFor="Subtitulo" data-testid="subtitle-input-label">
        Subtítulo
        <input
          id="Subtitulo"
          data-testid="subtitle-input"
          type="text"
          value={ subtitleValue }
          onChange={ onChange }
        />
      </label>
    );
  }
}

SubtitleAddMovie.propTypes = {
  subtitleValue: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default SubtitleAddMovie;

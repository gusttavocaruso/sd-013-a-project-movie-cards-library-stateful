import React from 'react';
import PropTypes from 'prop-types';

class MovieStoryLine extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label data-testid="storyline-input-label" htmlFor="storyline">
        Sinopse:
        <input
          data-testid="storyline-input"
          type="text"
          name="storyline"
          value={ value }
          onChange={ onChange }
        />
      </label>
    );
  }
}

MovieStoryLine.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default MovieStoryLine;

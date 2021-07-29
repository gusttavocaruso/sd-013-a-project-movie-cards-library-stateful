import React from 'react';
import PropTypes from 'prop-types';

class RenderStoryline extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label data-testid="storyline-input-label" htmlFor="storylineText">
        Sinopse:
        <input
          type="text"
          name="storyline"
          id="storylineText"
          value={ value }
          onChange={ onChange }
          data-testid="storyline-input"
        />
      </label>
    );
  }
}

RenderStoryline.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default RenderStoryline;

import React from 'react';
import PropTypes from 'prop-types';

class StoryLineChange extends React.Component {
  render() {
    const { storyline, onChange } = this.props;

    return (
      <label
        data-testid="storyline-input-label"h
        htmlFor="storyline-change"
      >
        Sinopse
        <textarea
          name="storyline"
          id="storyline-change"
          cols="20"
          rows="5"
          value={ storyline }
          onChange={ onChange }
          data-testid="storyline-input"
        >
          texto
        </textarea>
      </label>
    );
  }
}

StoryLineChange.propTypes = {
  storyline: PropTypes.string,
  onChange: PropTypes.func,
};

StoryLineChange.defaultProps = {
  storyline: '',
  onChange: [],
};

export default StoryLineChange;

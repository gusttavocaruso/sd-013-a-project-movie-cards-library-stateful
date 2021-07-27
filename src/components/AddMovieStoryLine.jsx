import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddMovieStoryLine extends Component {
  render() {
    const { storyline, onChangeFunc } = this.props;
    return (
      <label data-testid="storyline-input-label" htmlFor="storyline">
        Sinopse
        <textarea
          data-testid="storyline-input"
          id="storyline"
          name="storyline"
          value={ storyline }
          onChange={ onChangeFunc }
        />
      </label>
    );
  }
}

AddMovieStoryLine.propTypes = {
  storyline: PropTypes.string.isRequired,
  onChangeFunc: PropTypes.func.isRequired,
};

export default AddMovieStoryLine;

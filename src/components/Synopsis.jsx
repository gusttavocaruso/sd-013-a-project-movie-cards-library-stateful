import React, { Component } from 'react';
import Proptypes from 'prop-types';

class Synopsis extends Component {
  render() {
    const { storyline, onChange } = this.props;

    return (
      <label htmlFor="storyLine" data-testid="storyline-input-label">
        Sinopse
        <textarea
          id="storyLine"
          name="storyLine"
          value={ storyline }
          data-testid="storyline-input"
          onChange={ onChange }
        />
      </label>
    );
  }
}

Synopsis.propTypes = {
  storyline: Proptypes.string,
  onChange: Proptypes.func,
}.isRequired;

export default Synopsis;

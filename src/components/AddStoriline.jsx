import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddStorieline extends Component {
  render() {
    const { storyline, onChange } = this.props;
    return (
      <label htmlFor="storyline" data-testid="storyline-input-label">
        Sinopse
        <textarea
          data-testid="storyline-input"
          name="storyline"
          id="storyline"
          cols="30"
          rows="10"
          value={ storyline }
          onChange={ onChange }
        />
      </label>
    );
  }
}

AddStorieline.propTypes = {
  storyline: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default AddStorieline;

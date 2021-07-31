import React from 'react';
import PropTypes from 'prop-types';

class Sinopse extends React.Component {
  render() {
    const { storyline, handleChange } = this.props;
    return (
      <label htmlFor="textarea" data-testid="storyline-input-label">
        Sinopse
        <textarea
          name="storyline"
          id="textarea"
          value={ storyline }
          data-testid="storyline-input"
          onChange={ handleChange }
        />
      </label>
    );
  }
}

Sinopse.propTypes = {
  storyline: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
}.isRequired;

export default Sinopse;

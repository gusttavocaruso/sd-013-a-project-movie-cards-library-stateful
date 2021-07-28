import React from 'react';
import PropTypes from 'prop-types';

class Sinopse extends React.Component {
  render() {
    const { storyline, handleChange } = this.props;
    return (
      <label data-testid="storyline-input-label" htmlFor="textarea">
        Sinopse
        <textarea
          type="text"
          data-testid="storyline-input"
          value={ storyline }
          onChange={ handleChange }
        />
      </label>
    );
  }
}

Sinopse.propTypes = {
  storyline: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Sinopse;

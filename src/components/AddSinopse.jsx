import React from 'react';
import PropTypes from 'prop-types';

class AddSinopse extends React.Component {
  render() {
    const { storyline, handleChange } = this.props;
    return (
      <label htmlFor="storyline" data-testid="storyline-input-label">
        Sinopse
        <textarea
          type="text"
          name="storyline"
          data-testid="storyline-input"
          value={ storyline }
          onChange={ handleChange }
        />
      </label>
    );
  }
}

AddSinopse.propTypes = {
  storyline: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default AddSinopse;

import PropTypes from 'prop-types';
import React from 'react';

class AddStoryline extends React.Component {
  render() {
    const { storyline, handleChangeText } = this.props;
    return (
      <label htmlFor="input-change-sinopse" data-testid="storyline-input-label">
        Sinopse
        <textarea
          name="storyline"
          value={ storyline }
          data-testid="storyline-input"
          onChange={ handleChangeText }
          id="input-change-sinopse"
        />
      </label>
    );
  }
}

AddStoryline.propTypes = {
  handleChangeText: PropTypes.func.isRequired,
  storyline: PropTypes.string.isRequired,
};

export default AddStoryline;

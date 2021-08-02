import React from 'react';
import PropTypes from 'prop-types';

class AddStoryline extends React.Component {
  render() {
    const { value, handleChange } = this.props;

    return (
      <label htmlFor="add-storyline" data-testid="storyline-input-label">
        Sinopse
        <input
          name="storyline"
          className="add-storyline"
          id="add-storyline"
          value={ value }
          data-testid="storyline-input"
          onChange={ handleChange }
        />
      </label>
    );
  }
}

AddStoryline.propTypes = {
  value: PropTypes.string,
  handleChange: PropTypes.func,
};

AddStoryline.defaultProps = {
  value: '',
  handleChange: undefined,
};

export default AddStoryline;

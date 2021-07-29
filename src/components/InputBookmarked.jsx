import React from 'react';
import PropTypes from 'prop-types';

class InputBookmarked extends React.Component {
  render() {
    const { bookmarked, handleChange } = this.props;
    return (
      <label htmlFor="favorito">
        Favorito
        <input
          type="checkbox"
          id="favorito"
          name="favorito"
          value={ bookmarked }
          onChange={ handleChange }
        />
      </label>
    );
  }
}

InputBookmarked.propTypes = {
  bookmarked: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default InputBookmarked;

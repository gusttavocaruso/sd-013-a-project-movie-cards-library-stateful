import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddTitle extends Component {
  render() {
    const { title, handleChange } = this.props;
    return (
      <label htmlFor="title" data-testid="title-input-label">
        Título
        <input
          type="text"
          name="title"
          data-testid="title-input"
          value={ title }
          onChange={ handleChange }
        />
      </label>
    );
  }
}

AddTitle.propTypes = {
  title: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

// AddMovieRating.defaultProps = {
//   rating: 'undefined',
// };

export default AddTitle;

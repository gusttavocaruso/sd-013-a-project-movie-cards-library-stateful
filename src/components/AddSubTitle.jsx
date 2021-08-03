// // Componente criado para resolução do requisito 12
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddSubTitle extends Component {
  render() {
    const { subtitle, handleChange } = this.props;
    return (
      <label htmlFor="subtitle" data-testid="subtitle-input-label">
        Subtítulo
        <input
          type="text"
          name="subtitle"
          data-testid="subtitle-input"
          value={ subtitle }
          onChange={ handleChange }
        />
      </label>
    );
  }
}

AddSubTitle.propTypes = {
  subtitle: PropTypes.number.isRequired,
  handleChange: PropTypes.func.isRequired,
};

// AddMovieRating.defaultProps = {
//   rating: 'undefined',
// };

export default AddSubTitle;

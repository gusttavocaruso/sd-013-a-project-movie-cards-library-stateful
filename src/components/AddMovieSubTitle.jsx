import React from 'react';
import PropTypes from 'prop-types';

class AddMovieSubTitle extends React.Component {
  render() {
    const { subtitle, handleChange } = this.props;
    return (
      <label htmlFor="subtitle" data-testid="subtitle-input-label">
        Subtítulo:
        <input
          id="subtitle"
          type="text"
          name="subtitle"
          value={ subtitle }
          onChange={ handleChange }
          data-testid="subtitle-input"
        />
      </label>
    );
  }
}

AddMovieSubTitle.propTypes = {
  subtitle: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default AddMovieSubTitle;

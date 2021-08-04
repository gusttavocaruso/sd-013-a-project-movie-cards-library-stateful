import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputTitle extends Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <label htmlFor="input-add-movie" data-testid="title-input-label">
        Título
        <input
          name="title"
          id="input-add-movie"
          type="text"
          data-testid="title-input"
          value={ value }
          onChange={ handleChange }
        />
      </label>
    );
  }
}

InputTitle.propTypes = {
  value: PropTypes.string,
  handleChange: PropTypes.func,
}.isRequired;

export default InputTitle;

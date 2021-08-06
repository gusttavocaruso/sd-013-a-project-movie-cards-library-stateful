import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class FormImage extends Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label data-testid="image-input-label" htmlFor="add-image">
        Imagem:
        <input
          id="add-image"
          type="text"
          name="imagePath"
          value={ value }
          onChange={ onChange }
          data-testid="image-input"
        />
      </label>
    );
  }
}

FormImage.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class InputTitle extends Component {
  render() {
    const { value, onChange } = this.props; // AQUI RECEBE A PROPS DO ADDMOVIE
    return (
      <label htmlFor="inputTitle" data-testid="title-input-label">
        Título
        <input
          id="inputTitle"
          type="text"
          name="title"
          value={ value }
          onChange={ onChange }
          data-testid="title-input"
        />
      </label>
    );
  }
}

InputTitle.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

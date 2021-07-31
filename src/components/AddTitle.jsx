import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddTitle extends Component {
  render() {
    const { title, onChange } = this.props;
    return (
      <label htmlFor="inputTitulo" data-testid="title-input-label">
        Título
        <input
          id="title"
          name="title"
          data-testid="title-input"
          type="text"
          value={ title }
          onChange={ onChange }
        />
      </label>
    );
  }
}

AddTitle.propTypes = {
  title: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default AddTitle;

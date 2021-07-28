import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Title extends Component {
  render() {
    const { title, handleChange } = this.props;

    return (
        <label data-testid="title-input-label" htmlFor="title">
        Título
        <input
          name="title"
          type="text"
          value={ title }
          onChange={ handleChange }
          data-testid="title-input"
        />
    </label>
    );
  }
}

Title.propTypes = {
  title: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Title;

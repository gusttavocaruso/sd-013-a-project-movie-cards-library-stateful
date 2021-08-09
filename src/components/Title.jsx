import React, { Component } from 'react';
import Proptypes from 'prop-types';

class Title extends Component {
  render() {
    const { title, onChange } = this.props;

    return (
      <label data-testid="title-input-label" htmlFor="title">
        Título
        <input
          data-testid="title-input"
          name="title"
          value={ title }
          id="title"
          onChange={ onChange }
        />
      </label>
    );
  }
}

Title.propTypes = {
  title: Proptypes.string,
  onChange: Proptypes.func,
}.isRequired;

export default Title;

import React, { Component } from 'react';
import Proptypes from 'prop-types';

class Title extends Component {
  render() {
    const { title, onChange } = this.props;

    return (
      <label htmlFor="title" data-testid="title-input-label">
        Titulo
        <input
          id="title"
          value={ title }
          name="title"
          data-testid="title-input"
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

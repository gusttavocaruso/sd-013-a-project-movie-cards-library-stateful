// InputTitle (Componente filho de AddMovie)

import React from 'react';
import PropTypes from 'prop-types';

class InputTitle extends React.Component {
  render() {
    const { title, handleChange } = this.props;

    return (
      <label data-testid="title-input-label" htmlFor="title">
        Título
        <input
          id="title"
          type="text"
          name="title"
          data-testid="title-input"
          onChange={ handleChange }
          value={ title }
        />
      </label>
    );
  }
}

InputTitle.propTypes = {
  title: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default InputTitle;

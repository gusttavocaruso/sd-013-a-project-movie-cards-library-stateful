// Inputs criados com ajuda do Rogerio P. da Silva
import React from 'react';
import PropTypes from 'prop-types';

class InputTitle extends React.Component {
  render() {
    const {
      title,
      onChange,
    } = this.props;
    return (
      <label htmlFor="#" data-testid="title-input-label">
        Título
        <input
          value={ title }
          type="text"
          data-testid="title-input"
          onChange={ onChange }
          name="title"
        />
      </label>
    );
  }
}

InputTitle.propTypes = {
  title: PropTypes.string,
  onChange: PropTypes.func,
}.isRequired;

export default InputTitle;

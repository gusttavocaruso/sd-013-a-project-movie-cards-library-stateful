import React from 'react';
import PropTypes from 'prop-types';

class Titulo extends React.Component {
  render() {
    const { title, handleChange } = this.props;
    return (
      <label htmlFor="title" data-testid="title-input-label">
        Título
        <input
          id="title"
          name="title"
          value={ title }
          type="text"
          data-testid="title-input"
          onChange={ handleChange }
        />
      </label>
    );
  }
}

Titulo.propTypes = {
  title: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Titulo;

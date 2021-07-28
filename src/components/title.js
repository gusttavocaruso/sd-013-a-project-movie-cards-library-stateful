import React from 'react';
import PropTypes from 'prop-types';

class Title extends React.Component {
  render() {
    const { title, handleChange } = this.props;

    return (
      <label htmlFor="titulo" data-testid="title-input-label">
        Título
        <input
          data-testid="title-input"
          id="titulo"
          name="title"
          type="text"
          value={ title }
          onChange={ handleChange }
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

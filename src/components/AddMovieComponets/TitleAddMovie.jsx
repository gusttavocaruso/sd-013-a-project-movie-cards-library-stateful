import React from 'react';
import PropTypes from 'prop-types';

class TitleAddMovie extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label htmlFor="Titulo" data-testid="title-input-label">
        Título
        <input
          data-testid="title-input"
          type="text"
          id="Titulo"
          value={ value }
          onChange={ onChange }
        />
      </label>
    );
  }
}

TitleAddMovie.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default TitleAddMovie;

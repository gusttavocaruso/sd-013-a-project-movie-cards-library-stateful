import React from 'react';
import PropTypes from 'prop-types';

class Genero extends React.Component {
  render() {
    const { genre } = this.props;
    return (
      <label data-testid="genre-input-label" htmlFor="genero">
        Gênero
        <select
          value={ genre }
          data-testid="genre-input"
        >
          <option data-testid="genre-option" value="action">Ação</option>
          <option data-testid="genre-option" value="comedy">Comédia</option>
          <option data-testid="genre-option" value="thriller">Suspense</option>
        </select>
      </label>
    );
  }
}

Genero.propTypes = {
  genre: PropTypes.number.isRequired,
};

export default Genero;

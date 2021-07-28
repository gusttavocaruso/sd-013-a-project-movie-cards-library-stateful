import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Gen extends Component {
  render() {
    const { genre, handleChange } = this.props;

    return (
      <label data-testid="genre-input-label" htmlFor="gen">
        Gênero
        <select
          name="gen"
          value={ genre }
          onChange={ handleChange }
          data-testid="genre-input"
        >
          <option data-testeid="genre-option" value="action">Ação</option>
          <option data-testeid="genre-option" value="comedy">Comédia</option>
          <option data-testeid="genre-option" value="thriller">Suspense</option>
        </select>
      </label>
    );
  }
}

Gen.propTypes = {
  genre: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Gen;

import React from 'react';
import PropTypes from 'prop-types';

class Genre extends React.Component {
  render() {
    const { genre } = this.props;
    return (
      <label data-testid="genre-input-label" htmlFor="Genre">
        Gênero
        <select
        data-testid="genre-input"
         value={ genre }
        //  onChange={ handleChange }
         onChange={ this.handleChange }
         >
          <option data-testid="genre-option" value="action">Ação</option>
          <option data-testid="genre-option" value="comedy">Comédia</option>
          <option data-testid="genre-option" value="thriller">Suspense</option>
        </select>
      </label>
    );
  }
}

Genre.propTypes = {
  genre: PropTypes.number.isRequired,
  // handleChange: PropTypes.func.isRequired,
};

export default Genre;

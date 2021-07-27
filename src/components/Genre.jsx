import React from 'react';
import PropTypes from 'prop-types';

class Genre extends React.Component {
  render() {
    const { valueComp, onChangeComp } = this.props;
    return (
      <label htmlFor="genre" data-testid="genre-input-label">
        Gênero
        <select
          name="genre"
          id="genre"
          data-testid="genre-input"
          value={ valueComp }
          onChange={ onChangeComp }
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
  valueComp: PropTypes.string.isRequired,
  onChangeComp: PropTypes.func.isRequired,
};

export default Genre;

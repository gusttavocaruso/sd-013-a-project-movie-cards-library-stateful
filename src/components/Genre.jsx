import React from 'react';
import PropTypes from 'prop-types';

class Genre extends React.Component {
  render() {
    const { genre, updateState } = this.props;
    return (
      <div>
        <label htmlFor="genre" data-testid="genre-input-label">
          Gênero
          <select
            name="genre"
            value={ genre }
            onChange={ updateState }
            data-testid="genre-input"
            id="genre"
          >
            <option data-testid="genre-option" value="action">Ação</option>
            <option data-testid="genre-option" value="comedy">Comédia</option>
            <option data-testid="genre-option" value="thriller">Suspense</option>
          </select>
        </label>
      </div>
    );
  }
}

Genre.propTypes = {
  genre: PropTypes.string,
  updateState: PropTypes.func,
};

Genre.defaultProps = {
  genre: 'action',
  updateState: () => { },
};

export default Genre;

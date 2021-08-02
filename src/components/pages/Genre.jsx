import React from 'react';
import PropTypes from 'prop-types';

class Genre extends React.Component {
  render() {
    const { onChange, value } = this.props;
    return (
      <label data-testid="genre-input-label" htmlFor="genre">
        Gênero:
        <select
          name="genre"
          value={ value }
          onChange={ onChange }
          data-testid="genre-input"
        >
          <option value="action" data-testid="genre-option">Ação</option>
          <option value="comedy" data-testid="genre-option">Comédia</option>
          <option value="thriller" data-testid="genre-option">Suspense</option>
        </select>
      </label>
    );
  }
}

Genre.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default Genre;

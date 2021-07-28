import React from 'react';
import PropTypes from 'prop-types';

class GenreInput extends React.Component {
  render() {
    const { HandleChange, componentValue } = this.props;
    return (
      <label data-testid="genre-input-label" htmlFor="genre">
        Gênero
        <select
          name="genre"
          value={ componentValue }
          data-testid="genre-input"
          onChange={ HandleChange }
        >
          <option value="action" data-testid="genre-option">Ação</option>
          <option value="comedy" data-testid="genre-option">Comédia</option>
          <option value="thriller" data-testid="genre-option">Suspense</option>
        </select>
      </label>
    );
  }
}

GenreInput.propTypes = {
  HandleChange: PropTypes.func,
  componentValue: PropTypes.string,
};

GenreInput.defaultProps = {
  HandleChange: undefined,
  componentValue: undefined,
};

export default GenreInput;

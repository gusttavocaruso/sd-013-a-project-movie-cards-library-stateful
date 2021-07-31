import React from 'react';
import PropTypes from 'prop-types';

class Genre extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label htmlFor="add-genre" data-testid="genre-input-label">
        Gênero
        <select
          data-testid="genre-input"
          id="add-genre"
          name="genre"
          value={ value }
          onChange={ onChange }
        >
          <option data-testid="genre-option" value="action">
            Ação
          </option>
          <option data-testid="genre-option" value="comedy">
            Comédia
          </option>
          <option data-testid="genre-option" value="thriller">
            Suspense
          </option>
        </select>
      </label>
    );
  }
}

Genre.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

Genre.defaultProps = {
  value: 'action',
};

export default Genre;

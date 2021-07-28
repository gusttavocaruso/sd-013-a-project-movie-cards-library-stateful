import React from 'react';
import PropTypes from 'prop-types';

class GenreComp extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label data-testid="genre-input-label" htmlFor="input-genre">
        Gênero
        <select
          value={ value }
          data-testid="genre-input"
          name="genre"
          onChange={ onChange }
          id="input-genre"
        >
          <option data-testid="genre-option" value="action">Ação</option>
          <option data-testid="genre-option" value="comedy">Comédia</option>
          <option data-testid="genre-option" value="thriller">Suspense</option>
        </select>
      </label>
    );
  }
}

GenreComp.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

GenreComp.defaultProps = {
  value: '',
  onChange: '',
};

export default GenreComp;

import React from 'react';
import Proptypes from 'prop-types';

class SelectGenre extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <section>
        <label htmlFor="genre" data-testid="genre-input-label">
          Gênero
          <select
            name="genre"
            value={ value }
            data-testid="genre-input"
            onChange={ onChange }
          >
            <option value="action" data-testid="genre-option">Ação</option>
            <option value="comedy" data-testid="genre-option">Comédia</option>
            <option value="thriller" data-testid="genre-option">Suspense</option>
          </select>
        </label>
      </section>
    );
  }
}

SelectGenre.propTypes = {
  onChange: Proptypes.func,
  value: Proptypes.string,
}.isrequired;

export default SelectGenre;

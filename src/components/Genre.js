import React from 'react';

class Genre extends React.Component {
  render() {
    const { genre, onChange } = this.props;

    return (
      <label data-testid="genre-input-label" htmlFor="select">
        Gênero
        <select
          onChange={ onChange }
          value={ genre }
          data-testid="genre-input"
          name="genre"
          id="select"
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

export default Genre;

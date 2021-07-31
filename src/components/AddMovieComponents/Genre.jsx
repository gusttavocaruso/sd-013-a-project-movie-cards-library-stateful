import React from 'react';

class Genre extends React.Component {
  render() {
    return (
      <label htmlFor="genre" data-testid="genre-input-label">
        Gênero
        <select id="genre" data-testid="genre-input">
          <option data-testid="genre-option" value="action">Ação</option>
          <option data-testid="genre-option" value="comedy">Comédia</option>
          <option data-testid="genre-option" value="thriller">Suspense</option>
        </select>
      </label>
    );
  }
}

export default Genre;

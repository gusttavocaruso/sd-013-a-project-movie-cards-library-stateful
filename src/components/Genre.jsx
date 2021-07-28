import React from 'react';

class Genre extends React.Component {
  constructor() {
    super();
    this.state = {
      genre: 'action',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ genre: event.target.value });
  }

  render() {
    const { genre } = this.state;
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

export default Genre;

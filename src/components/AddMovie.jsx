import React, { Component } from 'react';

class AddMovie extends Component {
  render() {
    return (
      <div>
        <form data-testid="add-movie-form">
          <label htmlFor="movieTitle" data-testid="title-input-label">
            <input type="text" name="movieTitle" data-testid="title-input" />
          </label>
        </form>
      </div>
    );
  }
}

export default AddMovie;

import React from 'react';

class AddMovie extends React.Component {
  render() {
    return (
      <section>
        <form data-testid="add-movie-form">
          <label htmlFor="title-input" data-testid="title-input-label">
            Título
            <input type="text" data-testid="title-input" />
          </label>
        </form>
      </section>
    );
  }
}

export default AddMovie;

import React from 'react';

// const propriedades = {
//   subtitle: '',
//   title: '',
//   imagePath: '',
//   storyline: '',
//   rating: 0,
//   genre: 'action',
// };

class AddMovie extends React.Component {
  constructor() {
    super();
    // this.state = propriedades;
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  render() {
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;

    return (
      <form data-testid="add-movie-form">
        <label data-testid="title-input-label" htmlFor="input-title">
          Título
          <input
            id="input-title"
            type="text"
            data-testid="title-input"
            name={ title }
            onChange={ title }
          />
        </label>
      </form>
    );
  }
}

export default AddMovie;

import React from 'react';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
    this.newMovie = this.newMovie.bind(this);
  }

  newMovie(event) {
    const { name, value } = event.target;
    this.setState(({ [name]: value }));
  }

  render() {
    const { onClick } = this.props;
    return (
      <form action="" data-testid="add-movie-form">
        <label htmlFor="titulo" data-testid="title-input-label">
          Título
          <input
            type="text"
            name="titulo"
            data-testid="title-input"
            onChange={ this.newMovie }
          />
        </label>
      </form>
    );
  }
}
export default AddMovie;

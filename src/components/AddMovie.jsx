import React, { Component } from 'react';
import AddMovieRating from './AddMovieRating';
import AddTitle from './AddTitle';
import AddSubTitle from './AddSubTitle';
import AddImage from './AddImage';
import AddSinopse from './AddSinopse';
import AddGenre from './AddGenre';
import AddButton from './AddButton';

class AddMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

handleChange = (event) => {
  this.setState({
    [event.target.name]: event.target.value,
  });
};

render() {
  const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
  return (
    <div>
      <form data-testid="add-movie-form">
        {/* Componentes criados com a ajuda do Vinicius Dionísio Turma13 - Tribo A */}
        <AddTitle title={ title } handleChange={ this.handleChange } />
        <AddSubTitle title={ subtitle } handleChange={ this.handleChange } />
        <AddImage imagePath={ imagePath } handleChange={ this.handleChange } />
        <AddSinopse storyline={ storyline } handleChange={ this.handleChange } />
        <AddMovieRating rating={ rating } handleChange={ this.handleChange } />
        <AddGenre genre={ genre } handleChange={ this.handleChange } />
        <AddButton />
      </form>
    </div>
  );
}
}

export default AddMovie;

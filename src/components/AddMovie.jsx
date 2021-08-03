import React from 'react';
import ImagePath from './AddMovieComponents/ImagePath';
import Rating from './AddMovieComponents/Rating';
import Storyline from './AddMovieComponents/Storyline';
import Subtitle from './AddMovieComponents/Subtitle';
import Title from './AddMovieComponents/Title';

// Detalha o estado inicial da busca pelo novo filme, setando todos os argumentos como uma string vazia.
const initialState = {
  subtitle: '',
  title: '',
  imagePath: '',
  storyline: '',
  rating: 0,
  genre: 'action',
};
class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = initialState;
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating } = this.state;
    return (
      <form data-testid="add-movie-form">
        <Title handleChange={ this.handleChange } title={ title } />
        <Subtitle handleChange={ this.handleChange } subtitle={ subtitle } />
        <ImagePath handleChange={ this.handleChange } imagePath={ imagePath } />
        <Storyline handleChange={ this.handleChange } storyline={ storyline } />
        <Rating handleChange={ this.handleChange } rating={ rating } />
      </form>
    );
  }
}

AddMovie.propTypes = {

};

export default AddMovie;

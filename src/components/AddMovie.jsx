import React from 'react';
import PropTypes from 'prop-types';
import Title from './Pages/Title';
import Subtitle from './Pages/Subtitle';
import Imagepath from './Pages/Imagepath';
import Storyline from './Pages/Storyline';
import Genre from './Pages/Genre';
import Rating from './Pages/Rating';
import Button from './Pages/Button';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
      storyLine: '',
      rating: 0,
      genre: 'action',
    };
  }

  mudançaDeEstado = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    const { onClick } = this.props;
    const { title, subtitle, imagePath, storyLine, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <Title title={ title } onChange={ this.mudançaDeEstado } />
        <Subtitle subtitle={ subtitle } onChange={ this.mudançaDeEstado } />
        <Imagepath imagePath={ imagePath } onChange={ this.mudançaDeEstado } />
        <Storyline storyLine={ storyLine } onChange={ this.mudançaDeEstado } />
        <Rating rating={ rating } onChange={ this.mudançaDeEstado } />
        <Genre genre={ genre } onChange={ this.mudançaDeEstado } />
        <Button
          onClick={ () => {
            onClick(this.state);
            this.setState({
              title: '',
              subtitle: '',
              imagePath: '',
              storyLine: '',
              rating: 0,
              genre: 'action',
            });
          } }
        />
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;

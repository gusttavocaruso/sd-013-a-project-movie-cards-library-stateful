import React from 'react';
// import PropTypes from 'prop-types';
import Title from './Pages/Title';
import Subtitle from './Pages/Subtitle';
import Imagepath from './Pages/Imagepath';
import Storyline from './Pages/Storyline';
import Rating from './Pages/Rating';
import Genre from './Pages/Genre';

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
    const { title, subtitle, imagePath, storyLine, rating, genre } = this.state;
    return (
      <form>
        <Title value={ title } onChange={ this.mudançaDeEstado } />
        <Subtitle value={ subtitle } onChange={ this.mudançaDeEstado } />
        <Imagepath value={ imagePath } onChange={ this.mudançaDeEstado } />
        <Storyline value={ storyLine } onChange={ this.mudançaDeEstado } />
        <Rating rating={ rating } onChange={ this.mudançaDeEstado } />
        <Genre genre={ genre } onChange={ this.mudançaDeEstado } />
      </form>
    );
  }
}

// AddMovie.propTypes = {
//   title: PropTypes.string.isRequired,
//   subtitle: PropTypes.string.isRequired,
//   imagePath: PropTypes.string.isRequired,
//   storyLine: PropTypes.string.isRequired,
//   rating: PropTypes.number.isRequired,
//   genre: PropTypes.string.isRequired,
// };
export default AddMovie;

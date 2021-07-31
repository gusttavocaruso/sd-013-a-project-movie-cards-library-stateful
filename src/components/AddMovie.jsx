import React from 'react';
import PropTypes from 'prop-types';
import Subtitle from './pages/Subtitle';
import Title from './pages/Title';
import Image from './pages/Image';
import Storyline from './pages/Storyline';
import Rating from './pages/Rating';
import Genre from './pages/Genre';
import Button from './pages/Button';

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
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    const { onClick } = this.props;

    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;

    return (
      <form data-testid="add-movie-form">
        <Title value={ title } onChange={ this.handleChange } />
        <Subtitle value={ subtitle } onChange={ this.handleChange } />
        <Image value={ imagePath } onChange={ this.handleChange } />
        <Storyline value={ storyline } onChange={ this.handleChange } />
        <Rating value={ rating } onChange={ this.handleChange } />
        <Genre value={ genre } onChange={ this.handleChange } />
        <Button onClick={ onClick } />
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;

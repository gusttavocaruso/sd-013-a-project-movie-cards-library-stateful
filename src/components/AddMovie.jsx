import React from 'react';
import PropTypes from 'prop-types';
import Title from './TitleAddMovie';
import Subtitle from './SubtitleAddMovie';
import Image from './ImageAddMovie';
import Storyline from './StorylineAddMovie';
import Rating from './RatingAddMovie';
import Genre from './GenreAddMovie';
import Button from './ButtonAddMovie';

class AddMovie extends React.Component {
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
    this.baseState = this.state;
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  resetState = (event) => {
    event.preventDefault();
    this.setState(this.baseState);
  }

  render() {
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    const { onClick } = this.props;
    return (
      <form onSubmit={ this.resetState }>
        <Button onClick={ onClick } />
        <Title value={ title } onChange={ this.handleChange } />
        <Subtitle value={ subtitle } onChange={ this.handleChange } />
        <Image value={ imagePath } onChange={ this.handleChange } />
        <Storyline value={ storyline } onChange={ this.handleChange } />
        <Rating value={ rating } onChange={ this.handleChange } />
        <Genre value={ genre } onChange={ this.handleChange } />
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;

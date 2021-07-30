import React from 'react';
import Title from './Title';
import Subtitle from './Subtitle';
import ImagePath from './ImagePath';
import StoryLine from './StoryLine';
import Rating from './Rating';
import Genre from './Genre';
import Button from './Button';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyLine: '',
      rating: 0,
      genre: 'action',
    };
  }

  handleClick = (event) => {
    event.preventDefault();
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyLine: '',
      rating: 0,
      genre: 'action',
    });
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { subtitle, title, imagePath, storyLine, rating, genre } = this.state;

    return (
      <form data-teseventtid="add-movie-form">
        <Title title={ title } onChange={ this.handleChange } />
        <Subtitle subtitle={ subtitle } onChange={ this.handleChange } />
        <ImagePath imagePath={ imagePath } onChange={ this.handleChange } />
        <StoryLine storyLine={ storyLine } onChange={ this.handleChange } />
        <Rating rating={ rating } onChange={ this.handleChange } />
        <Genre genre={ genre } onChange={ this.handleChange } />
        <Button onClick={ this.handleClick } />
      </form>
    );
  }
}

export default AddMovie;

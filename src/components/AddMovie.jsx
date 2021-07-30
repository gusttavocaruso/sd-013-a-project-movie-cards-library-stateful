import React from 'react';
import Title from './Title';
import Subtitle from './Subtitle';
import ImagePath from './ImagePath';
import StoryLine from './StoryLine';
import Rating from './Rating';
import Genre from './Genre';
// import Button from './Button';

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

  // handleClick = (props) => {
  //   this.setState((anterior, _props) => {
  //   });
  // }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    // const { onClick } = this.props;
    const { subtitle, title, imagePath, storyLine, rating, genre } = this.state;

    return (
      <form data-testid="add-movie-form">
        <Title title={ title } onChange={ this.handleChange } />
        <Subtitle subtitle={ subtitle } onChange={ this.handleChange } />
        <ImagePath imagePath={ imagePath } onChange={ this.handleChange } />
        <StoryLine storyLine={ storyLine } onChange={ this.handleChange } />
        <Rating rating={ rating } onChange={ this.handleChange } />
        <Genre genre={ genre } onChange={ this.handleChange } />
      </form>
    );
  }
}

export default AddMovie;

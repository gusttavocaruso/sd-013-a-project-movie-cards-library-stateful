import React from 'react';
import Title from './Title';
import Subtitle from './Subtitle';
import ImagePath from './ImagePath';
import StoryLine from './StoryLine';
import Rating from './Rating';
import Genre from './Genre';

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

  handleClick = (props) => {
    this.setState((anterior, _props) => {
      
    });
  }

  handleChange = (event) => {
    this.setState = {
      [event.target.name]: event.target.value,
    };
  };

  render() {
    const { onClick } = this.props;

    return (
      <form data-testid="add-movie-form">
        <Title />
        <Subtitle />
        <ImagePath />
        <StoryLine />
        <Rating />
        <Genre />
        <button
          onClick={ onClick }
          data-testid="send-button"
          type="submit"
        >
          Adicionar filme
        </button>
      </form>
    );
  }
}

export default AddMovie;

import React from 'react';
import InputTextAddMovie from './InputTextAddMovie';
import RatingAddMovie from './RatingAddMovie';
import TextAreaAddMovie from './TextAreaAddMovie';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  render() {
    const { handleChange } = this;
    const {
      subtitle,
      title,
      imagePath,
      storyline,
      rating } = this.state;
    return (
      <form data-testid="add-movie-form">
        <InputTextAddMovie
          onTitleChange={ handleChange }
          onSubtitleChange={ handleChange }
          onImagePathChange={ handleChange }
          subtitle={ subtitle }
          title={ title }
          imagePath={ imagePath }
        />
        <TextAreaAddMovie storyline={ storyline } onTextAreaChange={ handleChange } />
        <RatingAddMovie rating={ rating } onRatingChange={ handleChange } />
      </form>
    );
  }
}

export default AddMovie;

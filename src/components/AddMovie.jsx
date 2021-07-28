import React from 'react';
/* import PropTypes from 'prop-types'; */
import TitleComp from './formComponents/TitleComp';
import SubtitleComp from './formComponents/SubtitleComp';
import StoryLineComp from './formComponents/StorylineComp';
import ImageComp from './formComponents/ImageComp';
import RatingComp from './formComponents/RatingComp';
import GenreComp from './formComponents/GenreComp';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
      storyLine: '',
      rating: '',
      genre: '',
    };
  }

HandleOnChange = ((event) => {
  this.setState({
    [event.target.name]: event.target.value,
  });
})

render() {
  const { title, subtitle, imagePath, storyLine, rating, genre } = this.state;
  return (
    <div>
      <form data-testid="add-movie-form">
        <TitleComp value={ title } onChange={ this.HandleOnChange } />
        <SubtitleComp value={ subtitle } onChange={ this.HandleOnChange } />
        <ImageComp value={ imagePath } onChange={ this.HandleOnChange } />
        <StoryLineComp value={ storyLine } onChange={ this.HandleOnChange } />
        <RatingComp value={ rating } onChange={ this.HandleOnChange } />
        <GenreComp value={ genre } onChange={ this.HandleOnChange } />
      </form>
    </div>
  );
}
}

export default AddMovie;

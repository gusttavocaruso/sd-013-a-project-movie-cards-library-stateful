import React from 'react';
import InputTitle from './InputTitle';
import InputSubtitle from './InputSubtitle';
import InputImage from './InputImage';
import InputStoryline from './InputStoryline';
import SelectGenre from './SelectGenre';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      genre: 'action',
      // rating: 0,
    };
  }

handleChange = (event) => {
  this.setState({
    [event.target.name]: event.target.value,
  });
}

render() {
  const { title, subtitle, imagePath, storyline, genre } = this.state;

  return (
    <form data-testid="add-movie-form">
      <InputTitle title={ title } handleChange={ this.handleChange } />
      <InputSubtitle subtitle={ subtitle } handleChange={ this.handleChange } />
      <InputImage imagePath={ imagePath } handleChange={ this.handleChange } />
      <InputStoryline storyline={ storyline } handleChange={ this.handleChange } />
      <SelectGenre genre={ genre } handleChange={ this.handleChange } />
    </form>
  );
}
}

export default AddMovie;

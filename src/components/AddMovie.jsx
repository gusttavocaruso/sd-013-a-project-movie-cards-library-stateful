import React from 'react';
import AddTitle from './ subcomponents/AddTitle';
import AddSubtitle from './ subcomponents/AddSubtitle';
import AddImage from './ subcomponents/AddImage';
import AddStoryline from './ subcomponents/AddStoryline';
import AddRating from './ subcomponents/AddRating';
import AddGenre from './ subcomponents/AddGenre';

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

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  }

  render() {
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;

    return (
      <form data-testid="add-movie-form">
        <AddTitle value={ title } handleChange={ this.handleChange } />
        <AddSubtitle value={ subtitle } handleChange={ this.handleChange } />
        <AddImage value={ imagePath } handleChange={ this.handleChange } />
        <AddStoryline value={ storyline } handleChange={ this.handleChange } />
        <AddRating value={ rating } handleChange={ this.handleChange } />
        <AddGenre value={ genre } handleChange={ this.handleChange } />
      </form>
    );
  }
}

export default AddMovie;

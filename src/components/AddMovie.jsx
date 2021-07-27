// implement AddMovie component
import React, { Component } from 'react';
import ImageInput from './ImageInput';
import RartingInput from './RartingInput';
import StoryLine from './StoryLine';
import SubtitleInput from './SubtitleInput';
import TitleInput from './TitleInput';

const INITIAL_STATE = {
  subtitle: '',
  title: '',
  imagePath: '',
  storyline: '',
  rating: 0,
  genre: 'action',
};

class AddMovie extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = INITIAL_STATE;
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating } = this.state;
    return (
      <form data-testid="add-movie-form">
        <TitleInput title={ title } handleChange={ this.handleChange } />
        <SubtitleInput subtitle={ subtitle } handleChange={ this.handleChange } />
        <ImageInput imagePath={ imagePath } handleChange={ this.handleChange } />
        <StoryLine storyline={ storyline } handleChange={ this.handleChange } />
        <RartingInput rating={ rating } handleChange={ this.handleChange } />
      </form>
    );
  }
}

AddMovie.propTypes = {

};

export default AddMovie;

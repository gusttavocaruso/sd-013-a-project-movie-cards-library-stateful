import React from 'react';
import Image from './inputComponents/ImageInput';
import Storyline from './inputComponents/Storyline';
import Subtitle from './inputComponents/SubtitleInput';
import Title from './inputComponents/TitleInput';

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

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({[name]: value});
  }

  render() {
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <Title value={ title.state } onChange={ this.handleChange } />
        <Subtitle value={ subtitle.state } onChange={ this.handleChange } />
        <Image value={ imagePath.state } onChange={ this.handleChange } />
        <Storyline value={ storyline.state } onChange={ this.handleChange } />
      </form>
    );
  }
}

export default AddMovie;

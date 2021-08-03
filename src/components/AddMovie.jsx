import React from 'react';
import Title from './TitleAddMovie';
import Subtitle from './SubtitleAddMovie';
import Image from './ImageAddMovie';
import Storyline from './StorylineAddMovie';
import Rating from './RatingAddMovie';
import Genre from './GenreAddMovie';

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
  }

  handleChange = (event) => { // utilizamos esta f(), para capturarmos a mudança no onChange alterando o elemento no estado, puxando esse elemento a partir do name.
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    return (
      <div>
        <Title value={ title } onChange={ this.handleChange } />
        <Subtitle value={ subtitle } onChange={ this.handleChange } />
        <Image value={ imagePath } onChange={ this.handleChange } />
        <Storyline value={ storyline } onChange={ this.handleChange } />
        <Rating value={ rating } onChange={ this.handleChange } />
        <Genre value={ genre } onChange={ this.handleChange } />
      </div>
    );
  }
}

export default AddMovie;

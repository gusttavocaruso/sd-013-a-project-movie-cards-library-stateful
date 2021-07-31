import React from 'react';
import Genre from './AddGenre.jsx';
import Img from './AddImage.jsx';
import Rating from './AddRating.jsx';
import Sinopse from './AddSinopse.jsx';
import Subtitle from './AddSubtitle.jsx';
import Title from './AddTitle.jsx';

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

  handleChange({ target: { name, value } }) {
    this.setState({ [name]: value });
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <div>
        <form data-testid="add-movie-form">
          <Title value={title} onChange={this.handleChange} />
          <Subtitle value={subtitle} onChange={this.handleChange} />
          <Img value={imagePath} onChange={this.handleChange} />
          <Sinopse value={storyline} onChange={this.handleChange} />
          <Rating value={rating} onChange={this.handleChange} />
          <Genre value={genre} onChange={this.handleChange} />
        </form>
      </div>
    );
  }
}
export default AddMovie;

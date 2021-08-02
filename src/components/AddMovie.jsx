import React from 'react';
import PropTypes from 'prop-types';
import Genre from './AddGenre';
import Img from './AddImage';
import Rating from './AddRating';
import Sinopse from './AddSinopse';
import Subtitle from './AddSubtitle';
import Title from './AddTitle';
import Button from './Button';

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
    this.submitButton = this.submitButton.bind(this);
  }

  handleChange({ target: { name, value } }) {
    this.setState({ [name]: value });
  }

  submitButton() {
    const { onClick } = this.props;
    onClick(this.state);
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <div>
        <form data-testid="add-movie-form">
          <Title value={ title } onChange={ this.handleChange } />
          <Subtitle value={ subtitle } onChange={ this.handleChange } />
          <Img value={ imagePath } onChange={ this.handleChange } />
          <Sinopse value={ storyline } onChange={ this.handleChange } />
          <Rating value={ rating } onChange={ this.handleChange } />
          <Genre value={ genre } onChange={ this.handleChange } />
          <Button onClick={ this.submitButton } />
        </form>
      </div>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;

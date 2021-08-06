import React from 'react';
import PropTypes from 'prop-types';
import Title from './my-components/Title';
import Subtitle from './my-components/Subtitle';
import ImagePath from './my-components/ImagePath';
import Storyline from './my-components/Storyline';
import Rating from './my-components/Rating';
import Genre from './my-components/Genre';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  handleClick = () => {
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
      <form data-testid="add-movie-form">

        <Title title={ title } onChange={ this.handleChange } />
        <Subtitle subtitle={ subtitle } onChange={ this.handleChange } />
        <ImagePath imagePath={ imagePath } onChange={ this.handleChange } />
        <Storyline storyline={ storyline } onChange={ this.handleChange } />
        <Rating rating={ rating } onChange={ this.handleChange } />
        <Genre genre={ genre } onChange={ this.handleChange } />

        <button
          type="submit"
          data-testid="send-button"
          onClick={ this.handleClick }
        >
          Adicionar filme
        </button>

      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;

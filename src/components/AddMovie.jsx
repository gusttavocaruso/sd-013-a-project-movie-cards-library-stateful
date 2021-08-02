import React from 'react';
import PropTypes from 'prop-types';
import TitleAndSubtitle from './TitleAndSubtitle';
import ImageAndStoryline from './ImageAndStoryline';
import RatingAndGenre from './RatingAndGenre';

class AddMovie extends React.Component {
  constructor() {
    super();

    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    if (name === 'rating') parseInt(value, 10);
    this.setState({
      [name]: value,
    });
  }

  onClick = () => {
    const { onClick } = this.props;
    onClick(this.state);
    this.setState({
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form className="add-movie" data-testid="add-movie-form">
        <TitleAndSubtitle
          title={ title }
          subtitle={ subtitle }
          onChange={ this.handleChange }
        />
        <ImageAndStoryline
          imagePath={ imagePath }
          storyline={ storyline }
          onChange={ this.handleChange }
        />
        <RatingAndGenre
          rating={ rating }
          genre={ genre }
          onChange={ this.handleChange }
        />
        <button
          type="button"
          data-testid="send-button"
          onClick={ this.onClick }
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

import React from 'react';
import PropTypes from 'prop-types';
import TitleChange from './TitleChange';
import SubtitleChange from './SubtitleChange';
import ImageChange from './ImageChange';
import StoryLineChange from './StoryLineChange';
import RatingChange from './RatingChange';
import GenreChange from './GenreChange';
import ButtonChange from './ButtonChange';

class AddMovie extends React.Component {
  constructor() {
    super();

    // const { onClick } = this.props;

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  handleClick = (event) => {
    const { onClick } = this.props;
    event.preventDefault();
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

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const {
      title,
      subtitle,
      imagePath,
      storyline,
      rating,
      genre,
    } = this.state;

    return (
      <form
        data-testid="add-movie-form"
      >
        <TitleChange
          title={ title }
          onChange={ this.handleChange }
        />
        <SubtitleChange
          subtitle={ subtitle }
          onChange={ this.handleChange }
        />
        <ImageChange
          imagePath={ imagePath }
          onChange={ this.handleChange }
        />
        <StoryLineChange
          storyline={ storyline }
          onChange={ this.handleChange }
        />
        <RatingChange
          rating={ rating }
          onChange={ this.handleChange }
        />
        <GenreChange
          genre={ genre }
          onChange={ this.handleChange }
        />
        <ButtonChange
          onClick={ this.handleClick }
        />
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func,
};

AddMovie.defaultProps = {
  onClick: [],
};

export default AddMovie;

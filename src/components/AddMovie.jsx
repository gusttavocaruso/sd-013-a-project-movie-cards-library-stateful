// implement AddMovie component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ContentCard from './ContentCard';
import HeaderCard from './HeaderCard';
import GenreSelect from './GenreSelect';

const initState = {
  subtitle: '',
  title: '',
  imagePath: '',
  storyline: '',
  rating: 0,
  genre: 'action',
};

export default class AddMovie extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = initState;
  }

handleChange = (e) => {
  this.setState({
    [e.target.name]: e.target.value,
  });
}

  handleChangeRating = (e) => {
    this.setState({ rating: e.target.value,
    });
  }

  HandleAddMovie = () => {
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
    const { title, subtitle, imagePath, storyline, genre, rating } = this.state;
    return (
      <form data-testid="add-movie-form">
        <HeaderCard
          title={ title }
          subtitle={ subtitle }
          handleChange={ this.handleChange }
        />
        <ContentCard
          imagePath={ imagePath }
          rating={ rating }
          storyline={ storyline }
          handleChange={ this.handleChange }
        />
        <GenreSelect genre={ genre } handleChange={ this.handleChange } />
        <button type="submit" data-testid="send-button" onClick={ this.HandleAddMovie }>
          Adicionar filme
        </button>
      </form>
    );
  }
}
AddMovie.propTypes = {
  onClick: PropTypes.func,
}; AddMovie.defaultProps = {
  onClick: null,
};

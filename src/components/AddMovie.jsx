import React from 'react';
import PropTypes from 'prop-types';
import Title from './Title';
import Subtitle from './Subtitle';
import Image from './Image';
import Storyline from './Storyline';
import Stars from './Stars';
import Genre from './Genre';

const initialState = {
  subtitle: '',
  title: '',
  imagePath: '',
  storyline: '',
  rating: 0,
  genre: 'action',
};
class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  updateState = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  handleClick = (event) => {
    event.preventDefault();
    const { onClick } = this.props;
    onClick({ ...this.state });
    this.setState(initialState);
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <Title title={ title } updateState={ this.updateState } />
        <Subtitle subtitle={ subtitle } updateState={ this.updateState } />
        <Image imagePath={ imagePath } updateState={ this.updateState } />
        <Storyline storyline={ storyline } updateState={ this.updateState } />
        <Stars rating={ rating } updateState={ this.updateState } />
        <Genre genre={ genre } updateState={ this.updateState } />

        <button type="submit" onClick={ this.handleClick } data-testid="send-button">
          Adicionar filme
        </button>
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func,
};

AddMovie.defaultProps = {
  onClick: () => { },
};

export default AddMovie;

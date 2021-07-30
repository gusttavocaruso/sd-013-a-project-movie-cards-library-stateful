import React from 'react';
import PropTypes from 'prop-types';
import LabelTitle from './LabelTitle';
import LabelSubtitle from './LabelSubtitle';
import LabelImage from './LabelImage';
import LabelTextarea from './LabelTextearea';
import RatingLabel from './RatingLabel';
import GenreLabel from './GenreLabel';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  changeHandler = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  };

  changeHandlerTextarea = (e) => {
    this.setState({ storyline: e.target.value });
  };

  changeHandlerImage = (e) => {
    this.setState({ imagePath: e.target.value });
  };

  changeHandlerSelect = (e) => {
    this.setState({ genre: e.target.value });
  };

  clearData = () => {
    const initialState = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
    const { onClick } = this.props;
    onClick(this.state);
    this.setState(initialState);
  };

  render() {
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    return (
      <section>
        <form data-testid="add-movie-form">
          <LabelTitle value={ title } onChange={ this.changeHandler } />
          <LabelSubtitle value={ subtitle } onChange={ this.changeHandler } />
          <LabelImage value={ imagePath } onChange={ this.changeHandlerImage } />
          <LabelTextarea value={ storyline } onChange={ this.changeHandlerTextarea } />
          <RatingLabel value={ rating } onChange={ this.changeHandler } />
          <GenreLabel value={ genre } onChange={ this.changeHandlerSelect } />
        </form>
        <button
          type="button"
          data-testid="send-button"
          onClick={ () => this.clearData(this.state) }
        >
          Adicionar filme
        </button>
      </section>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;

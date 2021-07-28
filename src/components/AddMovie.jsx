import React from 'react';
import PropTypes from 'prop-types';
import TitleInput from './TitleInput';
import SubtitleInput from './SubstitleInput';
import ImageInput from './ImageInput';
import NumberInput from './NumberInput';
import StorylineInput from './StorylineInput';
import GenreInput from './GenreInput';

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

  HandleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  AddMovie = () => {
    const { onClick } = this.props;
    onClick(this.State);
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
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <TitleInput HandleChange={ this.HandleChange } componentValue={ title } />
        <SubtitleInput HandleChange={ this.HandleChange } componentValue={ subtitle } />
        <ImageInput HandleChange={ this.HandleChange } componentValue={ imagePath } />
        <NumberInput HandleChange={ this.HandleChange } componentValue={ rating } />
        <StorylineInput HandleChange={ this.HandleChange } componentValue={ storyline } />
        <GenreInput HandleChange={ this.HandleChange } componentValue={ genre } />
        <button
          type="submit"
          data-testid="send-button"
          onClick={ this.AddMovie }
        >
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
  onClick: null,
};

export default AddMovie;

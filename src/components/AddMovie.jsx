import React from 'react';
import PropTypes from 'prop-types';
import TitleComp from './formComponents/TitleComp';
import SubtitleComp from './formComponents/SubtitleComp';
import StoryLineComp from './formComponents/StorylineComp';
import ImageComp from './formComponents/ImageComp';
import RatingComp from './formComponents/RatingComp';
import GenreComp from './formComponents/GenreComp';

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

HandleOnChange = ((event) => {
  this.setState({
    [event.target.name]: event.target.value,
  });
})

HandleReset = () => {
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
  const { onClick } = this.props;
  return (
    <form data-testid="add-movie-form">
      <TitleComp value={ title } onChange={ this.HandleOnChange } />
      <SubtitleComp subtitle={ subtitle } onChange={ this.HandleOnChange } />
      <ImageComp
        imagePath={ imagePath }
        onChange={ this.HandleOnChange }
      />
      <StoryLineComp
        storyline={ storyline }
        onChange={ this.HandleOnChange }
      />
      <RatingComp value={ rating } onChange={ this.HandleOnChange } />
      <GenreComp value={ genre } onChange={ this.HandleOnChange } />
      <button
        type="submit"
        data-testid="send-button"
        onClick={ (event) => {
          event.preventDefault();
          this.HandleReset();
          onClick(this.state);
        } }
      // feito com a ajuda do meu grande colega - Lailson Gabriel - Turma 13-B;
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
  onClick: undefined,
};

export default AddMovie;

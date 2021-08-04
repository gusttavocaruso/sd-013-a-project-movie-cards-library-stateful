// implement AddMovie component here
import React from 'react';
import PropTypes from 'prop-types';
import InputImg from './Inputs/InputImg';
import InputRating from './Inputs/InputRating';
import InputSub from './Inputs/InputSub';
import InputTitle from './Inputs/InputTitle';

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

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

funOnClick = (event) => {
  event.preventDefault();
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
};

render() {
  const {
    subtitle,
    title,
    imagePath,
    storyline,
    rating,
    genre,
  } = this.state;
  return (
    <form data-testid="add-movie-form">
      <InputTitle onChange={ this.handleChange } title={ title } />
      <InputSub onChange={ this.handleChange } subtitle={ subtitle } />
      <InputImg onChange={ this.handleChange } imagePath={ imagePath } />
      <InputRating onChange={ this.handleChange } rating={ rating } />
      <label htmlFor="#" data-testid="genre-input-label">
        Gênero
        <select
          data-testid="genre-input"
          value={ genre }
          onChange={ this.handleChange }
          name="genre"
        >
          <option value="action" data-testid="genre-option">Ação</option>
          <option value="comedy" data-testid="genre-option">Comédia</option>
          <option value="thriller" data-testid="genre-option">Suspense</option>
        </select>
      </label>
      <label htmlFor="#" data-testid="storyline-input-label">
        Sinopse
        <textarea
          value={ storyline }
          data-testid="storyline-input"
          onChange={ this.handleChange }
          name="storyline"
        />
      </label>
      <button
        data-testid="send-button"
        onClick={ this.funOnClick }
        type="button"
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

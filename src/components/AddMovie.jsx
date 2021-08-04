// implement AddMovie component here
import React from 'react';
// import Proptypes from 'prop-types';
import Inputgene from './Inputgene';

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
      <Inputgene value={ title } name={ title } onChange={ this.handleChange } />
      <Inputgene value={ subtitle } name={ subtitle } onChange={ this.handleChange } />
      <Inputgene value={ imagePath } name={ imagePath } onChange={ this.handleChange } />
      <Inputgene
        value={ rating }
        type={ type }
        name={ rating }
        onChange={ this.handleChange }
      />
      <label htmlFor="#" data-testid="genre-input-label">
        <select data-testid="genre-input" value={ genre } onChange={ this.handleChange }>
          <option value="action" data-testid="genre-option">Ação</option>
          <option value="comedy" data-testid="genre-option">Comédia</option>
          <option value="thriller" data-testid="genre-option">Suspense</option>
        </select>
      </label>
      <label htmlFor="#" data-testid="storyline-input-label">
        <textarea
          value={ storyline }
          data-testid="storyline-input"
          onChange={ this.handleChange }
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

// AddMovie.propTypes = {
//   onClick: PropTypes.func.isRequired,
// };

export default AddMovie;

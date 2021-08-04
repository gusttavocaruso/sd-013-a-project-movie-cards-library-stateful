// implement AddMovie component here
import React from 'react';
import PropTypes from 'prop-types';

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

handleChange = (event) => {
  const { name, value } = event.target;
  this.setState({
    [name]: value,
  });
}

render() {
  const {
    subtitle, //guarda o subtítulo preenchido no formulário por quem usa a aplicação;
    title, //guarda o título preenchido no formulário por quem usa a aplicação;
    imagePath, //guarda o caminho da imagem preenchido no formulário por quem usa a aplicação;
    storyline, //guarda a sinopse do filme escrita no formulário por quem usa a aplicação;
    rating, //guarda a nota de avaliação dada no formulário por quem usa a aplicação;
    genre, //guarda o gênero do filme selecionado no formulário por quem usa a aplicação.
  } = this.state;
    return (
      <form data-testid="add-movie-form">
        <label htmlFor="input-title-move" data-testid="title-input-label">
          <input
            id="input-title-move"
            name="title"
            value={ title }
            data-testid="title-input"
            onChange={ this.handleChange }
          />
          Título
        </label>
        <label htmlFor="input-subtitle-move" data-testid="subtitle-input-label">
          <input
            id="input-subtitle-move"
            name="subtitle"
            value={ subtitle }
            data-testid="subtitle-input"
            onChange={ this.handleChange }
          />
          Subtítulo
        </label>
      </form>
    );
  }
}

AddMovie.propTypes = {
  subtitle: PropTypes.string,
  title: PropTypes.string,
  imagePath: PropTypes.string,
  storyline: PropTypes.string,
  rating: PropTypes.number,
  genre: PropTypes.string,
};

export default AddMovie;
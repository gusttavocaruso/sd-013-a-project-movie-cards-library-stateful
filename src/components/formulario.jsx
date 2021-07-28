import React from 'react';
import PropTypes from 'prop-types';
import TextAreaAdd from './TextAreaAdd';
import Button from './Button';

class Formulario extends React.Component {
  render() {
    const { title, subtitle, imagePath, rating } = this.props;
    const { genre, storyline, handleChange, onClick } = this.props;
    return (
      <section>
        <form data-testid="add-movie-form" action="">
          <label data-testid="title-input-label" htmlFor="title">
            Título
            <input
              name="title"
              type="text"
              id="title"
              value={ title }
              data-testid="title-input"
              onChange={ handleChange }
            />
          </label>
          <label data-testid="subtitle-input-label" htmlFor="subtitle">
            Subtítulo
            <input
              name="subtitle"
              type="text"
              id="subtitle"
              value={ subtitle }
              data-testid="subtitle-input"
              onChange={ handleChange }
            />
          </label>
          <label data-testid="image-input-label" htmlFor="imagem">
            Imagem
            <input
              name="imagePath"
              id="imagem"
              type="text"
              value={ imagePath }
              data-testid="image-input"
              onChange={ handleChange }
            />
          </label>
          <TextAreaAdd
            handleChange={ handleChange }
            rating={ rating }
            genre={ genre }
            storyline={ storyline }
          />
          <Button onClick={ onClick } />
        </form>
      </section>
    );
  }
}

Formulario.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  imagePath: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  genre: PropTypes.string.isRequired,
  storyline: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Formulario;

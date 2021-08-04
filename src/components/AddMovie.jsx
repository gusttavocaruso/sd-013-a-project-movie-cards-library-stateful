import React from 'react';
import PropTypes from 'prop-types';
import TitleAndSubtitle from './TitleAndSubtitle';
import ImageAndStory from './ImageAndStory';
import RatingAndGenre from './RatingAndGenre';

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
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleClick(event) {
    event.preventDefault();
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
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <div>
        <form data-testid="add-movie-form">
          <TitleAndSubtitle
            title={ title }
            subtitle={ subtitle }
            onChange={ this.handleChange }
          />
          <ImageAndStory
            imagePath={ imagePath }
            storyline={ storyline }
            onChange={ this.handleChange }
          />
          <RatingAndGenre
            rating={ rating }
            genre={ genre }
            onChange={ this.handleChange }
          />
          <button
            type="submit"
            data-testid="send-button"
            onClick={ this.handleClick }
          >
            Adicionar filme
          </button>
        </form>
      </div>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;

/* Referências: Aula ao vivo 12.2 disponível no course, Repositório de aulas ao vivo para
estudantes da Turma 13 - Tribo A e pesssoa estudante Isabella Antunes Turma 13 - tribo A
Links utilizados:
https://github.com/tryber/sd-13a-live-lectures/blob/lecture/12.2/form/src/components/LoginForm.js
https://github.com/tryber/sd-13a-live-lectures/blob/lecture/12.2/form/src/components/LoginInput.js

Referência para a função invocada pela propriedade onClick do botão: Vídeo e repositório
da Revisão do Bloco 12, realizada pelo instrutor Eduardo Santos.
Link utilizado:
https://github.com/EduardoSantosF/revisao-bloco-12/blob/solucao-T13-A/src/components/NewProduct.js
*/

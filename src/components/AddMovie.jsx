import React from 'react';
import TitleAndSubtitle from './TitleAndSubtitle';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      // rating: 0,
      // genre: 'action',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { title, subtitle, imagePath, storyline } = this.state;
    return (
      <div>
        <form data-testid="add-movie-form">
          <TitleAndSubtitle
            title={ title }
            subtitle={ subtitle }
            onChange={ this.handleChange }
          />
          <label htmlFor="new-img" data-testid="image-input-label">
            Imagem
            <input
              type="text"
              name="imagePath"
              id="new-img"
              data-testid="image-input"
              onChange={ this.handleChange }
              value={ imagePath }
            />
          </label>
          <label htmlFor="text-area" data-testid="storyline-input-label">
            Sinopse
            <input
              type="textarea"
              name="storyline"
              id="text-area"
              data-testid="storyline-input"
              onChange={ this.handleChange }
              value={ storyline }
            />
          </label>
        </form>
      </div>
    );
  }
}

export default AddMovie;

/* Referências: Aula ao vivo 12.2 disponível no course, Repositório de aulas ao vivo para
estudantes da Turma 13 - Tribo A e pesssoa estudante Isabella Antunes Turma 13 - tribo A
Links utilizados:
https://github.com/tryber/sd-13a-live-lectures/blob/lecture/12.2/form/src/components/LoginForm.js
https://github.com/tryber/sd-13a-live-lectures/blob/lecture/12.2/form/src/components/LoginInput.js
*/

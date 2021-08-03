import React from 'react';
import PropTypes from 'prop-types';

class ImageAndStory extends React.Component {
  render() {
    const { imagePath, storyline, onChange } = this.props;
    return (
      <div>
        <label htmlFor="new-img" data-testid="image-input-label">
          Imagem
          <input
            type="text"
            name="imagePath"
            id="new-img"
            data-testid="image-input"
            onChange={ onChange }
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
            onChange={ onChange }
            value={ storyline }
          />
        </label>

      </div>
    );
  }
}

ImageAndStory.propTypes = {
  imagePath: PropTypes.string.isRequired,
  storyline: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default ImageAndStory;

/* Referências: Aula ao vivo 12.2 disponível no course, Repositório de aulas ao vivo para
estudantes da Turma 13 - Tribo A e pesssoa estudante Isabella Antunes Turma 13 - tribo A
Links utilizados:
https://github.com/tryber/sd-13a-live-lectures/blob/lecture/12.2/form/src/components/LoginForm.js
https://github.com/tryber/sd-13a-live-lectures/blob/lecture/12.2/form/src/components/LoginInput.js
*/

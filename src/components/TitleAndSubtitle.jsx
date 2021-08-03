import React from 'react';
import PropTypes from 'prop-types';

class TitleAndSubtitle extends React.Component {
  render() {
    const { title, subtitle, onChange } = this.props;
    return (
      <div>
        <label htmlFor="new-movie" data-testid="title-input-label">
          Título
          <input
            type="text"
            name="title"
            id="new-movie"
            data-testid="title-input"
            onChange={ onChange }
            value={ title }
          />
        </label>
        <label htmlFor="new-subtitle" data-testid="subtitle-input-label">
          Subtítulo
          <input
            type="text"
            name="subtitle"
            id="new-subtitle"
            data-testid="subtitle-input"
            onChange={ onChange }
            value={ subtitle }
          />
        </label>
      </div>
    );
  }
}

TitleAndSubtitle.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default TitleAndSubtitle;

/* Referências: Aula ao vivo 12.2 disponível no course, Repositório de aulas ao vivo para
estudantes da Turma 13 - Tribo A e pesssoa estudante Isabella Antunes Turma 13 - tribo A
Links utilizados:
https://github.com/tryber/sd-13a-live-lectures/blob/lecture/12.2/form/src/components/LoginForm.js
https://github.com/tryber/sd-13a-live-lectures/blob/lecture/12.2/form/src/components/LoginInput.js
*/

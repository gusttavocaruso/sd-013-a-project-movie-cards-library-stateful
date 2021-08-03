import React from 'react';
import PropTypes from 'prop-types';

class Number extends React.Component {
  render() {
    const { rating, onChange } = this.props;
    return (
      <div>
        <label htmlFor="rating" data-testid="rating-input-label">
          Avaliação
          <input
            type="number"
            name="rating"
            id="rating"
            data-testid="rating-input"
            onChange={ onChange }
            value={ rating }
          />
        </label>
      </div>
    );
  }
}

Number.propTypes = {
  rating: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Number;

/* Referências: Aula ao vivo 12.2 disponível no course, Repositório de aulas ao vivo para
estudantes da Turma 13 - Tribo A e pesssoa estudante Isabella Antunes Turma 13 - tribo A
Links utilizados:
https://github.com/tryber/sd-13a-live-lectures/blob/lecture/12.2/form/src/components/LoginForm.js
https://github.com/tryber/sd-13a-live-lectures/blob/lecture/12.2/form/src/components/LoginInput.js
*/

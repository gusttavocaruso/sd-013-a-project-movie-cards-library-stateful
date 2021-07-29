import React from 'react';
import Input from './Input';
import Textarea from './Textarea';

class FormAdd extends React.Component {
  inputsInfo() {
    const { state } = this.props;
    const { title, subtitle, imagePath } = state;

    return [
      {
        label: 'Título',
        name: 'title',
        value: title,
        onChange: this.handleInputChange,
        testid: 'title-input',
      },
      {
        label: 'Subtítulo',
        name: 'subtitle',
        value: subtitle,
        onChange: this.handleInputChange,
        testid: 'subtitle-input',
      },
      {
        label: 'Imagem',
        name: 'imagePath',
        value: imagePath,
        onChange: this.handleInputChange,
        testid: 'image-input',
      },
    ];
  }

  render() {
    const { clickHandler, changeHandler, state } = this.props;
    const { storyline, rating, genre } = state;

    return (
      <form data-testid="add-movie-form">
        {this.inputsInfo().map(({ label, name, value, testid }) => (
          <Input
            key={ testid }
            label={ label }
            name={ name }
            value={ value }
            onChange={ changeHandler }
            testid={ testid }
          />
        ))}
        <Textarea
          label="Sinopse"
          name="storyline"
          value={ storyline }
          onChange={ changeHandler }
        />
        <label htmlFor="rating" data-testid="rating-input-label">
          Avaliação
          <input
            id="rating"
            name="rating"
            type="number"
            value={ rating }
            onChange={ changeHandler }
            data-testid="rating-input"
          />
        </label>
        <label htmlFor="genre" data-testid="genre-input-label">
          Gênero
          <select
            id="genre"
            name="genre"
            value={ genre }
            onChange={ changeHandler }
            data-testid="genre-input"
          >
            <option value="action" data-testid="genre-option">Ação</option>
            <option value="comedy" data-testid="genre-option">Comédia</option>
            <option value="thriller" data-testid="genre-option">Suspense</option>
          </select>
        </label>
        <button onClick={ clickHandler } data-testid="send-button">
          Adicionar filme
        </button>
      </form>
    );
  }
}

export default FormAdd;

import React from 'react';

import InputNumber from './Form/InputNumber';
import InputSelect from './Form/InputSelect';
import InputText from './Form/InputText';
import InputTextarea from './Form/InputTextarea';

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
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target: { name, value } }) {
    this.setState({
      [name]: value,
    });
  }

  generateInput(type, informations, fn) {
    const { testId, name, value, label, options = [] } = informations;
    const inputToChoose = {
      text:
  <InputText testId={ testId } name={ name } value={ value } onChange={ fn }>
    { label }
  </InputText>,
      number:
  <InputNumber testId={ testId } name={ name } value={ value } onChange={ fn }>
    { label }
  </InputNumber>,
      textarea:
  <InputTextarea testId={ testId } name={ name } value={ value } onChange={ fn }>
    { label }
  </InputTextarea>,
      select:
  <InputSelect
    testId={ testId }
    name={ name }
    value={ value }
    onChange={ fn }
    options={ options }
  >
    {label}
  </InputSelect>,
    };
    return inputToChoose[type];
  }

  render() {
    const { handleChange, generateInput, state } = this;
    const { subtitle, title, imagePath, storyline, rating, genre } = state;
    const texts = [
      { testId: 'title-input', name: 'title', value: title, label: 'Título' },
      { testId: 'subtitle-input', name: 'subtitle', value: subtitle, label: 'Subtítulo' },
      { testId: 'image-input', name: 'imagePath', value: imagePath, label: 'Imagem' },
    ];
    const numbers = [{ testId: 'rating-input',
      name: 'rating',
      value: rating,
      label: 'Avaliação' }];
    const textareas = [{ testId: 'storyline-input',
      name: 'storyline',
      value: storyline,
      label: 'Sinopse' },
    ];
    const genres = [
      { text: 'Ação', value: 'action' },
      { text: 'Comédia', value: 'comedy' },
      { text: 'Suspense', value: 'thriller' },
    ];
    const selects = [{ testId: 'genre-input',
      name: 'genre',
      value: genre,
      label: 'Gênero',
      options: { info: genres,
        name: 'genre' } }];
    return (
      <form data-testid="add-movie-form">
        {texts.map((i) => generateInput('text', i, handleChange))}
        {numbers.map((i) => generateInput('number', i, handleChange))}
        {textareas.map((i) => generateInput('textarea', i, handleChange))}
        {selects.map((i) => generateInput('select', i, handleChange))}
      </form>
    );
  }
}

export default AddMovie;

import React from 'react';
import PropTypes from 'prop-types';

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
    // LINK https://medium.com/@justintulk/best-practices-for-resetting-an-es6-react-components-state-81c0c86df98d
    this.baseState = this.state;
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.resetState = this.resetState.bind(this);
  }

  handleChange({ target: { name, value } }) {
    this.setState({
      [name]: value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.resetState();
  }

  resetState() {
    this.setState(this.baseState);
  }

  generateInput(type, informations, index, fn) {
    const { testId, name, value, label, options = [] } = informations;
    const inputToChoose = {
      text:
  <InputText
    key={ `${index}-${testId}` }
    testId={ testId }
    name={ name }
    value={ value }
    onChange={ fn }
  >
    { label }
  </InputText>,
      number:
  <InputNumber
    key={ `${index}-${testId}` }
    testId={ testId }
    name={ name }
    value={ value }
    onChange={ fn }
  >
    { label }
  </InputNumber>,
      textarea:
  <InputTextarea
    key={ `${index}-${testId}` }
    testId={ testId }
    name={ name }
    value={ value }
    onChange={ fn }
  >
    { label }
  </InputTextarea>,
      select:
  <InputSelect
    key={ `${index}-${testId}` }
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
    const { handleChange, handleSubmit, generateInput, state, props } = this;
    const { onClick } = props;
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
      options: { info: genres, name: 'genre' } },
    ];
    return (
      <form onSubmit={ handleSubmit } data-testid="add-movie-form">
        {texts.map((info, i) => generateInput('text', info, i, handleChange))}
        {numbers.map((info, i) => generateInput('number', info, i, handleChange))}
        {textareas.map((info, i) => generateInput('textarea', info, i, handleChange))}
        {selects.map((info, i) => generateInput('select', info, i, handleChange))}
        <button
          data-testid="send-button"
          type="submit"
          onClick={ () => onClick(this.state) }
        >
          Adicionar filme
        </button>
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;

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

  // eslint-disable-next-line max-lines-per-function
  render() {
    const { handleChange, state } = this;
    const { subtitle, title, imagePath, storyline, rating, genre } = state;
    return (
      <form data-testid="add-movie-form">
        <InputText
          testId="title-input"
          name="title"
          value={ title }
          onChange={ handleChange }
        >
          Título
        </InputText>
        <InputText
          testId="subtitle-input"
          name="subtitle"
          value={ subtitle }
          onChange={ handleChange }
        >
          Subtítulo
        </InputText>
        <InputText
          testId="image-input"
          name="imagePath"
          value={ imagePath }
          onChange={ handleChange }
        >
          Imagem
        </InputText>
        <InputNumber
          testId="rating-input"
          name="rating"
          value={ rating }
          onChange={ handleChange }
        >
          Avaliação
        </InputNumber>
        <InputTextarea
          testId="storyline-input"
          name="storyline"
          value={ storyline }
          onChange={ handleChange }
        >
          Sinopse
        </InputTextarea>
        <InputSelect
          testId="genre-input"
          name="genre"
          value={ genre }
          onChange={ handleChange }
          options={ { info: [
            { text: 'Ação', value: 'action' },
            { text: 'Comédia', value: 'comedy' },
            { text: 'Suspense', value: 'thriller' },
          ],
          name: 'genre' } }
        >
          Gênero
        </InputSelect>
      </form>
    );
  }
}

export default AddMovie;

import React from 'react';
import FormAddMovie from './FormAddMovie';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      handleChange: ({ target }) => {
        const { name, value } = target;
        this.setState({ [name]: value });
      },
      handleSubmite: (e) => {
        console.log('clicou');
        e.preventDefault();
        this.setState(
          {
            title: '',
            subtitle: '',
            imagePath: '',
            storyline: '',
            rating: 0,
          },
        );
      },
    };
  }

  render() {
    const {
      title,
      subtitle,
      imagePath,
      storyline,
      rating,
      handleChange,
      handleSubmite } = this.state;
    return (
      <section>
        <form data-testid="add-movie-form">
          <label htmlFor="title-input" data-testid="title-input-label">
            Título
            <input
              name="title"
              type="text"
              value={ title }
              data-testid="title-input"
              onChange={ handleChange }
            />
          </label>
          <label htmlFor="subtitle-input" data-testid="subtitle-input-label">
            Subtítulo
            <input
              type="text"
              name="subtitle"
              value={ subtitle }
              data-testid="subtitle-input"
              onChange={ handleChange }
            />
          </label>
          <FormAddMovie
            imagePath={ imagePath }
            storyline={ storyline }
            rating={ rating }
            handleChange={ handleChange }
          />
          <button
            type="submit"
            data-testid="send-button"
            onClick={ handleSubmite }
          >
            Adicionar filme
          </button>
        </form>
      </section>
    );
  }
}

export default AddMovie;

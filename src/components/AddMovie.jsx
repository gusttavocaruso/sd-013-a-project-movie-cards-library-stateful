import React from 'react';

class AddMovie extends React.Component {
/*   constructor(props) {
    super(props);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      raiting: 0,
      genre: 'action',
    };
  }  */

  render() {
    return (
      <form data-testid="add-movie-form">
        <label htmlFor="subtitle" data-testid="subtitle-input-label">
          Subtítulo
          <input
            type="text"
            data-testid="subtitle-input"
          />
        </label>
        <label data-testid="title-input-label" htmlFor="title">
          Título
          <input
            type="text"
            data-testid="title-input"
          />
        </label>
        <label htmlFor="imagem" data-testid="image-input-label">
          Caminho da Imagem
          <input
            type="text"
            data-testid="image-input"
          />
        </label>
        <label htmlFor="sinopse" data-testid="storyline-input-label">
          Sinopse
          <input
            type="text"
            data-testid="storyline-input"
          />
        </label>
        <label htmlFor="avaliação" data-testid="rating-input-label">
          Avaliação
          <input
            type="number"
            data-testid="rating-input"
            defaultValue={ 0 }
          />
        </label>
        <label htmlFor="gênero">
          Genêro
          <input
            type="text"
          />
        </label>
      </form>
    );
  }
}

export default AddMovie;

// Os htmlFor em cada label é para evitar o erro no lint "A form label must be associated with a control"
// Na linha 52 utilizei o defaultValue para definir um valor padrão, apenas o value define o valor atual após mudanças.

// implement AddMovie component here
import React from 'react';

class AddMovie extends React.Component {
  constructor() {
    super();

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  onChangeText = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  onClickAddMovie = () => {
    const { onClick } = this.props;
    onClick();
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    })
  }
  
  render() {
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <label data-testid="title-input-label">Título
          <input type='text' name='title' data-testid="title-input"
            value={ title } onChange={ this.onChangeText }>
          </input>
        </label>
        <label data-testid="subtitle-input-label">Subtítulo
          <input type='text' name='subtitle' data-testid="subtitle-input"
            value={ subtitle } onChange={ this.onChangeText }>
          </input>
        </label>
        <label data-testid="image-input-label">Imagem
          <input type='text' name='imagePath' data-testid="image-input"
            value={ imagePath } onChange={ this.onChangeText }>
          </input>
        </label>
        <label data-testid="storyline-input-label">Sinopse
          <textarea name='storyline' data-testid="storyline-input"
            value={ storyline } onChange={ this.onChangeText }>
          </textarea>
        </label>
        <label data-testid="rating-input-label">Avaliação
          <input type='number' name='rating' data-testid="rating-input"
            value={ rating } onChange={ this.onChangeText }>
          </input>
        </label>
        <label data-testid="genre-input-label">Gênero
          <select data-testid="genre-input" name='genre'
            value={ genre } onChange={ this.onChangeText }>
            <option data-testid="genre-option" value='action'>Ação</option>
            <option data-testid="genre-option" value='comedy'>Comédia</option>
            <option data-testid="genre-option" value='thriller'>Suspense</option>
          </select>
        </label>
        <button data-testid="send-button" onClick={ this.onClickAddMovie }>
          Adicionar filme
        </button>    
      </form>
    );
  }
}

export default AddMovie;

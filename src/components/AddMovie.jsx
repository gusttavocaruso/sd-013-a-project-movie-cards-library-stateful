// implement AddMovie component here
import React, { Component } from 'react';

class AddMovie extends Component {
  constructor(propos) {
    super();

    this.state = {
      subtitle: '', // guarda o subtítulo preenchido no formulário por quem usa a aplicação;
      title: '', // guarda o título preenchido no formulário por quem usa a aplicação;
      imagePath: '', // guarda o caminho da imagem preenchido no formulário por quem usa a aplicação;
      storyline: '', // guarda a sinopse do filme escrita no formulário por quem usa a aplicação;
      rating: 0, // guarda a nota de avaliação dada no formulário por quem usa a aplicação;
      genre: 'action', // guarda o gênero do filme selecionado no formulário por quem usa a aplicação.

    };
  }

    onclick = (event) => {
      console.log(event);
    }
    //função para atualizar state
    handleChange = (event) => {
        console.log(event.target.className)
        this.setState({
            [event.target.className]: event.target.value,
        });
    }

    render() {
      const { value, name } = this.props;
      return (
        <form action="">
          <label htmlFor="title" data-testid="title-input-label">
            Título:
            <input className="title" data-testid="title-input" type="text"
              onChange ={this.handleChange}
            />
          </label>

          <label htmlFor="subtitle" data-testid="subtitle-input-label">
            Subtítulo:
            <input className="subtitle" type="text" data-testid="subtitle-input"
            // onChange =
            />
          </label>

          <label htmlFor="imagePath" data-testid="image-input-label">
            Imagem:
            <input type="text" className="imagePath" data-testid="image-input"
            //   onChange=
            />
          </label>
          <label htmlFor="storyline" data-testid="storyline-input-label">
            Sinopse:
            <textarea className="storyline" name="" id="" data-testid="storyline-input" />
          </label>

          <label htmlFor="genre" data-testid="genre-input-label">
            Gênero:
            <select className="genre" data-testid="select-input"
            //   onChange={ this.onSelectedGenreChange }
            //   value={ this.selectedGenre }
            >
              <option data-testid="genre-option" value="action">Ação</option>
              <option data-testid="genre-option" value="comedy">Comédia</option>
              <option data-testid="genre-option" value="thriller">Suspense</option>
            </select>
          </label>

          <button data-testid="send-button"
            // onClick=
          >
            Adicionar filme:
          </button>

        </form>
      );
    }
}

export default AddMovie;

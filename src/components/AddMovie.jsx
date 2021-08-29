import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from './forms/input';
import TextArea from './forms/TextArea';

class AddMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  AddGenre = () => {
    const { genre } = this.state;
    return (
      <label
        data-testid="genre-input-label"
        htmlFor="genre"
      >
        Gênero
        <select
          data-testid="genre-input"
          name="genre"
          id="selectGenreBox"
          value={ genre }
          onChange={ this.handleChange }
        >
          <option
            value="action"
            data-testid="genre-option"
          >
            Ação
          </option>
          <option
            value="comedy"
            data-testid="genre-option"
          >
            Comédia
          </option>
          <option
            value="thriller"
            data-testid="genre-option"
          >
            Suspense
          </option>
        </select>

      </label>
    );
  }

  OnClickFunc = (e) => {
    const { onClick } = this.props;
    e.preventDefault();
    onClick(this.state);
    this.setState({
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  };

  ButtonAdd = () => (
    <button
      data-testid="send-button"
      type="submit"
      value="Submit"
      onClick={ this.OnClickFunc }
    >
      Adicionar filme

    </button>
  )

  render() {
    const { title, subtitle, imagePath, storyline, rating } = this.state;
    return (
      <form
        data-testid="add-movie-form"
      >
        <Input
          labelText="Título"
          id="title"
          dataTestId="title-input"
          type="text"
          value={ title }
          onChange={ this.handleChange }
        />
        <Input
          labelText="Subtítulo"
          id="subtitle"
          dataTestId="subtitle-input"
          type="text"
          value={ subtitle }
          onChange={ this.handleChange }
        />
        <Input
          labelText="Imagem"
          id="imagePath"
          dataTestId="image-input"
          type="text"
          value={ imagePath }
          onChange={ this.handleChange }
        />
        <Input
          labelText="Avaliação"
          id="rating"
          dataTestId="rating-input"
          type="number"
          value={ rating }
          onChange={ this.handleChange }
        />
        <TextArea
          labelText="Sinopse"
          id="storyline"
          dataTestId="storyline-input"
          value={ storyline }
          onChange={ this.handleChange }
        />
        {this.AddGenre()}
        {this.ButtonAdd()}
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;

import React from 'react';
import PropTypes from 'prop-types';
import TextInput from './TextInput';

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
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.getData = this.getData.bind(this);
  }

  handleClick(event) {
    event.preventDefault();
    const { onClick } = this.props;
    onClick(this.state);
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  handleChange(event) {
    const { value, name } = event.target;
    this.setState({
      [name]: value,
    });
  }

  getData() {
    const { subtitle, title, imagePath } = this.state;
    return [
      {
        id: 1,
        testLabel: 'title-input-label',
        testId: 'title-input',
        text: 'Título',
        name: 'title',
        value: title,
        handleChange: this.handleChange,
      },
      {
        id: 2,
        testLabel: 'subtitle-input-label',
        testId: 'subtitle-input',
        text: 'Subtítulo',
        name: 'subtitle',
        value: subtitle,
        handleChange: this.handleChange,
      },
      {
        id: 3,
        testLabel: 'image-input-label',
        testId: 'image-input',
        text: 'Imagem',
        name: 'imagePath',
        value: imagePath,
        handleChange: this.handleChange,
      },
    ];
  }

  render() {
    const { storyline, rating, genre } = this.state;
    return (
      <form action="title-input" data-testid="add-movie-form">
        {
          this.getData().map((elem) => <TextInput key={ elem.id } data={ elem } />)
        }
        <label htmlFor="story-input" data-testid="storyline-input-label">
          Sinopse
          <textarea
            name="storyline"
            id="story-input"
            cols="30"
            rows="10"
            data-testid="storyline-input"
            value={ storyline }
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="rating-input" data-testid="rating-input-label">
          Avaliação
          <input
            type="number"
            id="rating-input"
            name="rating"
            data-testid="rating-input"
            value={ rating }
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="genre-input" data-testid="genre-input-label">
          Gênero
          <select
            name="genre"
            id="genre-input"
            data-testid="genre-input"
            value={ genre }
            onChange={ this.handleChange }
          >
            <option value="action" data-testid="genre-option">Ação</option>
            <option value="comedy" data-testid="genre-option">Comédia</option>
            <option value="thriller" data-testid="genre-option">Suspense</option>
          </select>
        </label>
        <button type="submit" data-testid="send-button" onClick={ this.handleClick }>
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

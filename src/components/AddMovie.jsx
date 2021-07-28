import React from 'react';
import PropTypes from 'prop-types';
import TextAreaAdd from './TextAreaAdd';
import Button from './Button';

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

  handleChange = (e) => {
    const { target: { id } } = e;
    this.setState = {
      [id]: e.target.value,
    };
  }

  render() {
    const { onChange } = this.props;
    const { title, subtitle, imagePath, rating, genre, storyline } = this.state;
    return (
      <section>
        <form data-testid="add-movie-form" action="">
          <label data-testid="title-input-label" htmlFor="title">
            Título
            <input
              type="text"
              id="title"
              value={ title }
              data-testid="title-input"
              onChange={ this.handleChange }
            />
          </label>
          <label data-testid="subtitle-input-label" htmlFor="subtitle">
            Subtítulo
            <input
              type="text"
              id="subtitle"
              value={ subtitle }
              data-testid="subtitle-input"
              onChange={ this.handleChange }
            />
          </label>
          <label data-testid="image-input-label" htmlFor="imagem">
            Imagem
            <input
              id="imagem"
              type="text"
              value={ imagePath }
              data-testid="image-input"
              onChange={ this.handleChange }
            />
          </label>
          <TextAreaAdd
            handleChange={ this.handleChange }
            rating={ rating }
            genre={ genre }
            storyline={ storyline }
          />
          <Button />
        </form>
      </section>
    );
  }
}

export default AddMovie;

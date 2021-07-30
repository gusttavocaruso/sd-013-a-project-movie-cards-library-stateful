import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { inputField, selectField } from '../util/AddFormField';

class AddMovie extends Component {
  constructor(props) {
    super(props);
    this.changeStateProperty = this.changeStateProperty.bind(this);
    this.initialState = this.initialState.bind(this);
    this.onClick = this.onClick.bind(this);
    this.state = this.initialState();
  }

  initialState = () => ({
    subtitle: '',
    title: '',
    imagePath: '',
    storyline: '',
    rating: 0,
    genre: 'action',
  });

  onClick = (e) => {
    e.preventDefault();
    const { onClick } = this.props;
    onClick(this.state);
    this.setState(this.initialState);
  };

  changeStateProperty = (e) => {
    const property = e.target.getAttribute('property');
    this.setState({ [property]: e.target.value });
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        {inputField({ title: 'Título', prop: 'title', name: 'title' },
          'text', title, this.changeStateProperty)}

        {inputField({ title: 'Subtítulo', prop: 'subtitle', name: 'subtitle' },
          'text', subtitle, this.changeStateProperty)}

        {inputField({ title: 'Imagem', prop: 'imagePath', name: 'image' },
          'text', imagePath, this.changeStateProperty)}

        {inputField({ title: 'Sinopse', prop: 'storyline', name: 'storyline' },
          'text', storyline, this.changeStateProperty)}

        {inputField({ title: 'Avaliação', prop: 'rating', name: 'rating' },
          'number', rating, this.changeStateProperty)}

        {selectField({ title: 'Gênero', prop: 'genre', name: 'genre' },
          genre, this.changeStateProperty,
          [{ value: 'action', name: 'Ação' },
            { value: 'comedy', name: 'Comédia' },
            { value: 'thriller', name: 'Suspense' }]) }

        <button data-testid="send-button" onClick={ this.onClick } type="submit">
          Adicionar filme
        </button>
      </form>
    );
  }
}

AddMovie.propTypes = { onClick: PropTypes.func.isRequired };

export default AddMovie;

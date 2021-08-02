import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { inputField, selectField } from '../util/AddFormField';

class AddMovie extends Component {
  constructor(props) {
    super(props);
    this.changeStateProperty = this.changeStateProperty.bind(this);
    this.initialState = this.initialState.bind(this);
    this.addNewMovie = this.addNewMovie.bind(this);
    this.state = this.initialState();
    this.eventPreventSubmit = this.eventPreventSubmit.bind(this);
  }

  initialState = () => ({
    title: '',
    subtitle: '',
    storyline: '',
    rating: 0,
    imagePath: '',
    bookmarked: false,
    genre: 'action',
  });

  addNewMovie = (e) => {
    e.preventDefault();
    const { newMovie } = this.props;
    newMovie(this.state);
  };

  changeStateProperty = (e) => {
    const property = e.target.getAttribute('property');
    this.setState({ [property]: e.target.value });
  }

  eventPreventSubmit = (e) => e.preventDefault();

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form" onSubmit={ this.eventPreventSubmit }>
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

        <button data-testid="send-button" onClick={ this.addNewMovie } type="submit">
          Adicionar filme
        </button>
      </form>
    );
  }
}

AddMovie.propTypes = { newMovie: PropTypes.func.isRequired };

export default AddMovie;

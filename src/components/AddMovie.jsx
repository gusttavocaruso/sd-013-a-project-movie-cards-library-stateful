// implement AddMovie component here

import React from 'react';
import PropTypes from 'prop-types';
import Input from './Input';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.resetState = this.resetState.bind(this);

    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  resetState() {
    this.setState({
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  render() {
    const { onClick } = this.props;
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    const inputs = [
      { value: title, id: 'title', label: 'Título' },
      { value: subtitle, id: 'subtitle', label: 'Subtítulo' },
      { value: imagePath, id: 'image', name: 'imagePath', label: 'Imagem' },
      { value: storyline, id: 'storyline', label: 'Sinopse' },
      { value: rating, id: 'rating', label: 'Avaliação' },
      { value: genre, id: 'genre', label: 'Gênero' },
    ];

    return (
      <form
        action="#"
        method="post"
        data-testid="add-movie-form"
        // onSubmit={ (event) => {
        //   onClick(event, { title, subtitle, imagePath, storyline, rating, genre });
        // } }
        style={ { display: 'flex', flexDirection: 'column', padding: '1rem 3rem' } }
      >
        {inputs.map((input) => (
          <Input
            key={ input.id }
            item={ input }
            change={ this.handleChange }
          />))}
        <button
          type="submit"
          data-testid="send-button"
          onClick={ (event) => {
            onClick(event, { title, subtitle, imagePath, storyline, rating, genre });
            this.resetState();
            // inputs.forEach((input) => {
            //   const { state } = this;
            //   input.value = state[input.id];
            // });
          } }
        >
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

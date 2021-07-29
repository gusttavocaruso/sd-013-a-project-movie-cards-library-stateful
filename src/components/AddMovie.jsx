import React from 'react';
import PropTypes from 'prop-types';
import InputGeneric from './InputGeneric';
import TextArea from './TextArea';
import SelectElement from './SelectElement';
import Button from './Button';

export default class AddMovie extends React.Component {
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
  }

  hanbleOnSubmit = () => {
    const { onClick } = this.props;
    const { genre } = this.state;
    const elGernre = document.getElementById('select-genre');
    onClick(this.state);
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
    elGernre.value = genre;
  }

  hanbleChange = (e) => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  }

  render() {
    const { imagePath, storyline, rating, genre, title, subtitle } = this.state;
    return (
      <form action="" data-testid="add-movie-form">
        <InputGeneric
          descicao="Título"
          title={ title }
          name="title"
          onChange={ this.hanbleChange }
        />
        <InputGeneric
          descicao="Subtítulo"
          title={ subtitle }
          name="subtitle"
          onChange={ this.hanbleChange }
        />
        <InputGeneric
          descicao="Imagem"
          title={ imagePath }
          name="imagePath"
          onChange={ this.hanbleChange }
        />
        <InputGeneric
          type="number"
          descicao="Avaliação"
          title={ rating.toString() }
          name="rating"
          onChange={ this.hanbleChange }
        />
        <TextArea
          descicao="Sinopse"
          title={ storyline }
          name="storyline"
          onChange={ this.hanbleChange }
          datatestid={ ['storyline-input-label', 'storyline-input'] }
        />
        <SelectElement
          descicao="Gênero"
          title={ genre }
          onChange={ this.hanbleChange }
          datatestid={ ['genre-input-label', 'genre-input', 'genre-option'] }
        />
        <Button
          datatestid="send-button"
          onClick={ this.hanbleOnSubmit }
          descricao="Adicionar filme"
        />
      </form>
    );
  }
}

AddMovie.defaultProps = {
  onClick: '',
};

AddMovie.propTypes = {
  onClick: PropTypes.func,
};

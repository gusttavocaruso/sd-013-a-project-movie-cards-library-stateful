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

  hanbleOnSubmit = (e) => {
    e.preventDefault();
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

  hanbleChange = (e) => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  }

  soprapassanolink = () => {
    const { title, subtitle } = this.state;
    return (
      <>
        <InputGeneric
          descicao="Título"
          title={ title }
          name="title"
          onChange={ this.hanbleChange }
          datatestid={ ['title-input-label', 'title-input'] }
        />
        <InputGeneric
          descicao="Subtítulo"
          title={ subtitle }
          name="subtitle"
          onChange={ this.hanbleChange }
          datatestid={ ['subtitle-input-label', 'subtitle-input'] }
        />
      </>
    );
  }

  render() {
    const { imagePath, storyline, rating, genre } = this.state;
    return (
      <form action="" data-testid="add-movie-form">
        this.soprapassanolink()
        <InputGeneric
          descicao="Imagem"
          title={ imagePath }
          name="imagePath"
          onChange={ this.hanbleChange }
          datatestid={ ['image-input-label', 'image-input'] }
        />
        <TextArea
          descicao="Sinopse"
          title={ storyline }
          name="storyline"
          onChange={ this.hanbleChange }
          datatestid={ ['storyline-input-label', 'storyline-input'] }
        />
        <InputGeneric
          type="number"
          descicao="Avaliação"
          title={ rating.toString() }
          name="rating"
          onChange={ this.hanbleChange }
          datatestid={ ['rating-input-label', 'rating-input'] }
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

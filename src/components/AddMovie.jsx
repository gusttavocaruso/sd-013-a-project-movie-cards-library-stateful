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

  render() {
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    const { onClick } = this.props;
    return (
      <form action="" data-testid="add-movie-form">
        <InputGeneric
          type="text"
          descicao="Título"
          title={ title }
          onChange={ onClick }
          datatestid={ ['title-input-label', 'title-input'] }
        />
        <InputGeneric
          type="text"
          descicao="Subtítulo"
          title={ subtitle }
          onChange={ onClick }
          datatestid={ ['subtitle-input-label', 'subtitle-input'] }
        />
        <InputGeneric
          type="text"
          descicao="Imagem"
          title={ imagePath }
          onChange={ onClick }
          datatestid={ ['image-input-label', 'image-input'] }
        />
        <TextArea
          descicao="Sinopse"
          title={ storyline }
          onChange={ onClick }
          datatestid={ ['storyline-input-label', 'storyline-input'] }
        />
        <InputGeneric
          type="number"
          descicao="Avaliação"
          title={ rating }
          onChange={ onClick }
          datatestid={ ['rating-input-label', 'rating-input'] }
        />
        <SelectElement
          descicao="Gênero"
          title={ genre }
          onChange={ onClick }
          datatestid={ ['genre-input-label', 'genre-input', 'genre-option'] }
        />
        <Button
          datatestid="send-button"
          onClick={ onClick }
          descricao="Adicionar filme"
        />
      </form>
    );
  }
}

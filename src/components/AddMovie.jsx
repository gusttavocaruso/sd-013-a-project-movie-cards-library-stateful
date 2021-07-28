import React from 'react';
import PropTypes from 'prop-types';
import InputGeneric from './InputGeneric';

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
          descicao="Título"
          title={ title }
          onChange={ onClick }
          datatestid={ ['title-input-label, title-input'] }
        />
      </form>
    );
  }
}

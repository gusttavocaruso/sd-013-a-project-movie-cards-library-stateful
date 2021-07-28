import React from 'react';
import PropTypes from 'prop-types';

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
    const { onClick } = this.props;
    return (
      <form action="" data-testid="add-movie-form">
        <label htmlFor="#" data-testid="title-input-label">
          Título
          <input
            type="text"
            value={ this.title }
            onChange={ onClick }
            data-testid="title-input"
          />
        </label>
        <label htmlFor="#" data-testid="subtitle-input-label">
          Subtítulo
          <input
            type="text"
            value={ this.subtitle }
            onChange={ onClick }
            data-testid="subtitle-input"
          />
        </label>
        <label htmlFor="#" data-testid="image-input-label">
          Imagem
          <input
            type="text"
            value={ this.imagePath }
            onChange={ onClick }
            data-testid="image-input"
          />
        </label>
      </form>
    );
  }
}

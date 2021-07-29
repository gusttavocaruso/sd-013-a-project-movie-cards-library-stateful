import React from 'react';
import PropTypes from 'prop-types';

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
  }

  render() {
    const { onClick } = this.props;
    return (
      <form action="" data-testid="add-movie-form">
        {/* <label htmlFor="title" data-testid="title-input-label">
          Subtítulo
          <input type="text" value="" data-testid="title-input" onChange={ title } />
        </label>
        <label htmlFor="subtitle" data-testid="subtitle-input-label">
          Subtítulo
          <input type="text" value="" data-testid="subtitle-input" onChange={ subtitle } />
        </label>
        <label htmlFor="image" data-testid="image-input-label">
          Imagem
          <input type="text" value="" data-testid="image-input" onChange={ imagePath } />
        </label>
        <label htmlFor="storyline" data-testid="storyline-input-label">
          Sinopse
          <textarea name="storyline" id="storyline" cols="30" rows="10" value={ storyline } data-testid="storyline-input" onChange={ storyline }></textarea>
        </label> */}
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.string.isRequired,
};

export default AddMovie;

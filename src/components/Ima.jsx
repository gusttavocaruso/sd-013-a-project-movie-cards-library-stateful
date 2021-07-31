import React from 'react';
import PropTypes from 'prop-types';

class Ima extends React.Component {
  constructor() {
    super();
    this.xablau = this.xablau.bind(this);
  }

  xablau(event) {
    const { newMovie } = this.props;
    newMovie(event);
  }

  render() {
    const { rating, imagePath } = this.props;
    return (
      <div>
        <label htmlFor="imagePath" data-testid="image-input-label">
          Imagem
          <input
            type="text"
            name="imagePath"
            onChange={ this.xablau }
            value={ imagePath }
            data-testid="image-input"
          />
        </label>
        <label htmlFor="rating" data-testid="rating-input-label">
          Avaliação
          <input
            type="number"
            name="rating"
            value={ rating }
            onChange={ this.xablau }
            data-testid="rating-input"
          />
          {' '}

        </label>
      </div>
    );
  }
}
Ima.propTypes = {
  newMovie: PropTypes.func,
  rating: PropTypes.number,
  imagePath: PropTypes.string,
};
Ima.defaultProps = {
  newMovie: PropTypes.func,
  rating: '',
  imagePath: '',
};
export default Ima;

// implement AddMovie component here
import React from 'react';
import PropTypes from 'prop-types';

class AddMovie extends React.Component {
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

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  eventoClick = () => {
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

  render() {
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    return (
      <form action="" data-testid="add-movie-form">
        <label htmlFor=" " data-testid="title-input-label">
          Título
          <input
            type="text"
            title={ title }
            onChange={ title }
            id=""
            data-testid="title-input"
          />
        </label>
        <label htmlFor=" " data-testid="subtitle-input-label">
          Subtítulo
          <input
            type="text"
            name=""
            id=""
            data-testid="subtitle-input"
            onChange={ subtitle }
            handleChange={ this.handleChange }
          />
        </label>
        <label htmlFor=" " data-testid="image-input-label">
          Imagem
          <input
            type="text"
            name=""
            id=""
            image={ imagePath }
            data-testid="image-input"
            onChange={ imagePath }
          />
        </label>
        {storyline}
        {rating}
        {genre}
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;

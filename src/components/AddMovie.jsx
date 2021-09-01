import React, { Component } from 'react';
// import PropTypes from 'prop-types';

class AddMovie extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      // storyline: '',
      // rating: 0,
      // genre: 'action',
    };
  }

  // A função handleChange foi extraida do matarial de estudo da Trybe
  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  }

  render() {
    const { title, subtitle, imagePath } = this.state;
    return (
      <form data-testid="add-movie-form">
        <label htmlFor="submitTitle" data-testid="title-input-label">
          Título
          <input
            id="submitTitle"
            type="text"
            data-testid="title-input"
            name="title"
            value={ title }
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="submitSubtitle" data-testid="subtitle-input-label">
          Subtítulo
          <input
            id="submitSubtitle"
            type="text"
            data-testid="subtitle-input"
            name="subtitle"
            value={ subtitle }
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="submitImg" data-testid="image-input-label">
          Sinopse
          <input
            id="submitImg"
            type="text"
            data-testid="image-input"
            name="subtitle"
            value={ imagePath }
            onChange={ this.handleChange }
          />
        </label>
      </form>
    );
  }
}

// AddMovie.defaultProps = {
//   onClick: () => {},
// };

// AddMovie.propTypes = {
//   onClick: PropTypes.func,
// };

export default AddMovie;

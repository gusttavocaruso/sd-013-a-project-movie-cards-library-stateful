// implement AddMovie component here
import React from 'react';
// import PropTypes from 'prop-types'

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

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <form data-testid="add-movie-form">
        <label htmlFor="input-text2">
          Título
          <input
            type="text"
            id="input-text2"
            data-testid="title-input"
            onChange={ this.handleChange }
            name="title"
          />
        </label>
      </form>
    );
  }
}

export default AddMovie;

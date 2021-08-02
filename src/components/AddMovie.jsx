import React, { Component } from 'react';
// import PropTypes from 'prop-types';

class AddMovie extends Component {
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

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    console.log(e.target.value);
  }

  render() {
    const { handleChange, state, props } = this;
    const { onClick } = props;
    const { title } = state;

    return (
      <form data-testid="add-movie-form">
        <label data-testid="title-input-label" htmlFor="title">
          Título
          <input
            data-testid="title-input"
            type="title"
            name="title"
            id="title"
            value={ title }
            onChange={ handleChange }
          />
        </label>
      </form>
    );
  }
}

// AddMovie.propTypes = {
//   subtitle: PropTypes.string,
//   title: PropTypes.string,
//   imagePath: PropTypes.string,
//   storyline: PropTypes.string,
//   rating: PropTypes.number,
//   genre: PropTypes.string,
// };

// AddMovie.defaultProps = {
//   subtitle: '',
//   title: '',
//   imagePath: '',
//   storyline: '',
//   rating: 0,
//   genre: 'action',
// };

export default AddMovie;

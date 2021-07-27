import React from 'react';
import PropTypes from 'prop-types';
import { formatters } from 'stylelint';

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

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    const { props: { onClick }, handleChange } = this;

    return (
      <form
        action=""
        data-testid="add-movie-form"
      >
        <label htmlFor="title" data-testid="title-input-label">
          Título
          <input
            data-testid="title-input"
            type="text"
            value={ title }
            name="title"
            id=""
            onChange={ handleChange }
          />
        </label>
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;

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

    this.changeStates = this.changeStates.bind(this);
  }

  changeStates(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { onClick } = this.props;
    const {
      subtitle,
      title,
      imagePath,
      storyline,
      rating,
      genre,
    } = this.state;

    return (
      <form data-testid="add-movie-form">
        <label htmlFor="title-input" data-testid="title-input-label">
          Título
          <input
            type="text"
            name="title"
            id="title-input"
            data-testid="title-input"
            onChange={ this.changeStates }
            value={ title }
          />
        </label>
        <label htmlFor="subtitle-input" data-testid="subtitle-input-label">
          Subtítulo
          <input
            type="text"
            name="subtitle"
            id="subtitle-input"
            value={ subtitle }
            data-testid="subtitle-input"
            onChange={ this.changeStates }/>
        </label>
      </form>
    );
  }
}

AddMovie.propTypes = {
  callback: PropTypes.func.isRequired,
};

export default AddMovie;

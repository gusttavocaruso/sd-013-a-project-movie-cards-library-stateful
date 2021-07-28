import React from 'react';
import PropTypes from 'prop-types';

const stateInitial = {
  title: '',
  subtitle: '',
  imagePath: '',
  storyline: '',
  rating: 0,
  genre: 'action',
};

class AddMovie extends React.Component {
  constructor() {
    super();
    this.state = stateInitial;
    this.handleChange = this.handleChange.bind(this); // 1
    this.handleClick = this.handleClick.bind(this); // 2
  }

  handleChange({ target }) { // 1
    this.setState({
      [target.name]: target.value,
    });
  }

  handleClick() { // 2
    const { onClick } = this.props;
    onClick(this.state);
    this.setState(stateInitial);
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <label data-testid="title-input-label" htmlFor="title">
          Título
          <input
            value={ title }
            data-testid="title-input"
            id="title"
            onChange={ this.handleChange }
          />
        </label>
        <label data-testid="subtitle-input-label" htmlFor="subtitle">
        Subtítulo
          <input
            value={ subtitle }
            data-testid="subtitle-input"
            id="subtitle"
            onChange={ this.handleChange }
          />
        </label>
      </form>
    );
  }
}

export default AddMovie;

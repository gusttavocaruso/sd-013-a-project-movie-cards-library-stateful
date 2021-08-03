import React, { Component } from 'react';

class AddMovie extends Component {
  constructor() {
    super();

    this.hadleChange = this.hadleChange.bind(this);
    this.hadleOnClick = this.hadleOnClick.bind(this);
    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  hadleChange({ target }) { // event.target desconstruido
    this.setState({
      [target.id]: target.value,
    });
  }

  hadleOnClick() {
    const { onClick } = this.props;
    onClick(this.state);
    this.setState(stateInicial);
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <label data-testid="title-input-label" htmlFor="title">
          Título
          <input
            type="text"
            id="title"
            value={ title }
            data-testid="title-input"
            onChange={ this.hadleChange }
          />
        </label>
      </form>
    );
  }
}

export default AddMovie;

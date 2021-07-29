import React, { Component } from 'react';

class AddMovie extends Component {
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
    this.changeStateProperty = this.changeStateProperty.bind(this);
  }

  getProperty = (property) => this.state.property;

  changeStateProperty = (e) => {
    // console.log(e.target.getAttribute('property'));
    const property = e.target.getAttribute('property');
    this.setState({ [property]: e.target.value });
  }

  render() {
    return (
      <form data-testid="add-movie-form">
        <label data-testid="title-input-label" htmlFor="title-input">
          Título:
          <input
            data-testid="title-input"
            property="title"
            type="text"
            value={ this.state.title }
            onChange={ this.changeStateProperty.bind(this) }
          />
        </label>
        <label data-testid="subtitle-input-label" htmlFor="subtitle-input">
          Subtítulo:
          <input
            data-testid="subtitle-input"
            property="subtitle"
            type="text"
            value={ this.state.subtitle }
            onChange={ this.changeStateProperty.bind(this) }
          />
        </label>
      </form>
    );
  }
}

export default AddMovie;

import React, { Component } from 'react';

class AddMovie extends Component {
  constructor() {
    super();
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyLine: '',
      rating: 0,
      genre: 'action',
    };
  }

  render() {
    const onClick = this.props;
    return (
      <form data-testid="add-movie-form">
        <label htmlFor="title" data-testid="title-input-label">
          Título
        </label>
        <input type="text" id="title" data-testid="title-input" onChange={ this.state.title } />
        <label htmlFor="subtitle" data-testid="subtitle-input-label">
          Subtítulo
          <input type="text" value={ this.state.subtitle } data-testid="subtitle-input" onChange={ this.state.subtitle } />
        </label>
      </form>
    );
  }
}

export default AddMovie;

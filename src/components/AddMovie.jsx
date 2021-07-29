import React from 'react';

class AddMovie extends React.Component {
  constructor() {
    super();

    this.state = {
      title: '',
      // subtitle: '',
      // imagePath: '',
      // storyLine: '',
      // rating: 0,
      // genre: 'action',
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
    const {
      title, /* subtitle, imagePath, storyLine, rating, genre, */
    } = this.state;

    return (
      <form action="" data-testid="add-movie-form">

        <label htmlFor="addMovie-title" data-testid="title-input-label">
          Título:
          <input
            id="addMovie-title"
            data-testid="title-input"
            type="text"
            name={ title }
            value={ this.title }
            onChange={ this.handleChange }
          />
        </label>

      </form>
    );
  }
}

export default AddMovie;

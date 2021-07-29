import React from 'react';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // subtitle: '',
      title: '',
      /* imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action', */
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ title: e.target.value });
  }

  render() {
    const { title } = this.state;
    return (
      <div>
        <form data-testid="add-movie-form">
          <label htmlFor="new-movie" data-testid="title-input-label">
            Título
            <input
              type="text"
              id="new-movie"
              data-testid="title-input"
              onChange={ this.handleChange }
              value={ title }
            />
          </label>
        </form>
      </div>
    );
  }
}

export default AddMovie;

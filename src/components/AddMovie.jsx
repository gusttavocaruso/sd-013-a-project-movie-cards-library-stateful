import React from 'react';

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
    this.setState({ [target.name]: target.value });
  }

  render() {
    return (
      <div>
        <form data-testid="add-movie-form">
          <label htmlFor="add-movie" data-testid="title-input-label">
            Título
            <input
              data-testid="title-input"
              id="add-movie"
              type="text"
              onChange={this.handleChange} />
          </label>
        </form>
      </div>
    );
  }
}
export default AddMovie;

// implement AddMovie component here
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
      genre: '',
    };
  }

  render() {
    return (
      <div>
        <form data-testid="add-movie-form">
          <label htmlFor="inputTitle" data-testid="title-input-label">Título
            <input
              data-testid="title-input"
              type="text"
              id="inputTitle"
              name="inputTitle"
            />
          </label>
          <label htmlFor="inputSubtitle" data-testid="subtitle-input-label">Subtítulo
            <input
              data-testid="subtitle-input"
              type="text"
              id="inputSubtitle"
              name="inputSubtitle"
          />
          </label>
        </form>
      </div>
    );
  }
}

export default AddMovie;

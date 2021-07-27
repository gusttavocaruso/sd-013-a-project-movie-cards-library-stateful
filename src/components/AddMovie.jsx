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
      genre: 'action',
    };

  }

  render() {
    return (
      <form data-testid="add-movie-form">
        <label data-testid="title-input-label">
          Título
          <input 
            type="text"
            data-testid="title-input"
            onChange={  }
            name="title"
          />
        </label>
        <label data-testid="subtitle-input-label">
          Subtítulo
          <input 
            type="text"
            data-testid="subtitle-input"
            onChange={  }
            name="subtitle"
          />
        </label>
      </form>
    )
  }
}
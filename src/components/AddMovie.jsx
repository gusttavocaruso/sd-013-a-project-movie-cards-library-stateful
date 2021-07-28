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
          Hello Form
        </form>
      </div>
    );
  }
}

export default AddMovie;

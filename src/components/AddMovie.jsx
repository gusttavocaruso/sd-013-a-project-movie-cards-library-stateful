import React from 'react';

class AddMovie extends React.Component {
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
    const {
      title, subtitle, imagePath, storyLine, rating, genre,
    } = this.state;

    return (
      <form action="" data-testid="add-movie-form">
        somefkcinthing
      </form>
    );
  }
}

export default AddMovie;

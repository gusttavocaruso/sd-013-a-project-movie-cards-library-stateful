import React from 'react';

const propriedades = {
  subtitle: '',
  title: '',
  imagePath: '',
  storyline: '',
  rating: 0,
  genre: 'action',
};

class AddMovie extends React.Component {
  constructor() {
    super();
    this.state = propriedades;
    // this.state = {
    //   subtitle: '',
    //   title: '',
    //   imagePath: '',
    //   storyline: '',
    //   rating: 0,
    //   genre: 'action',
    // };
  }

  render() {
    // const {
    //   subtitle,
    //   title,
    //   imagePath,
    //   storyline,
    //   rating,
    //   genre,
    // } = this.state;

    return (
      <form>teste</form>
    );
  }
}

export default AddMovie;

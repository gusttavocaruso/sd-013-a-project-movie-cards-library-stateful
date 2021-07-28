// implement AddMovie component here
import React from 'react';
import InputList1 from './InputList1';
import InputList2 from './InputList2';

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

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const {
      subtitle,
      title,
      imagePath,
      storyLine,
      rating,
      genre,
    } = this.state;

    return (
      <form data-testid="add-movie-form">
        <InputList1
          title={ title }
          handleChange={ this.handleChange }
          subtitle={ subtitle }
          imagePath={ imagePath }
        />
        <InputList2
          storyLine={ storyLine }
          handleChange={ this.handleChange }
          rating={ rating }
          genre={ genre }
        />
      </form>
    );
  }
}

export default AddMovie;

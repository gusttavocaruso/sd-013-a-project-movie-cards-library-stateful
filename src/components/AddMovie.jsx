import React from 'react';
import FormAddMovies from './AddMovieForm';
import FormAddMovies1 from './AddMovieForm1';

class AddMovie extends React.Component {
  constructor() {
    super();

    this.state = ({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;

    const changeTitle = ({ target }) => {
      const { name } = target;
      const value = target.type === 'checkbox' ? target.checked : target.value;
      this.setState({
        [name]: value,
      });
    };

    return (
      <form data-testid="add-movie-form">
        <FormAddMovies
          title={ title }
          subtitle={ subtitle }
          imagePath={ imagePath }
          storyline={ storyline }
          changeTitle={ changeTitle }
        />
        <FormAddMovies1
          changeTitle={ changeTitle }
          genre={ genre }
          rating={ rating }
        />
      </form>
    );
  }
}

export default AddMovie;

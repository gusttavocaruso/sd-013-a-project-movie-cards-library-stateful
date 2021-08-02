// implement AddMovie component here
import React from 'react';
import PropTypes from 'prop-types';

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
    } // Requisito 6
  }

  render() {
    const { onClick } = this.props;

    return (
        <form data-testid="add-movie-form"> // Requisito 7

        </form>
    );
  }
}

AddMovie.PropTypes = {
  onClick: PropTypes.func,
};

export default AddMovie; 
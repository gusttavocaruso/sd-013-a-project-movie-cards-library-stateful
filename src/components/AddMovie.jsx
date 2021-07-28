import React, { Component } from 'react';
import PropTypes from 'prop-types';
import InputTitle from './InputTitle';
import InputSubtitle from './InputSubtitle';
import InputImage from './InputImage';
import InputTextArea from './InputTextArea';
import InputRating from './InputRating';
// import InputGenre from './InputGenre';

class AddMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      // genre: 'action',
    };
  }

  render() {
    const { subtitle, title, imagePath, storyline, rating } = this.state;
    const { handleChange } = this.props;
    return (
      <form data-testid="add-movie-form">
        <InputTitle title={ title } onChange={ handleChange } />
        <InputSubtitle subtitle={ subtitle } onChange={ handleChange } />
        <InputImage imagePath={ imagePath } onChange={ handleChange } />
        <InputTextArea storyline={ storyline } onChange={ handleChange } />
        <InputRating rating={ rating } onChange={ handleChange } />
        {/* <InputRating genre={ genre } handleChange={ handleChange } /> */}
      </form>
    );
  }
}

AddMovie.propTypes = {
  handleChange: PropTypes.func.isRequired,
};

export default AddMovie;

import React from 'react';
import PropTypes from 'prop-types';
import TitleInput from './movieForm/TitleInput';
import TitleInput from './movieForm/SubtitleInput';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      subtitle: '',
      storyline: '',
      rating: 0,
      genre: 'action',
      imagePath: '',
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    const { title, subtitle, storyline, rating, genre, imagePath } = this.state;
    const { onClick } = this.props;
    return (
      <form onSubmit={ this.handleSubmit } data-testid="add-movie-form">
        <TitleInput value={ title } onChange={ this.handleChange } />
        <SubtitleInput value={ subtitle } onChange={ this.handleChange } />
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;

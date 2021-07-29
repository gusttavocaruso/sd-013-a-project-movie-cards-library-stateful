import React from 'react';
import PropTypes from 'prop-types';
import InputTitle from './InputTitle';
import InputSubtitle from './InputSubtitle';
import InputRating from './InputRating';
import InputImagePath from './InputImagePath';
import InputGenre from './InputGenre';
import InputStoryline from './InputStoryline';
import InputBookmarked from './InputBookmarked';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      subtitle: '',
      imagepath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
      bookmarked: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(event) {
    const { name } = event.target;
    const value = (event.target.type === 'checkbox')
      ? event.target.checked : event.target.value;
    // console.log(name, '   ', value);
    this.setState({
      [name]: value,
    });
  }

  handleClick() {
    const { onClick } = this.props;
    onClick(this.state);

    this.setState({
      title: '',
      subtitle: '',
      imagepath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
      bookmarked: false,
    });
  }

  render() {
    const {
      title,
      subtitle,
      imagepath,
      storyline,
      rating,
      genre,
      bookmarked,
    } = this.state;

    return (
      <form data-testid="add-movie-form">
        <InputTitle title={ title } handleChange={ this.handleChange } />
        <InputSubtitle subtitle={ subtitle } handleChange={ this.handleChange } />
        <InputRating rating={ rating } handleChange={ this.handleChange } />
        <InputGenre genre={ genre } handleChange={ this.handleChange } />
        <InputStoryline storyline={ storyline } handleChange={ this.handleChange } />
        <InputImagePath imagepath={ imagepath } handleChange={ this.handleChange } />
        <InputBookmarked bookmarked={ bookmarked } handleChange={ this.handleChange } />

        <button
          type="button"
          id="adicionar"
          data-testid="send-button"
          onClick={ this.handleClick }
        >
          Adicionar filme
        </button>
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;

import React from 'react';
import PropTypes from 'prop-types';

import TitleInput from './Title';
import SubtitleInput from './Subtitle';
import ImagePathUrl from './ImagePathReact';
import StorylineInput from './StorylineInput';
import RatingInput from './RatingInput';
import SelectOption from './SelectOption';
import ButtonSubmit from './ButtonSubmit';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleCallback = (callback) => {
    callback(this.state);
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  render() {
    const { title, subtitle, imagePath,
      storyline, rating, genre,
    } = this.state;
    const { onClick } = this.props;
    return (
      <form action="#" data-testid="add-movie-form" onSubmit={ this.handleSubmit }>
        <TitleInput value={ title } onChange={ this.handleChange } />
        <SubtitleInput value={ subtitle } onChange={ this.handleChange } />
        <ImagePathUrl value={ imagePath } onChange={ this.handleChange } />
        <StorylineInput value={ storyline } onChange={ this.handleChange } />
        <RatingInput value={ rating } onChange={ this.handleChange } />
        <SelectOption value={ genre } onChange={ this.handleChange } />
        <ButtonSubmit onClick={ () => this.handleCallback(onClick) } />
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func,
}.isRequired;

export default AddMovie;

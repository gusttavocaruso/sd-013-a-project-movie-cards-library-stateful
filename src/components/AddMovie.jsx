import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TitleRender from './TitleRender';
import SubtitleRender from './SubtitleRender';
import ImageRender from './ImageRender';
import SinopseRender from './SinopseRender';
import RateRender from './RateRender';
import GenreRender from './GenreRender';

class AddMovie extends Component {
  constructor() {
    super();
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
  }

  handleClick = (onClick) => {
    onClick(this.state);
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    const { onClick } = this.props;
    return (
      <form data-testid="add-movie-form" onSubmit={ this.handleSubmit }>
        <TitleRender title={ title } handleChange={ this.handleChange } />
        <SubtitleRender subtitle={ subtitle } handleChange={ this.handleChange } />
        <ImageRender imagePath={ imagePath } handleChange={ this.handleChange } />
        <SinopseRender storyline={ storyline } handleChange={ this.handleChange } />
        <RateRender rating={ rating } handleChange={ this.handleChange } />
        <GenreRender genre={ genre } handleChange={ this.handleChange } />
        <button
          type="submit"
          data-testid="send-button"
          onClick={ () => this.handleClick(onClick) }
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

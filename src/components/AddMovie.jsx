// implement AddMovie component here
import React, { Component } from 'react';
import RatingGender from './RatingGender';
import Storyline from './Storyline';
import TitleSubtitle from './TitleSubtitle';
import Image from './Image';

class AddMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subtitle: '', title: '', imagePath: '', storyline: '', rating: 0, genre: 'action',
    };
    this.handleChange = this.handleChange.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  onClick = () => {
    const { onClick } = this.props;
    onClick(this.state);

    this.setState({
      subtitle: '', title: '', imagePath: '', storyline: '', rating: 0, genre: 'action',
    });
  }

  render() {
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <TitleSubtitle
          title={ title }
          subtitle={ subtitle }
          handleChange={ this.handleChange }
        />
        <Image 
          imagePath={ imagePath }
          handleChange={ this.handleChange }
        /> 
        
        <Storyline
          storyline={ storyline }
          handleChange={ this.handleChange }
        />
        <RatingGender
          rating={ rating }
          genre={ genre }
          handleChange={ this.handleChange }
        />
        <button
          type="button"
          onClick={ this.onClick }
          data-testid="send-button"
        >
          Adicionar filme
        </button>
      </form>
    );
  }
}

export default AddMovie;

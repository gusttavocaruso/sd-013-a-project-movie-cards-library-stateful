import React from 'react';
import PropTypes from 'prop-types';
import Title from './Title';
import Subtitle from './Subtitle';
import ImagePath from './ImagePath';
import Storyline from './Storyline';
import RatingStateful from './RatingStateful';
import Genre from './Genre';
import SendButton from './SendButton';

class AddMovie extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.handleButton = this.handleButton.bind(this);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  }

  handleButton = () => {
    const { onClick } = this.props;
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

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <Title valueComp={ title } onChangeComp={ this.handleChange } />
        <Subtitle valueComp={ subtitle } onChangeComp={ this.handleChange } />
        <ImagePath valueComp={ imagePath } onChangeComp={ this.handleChange } />
        <Storyline valueComp={ storyline } onChangeComp={ this.handleChange } />
        <RatingStateful valueComp={ rating } onChangeComp={ this.handleChange } />
        <Genre valueComp={ genre } onChangeComp={ this.handleChange } />
        <SendButton funcComp={ this.handleButton } />
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;

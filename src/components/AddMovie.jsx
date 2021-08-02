import React from 'react';
import PropTypes from 'prop-types';
import AddTitle from './ subcomponents/AddTitle';
import AddSubtitle from './ subcomponents/AddSubtitle';
import AddImage from './ subcomponents/AddImage';
import AddStoryline from './ subcomponents/AddStoryline';
import AddRating from './ subcomponents/AddRating';
import AddGenre from './ subcomponents/AddGenre';
import './AddMovie.css';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleButton = this.handleButton.bind(this);
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  }

  handleButton() {
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
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;

    return (
      <form data-testid="add-movie-form" className="add-movie-form">
        <AddTitle value={ title } handleChange={ this.handleChange } />
        <AddSubtitle value={ subtitle } handleChange={ this.handleChange } />
        <AddImage value={ imagePath } handleChange={ this.handleChange } />
        <AddStoryline value={ storyline } handleChange={ this.handleChange } />
        <AddRating value={ rating } handleChange={ this.handleChange } />
        <AddGenre value={ genre } handleChange={ this.handleChange } />
        <div className="break-line" />
        <button
          type="button"
          data-testid="send-button"
          onClick={ this.handleButton }
        >
          Adicionar filme
        </button>
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func,
};

AddMovie.defaultProps = {
  onClick: undefined,
};

export default AddMovie;

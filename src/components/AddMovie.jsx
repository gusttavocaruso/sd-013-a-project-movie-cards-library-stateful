import React from 'react';
import PropTypes from 'prop-types';

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
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange( { target } ) { //desestruturando event.target
    const { name, value } = target;

    this.setState({
      [name]: value,
    });
  }

  render() {
    const { onClick } = this.props;
    const { title, subtitle } = this.state;

    return (
      <form data-testid="add-movie-form" action="">
        <label data-testid="title-input-label" htmlFor="title-input">
          Título
          <input data-testid="title-input" name="title" type="text" value={ title } id="title-input" onChange={ this.handleChange } />
        </label>
        <label data-testid="subtitle-input-label" htmlFor="subtitle-input">
          Subtítulo
          <input data-testid="subtitle-input" name="subtitle" type="text" value={ subtitle } onChange={ this.handleChange } />
        </label>
      </form>
    );
  }
}

AddMovie.PropTypes = {
  onClick: PropTypes.func,
};

export default AddMovie;
import PropTypes from 'prop-types';
import React from 'react';
import Button from './Button';
import Formulario from './formulario';

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
    this.click = this.click.bind(this);
  }

  handleChange({ target: { name, value } }) {
    this.setState({
      [name]: value,
    });
  }

  click() {
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
    const { title, subtitle, imagePath, rating, genre, storyline } = this.state;
    return (
      <section>
        <Formulario
          title={ title }
          subtitle={ subtitle }
          imagePath={ imagePath }
          rating={ rating }
          genre={ genre }
          storyline={ storyline }
          handleChange={ this.handleChange }
          onClick={ this.click }
        />
        <Button onClick={ this.click } />
      </section>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};
export default AddMovie;

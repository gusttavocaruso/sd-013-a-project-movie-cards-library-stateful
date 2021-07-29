import React from 'react';
import PropTypes from 'prop-types';
import FormAdd from './FormAdd';

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

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange({ target }) {
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const { name } = target;
    this.setState({
      [name]: value });
  }

  handleClick({ target }) {
    console.log(target);
  }

  render() {
    const { onClick } = this.props;
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    const formState = { subtitle, title, imagePath, storyline, rating, genre };

    return (
      <section>
        <FormAdd
          clickHandler={ onClick }
          changeHandler={ this.handleInputChange }
          state={ formState }
        />
      </section>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;

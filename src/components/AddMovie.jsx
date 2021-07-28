// implement AddMovie component here

import React from 'react';
import PropTypes from 'prop-types';

// const inicio = {
//   subtitle: '',
//   title: '',
//   imagePath: '',
//   storyline: '',
//   rating: 0,
//   genre: 'action',
// };

class AddMovie extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.handleChange = this.handleChange.bind(this);
  //   this.state = inicio;
  // }

  // handleChange({ target }) {
  //   const { name, value } = target;
  //   this.setState({ [name]: value, })
  // }

  render() {
    const { title } = this.props;
    return (
      <form data-testid="add-movie-form">
        <label data-testid="title-input-label" htmlFor="title">
          Título
          <input type="text" data-testid="title-input" onChange={ title } />
        </label>
      </form>
    );
  }
}

AddMovie.propTypes = {
  title: PropTypes.string.isRequired,
};

export default AddMovie;

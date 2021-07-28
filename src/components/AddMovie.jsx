import React from 'react';
import PropTypes from 'prop-types';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.state = {
      subtitle: '',
      title: '',
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

  render() {
    const { onClick } = this.props;
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <label data-testid="title-input-label" htmlFor="title-input">
          Título
          <input
            data-testid="title-input"
            name="title"
            type="text"
            value={ title }
            onChange={ this.handleChange }
          />
        </label>
        <label data-testid="subtitle-input-label">
          Subtítulo
          <input
            data-testid="subtitle-input"
            name="subtitle"
            type="text"
            value={ subtitle }
            onChange={ this.handleChange }
          />
        </label>
      </form>
    );
  }
}

// AddMovie.propTypes = {
//   onClick: PropTypes.func.isRequired,
// };

export default AddMovie;

import React from 'react';
import PropTypes from 'prop-types';

class Genre extends React.Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     genre: 'action',
  //   };
  //   this.handleChange = this.handleChange.bind(this);
  // }

  // handleChange(event) {
  //   this.setState({ genre: event.target.value });
  // }

  render() {
    const { genre, handleChange } = this.props;
    return (
      <label data-testid="genre-input-label" htmlFor="Genre">
        Gênero
        <select
          name="genre"
          data-testid="genre-input"
          value={ genre }
          onChange={ handleChange }
        >
          <option data-testid="genre-option" value="action">Ação</option>
          <option data-testid="genre-option" value="comedy">Comédia</option>
          <option data-testid="genre-option" value="thriller">Suspense</option>
        </select>
      </label>
    );
  }
}

Genre.propTypes = {
  genre: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Genre;

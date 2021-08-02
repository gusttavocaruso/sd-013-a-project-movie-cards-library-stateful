import React from 'react';
// import PropTypes from 'prop-types';

class AddMovie extends React.Component {
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

  render() {
    const { subtitle, title } = this.state;
    return (
      <form data-testid="add-movie-form">
        <label
          data-testid="title-input-label"
          htmlFor="title-input"
        >
          Título
          <input
            type="text"
            id="title-input"
            value={ title }
            data-testid="title-input"
            onChange={ ({ target }) => this.state({ title: target.value }) }
          />
        </label>
        <label
          data-testid="subtitle-input-label"
          htmlFor="subtitle-input"
        >
          Subtítulo
          <input id="subtitle-input" data-testid="subtitle-input" value={ subtitle } onChange={ ({ target }) => this.setState({ subtitle: target.value }) }
        />
        </label>
      </form>
    );
  }
}

AddMovie.propTypes = {
  title: PropTypes.string.isRequired,
};


export default AddMovie;

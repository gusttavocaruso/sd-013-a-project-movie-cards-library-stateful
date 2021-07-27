import React from 'react';
// import propTypes from 'prop-types';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.state = {
    //  subtitle: '',
      title: '',
    //  imagePath: '',
    //  storyline: '',
    //  rating: 0,
    //  genre: 'action',
    };
    this.handleChangeTitle = this.handleChangeTitle.bind(this);
  }

  handleChangeTitle(event) {
    this.setState({ title: event.target.value });
  }

  render() {
    // const { onClick } = this.props;
    const { title } = this.state;
    return (
      <form data-testid="add-movie-form">
        <label htmlFor="input-title" data-testid="title-input-label">
          Título
          <input
            type="text"
            name="input-title"
            value={ title }
            data-testid="title-input"
            onChange={ this.handleChangeTitle }
          />
        </label>
      </form>
    );
  }
}

AddMovie.propTypes = {
  // onClick: propTypes.func.isRequired,
};

export default AddMovie;

import React from 'react';
// import PropTypes from 'prop-types';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // subtitle: '',
      title: '',
      // imagePath: '',
      // storyLine: '',
      // rating: 0,
      // genre: 'action',
    };
  }

  handleChange =({ target }) => {
    const { name, value } = target;

    this.setState({ [name]: value });
  }

  render() {
    const { title } = this.state;
    const { handleChange } = this;
    return (
      <forms data-testid="add-movie-form">
        <label data-testid="title-input-label" htmlFor="title">
          Título:
          <input
            data-testid="title-input"
            type="text"
            name="title"
            value={ title }
            onChange={ handleChange }
          />
        </label>
      </forms>
    );
  }
}

export default AddMovie;

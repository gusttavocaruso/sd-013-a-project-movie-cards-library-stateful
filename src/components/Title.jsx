import React from 'react';
import PropTypes from 'prop-types';

class Title extends React.Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     title: '',
  //   };
  //   this.handleChange = this.handleChange.bind(this);
  // }

  // handleChange(event) {
  //   this.setState({ title: event.target.value });
  // }

  render() {
    const { title, handleChange } = this.props;
    return (
      <label data-testid="title-input-label" htmlFor="title">
        Título
        <input
          name="title"
          type="text"
          data-testid="title-input"
          value={ title }
          onChange={ handleChange }
        />
      </label>
    );
  }
}

Title.propTypes = {
  title: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Title;

import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ButtonAdd extends Component {
  render() {
    const { newMovie } = this.props;
    return (
      <button
        className="add-button"
        type="submit"
        data-testid="send-button"
        onClick={ newMovie }
      >
        Adicionar filme
      </button>
    );
  }
}

ButtonAdd.propTypes = {
  newMovie: PropTypes.func.isRequired,
};

export default ButtonAdd;

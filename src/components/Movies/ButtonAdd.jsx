import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ButtonAdd extends Component {
  render() {
    const { addNewMovie } = this.props;
    return (
      <button
        className="add-button"
        type="submit"
        data-testid="send-button"
        onClick={ addNewMovie }
      >
        Adicionar filme
      </button>
    );
  }
}

ButtonAdd.propTypes = {
  addNewMovie: PropTypes.func.isRequired,
};

export default ButtonAdd;

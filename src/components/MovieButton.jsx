import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MovieButton extends Component {
  render() {
    const { funcao } = this.props;
    return (
      <button type="submit" data-testid="send-button" onClick={ funcao }>
        Adicionar filme
      </button>
    );
  }
}

MovieButton.propTypes = {
  funcao: PropTypes.func.isRequired,
};

export default MovieButton;

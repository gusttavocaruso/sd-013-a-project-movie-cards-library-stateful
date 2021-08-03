import React from 'react';
import PropTypes from 'prop-types';

class ButtonAddMovie extends React.Component {
  render() {
    const { onClick } = this.props;
    return (
      <button
        type="button"
        id="button-add-movie"
        data-testid="send-button"
        onClick={ onClick }
      >
        Adicionar filme
      </button>
    );
  }
}

ButtonAddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default ButtonAddMovie;

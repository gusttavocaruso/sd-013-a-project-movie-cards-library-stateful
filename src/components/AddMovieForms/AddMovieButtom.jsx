import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddMovieButtom extends Component {
  render() {
    const { onClick } = this.props;
    return (
      <div>
        <button
          type="reset"
          onClick={ onClick }
          data-testid="send-button"
        >
          Adicionar filme
        </button>
      </div>

    );
  }
}

AddMovieButtom.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovieButtom;

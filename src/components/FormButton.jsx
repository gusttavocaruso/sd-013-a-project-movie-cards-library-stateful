import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class FormButton extends Component {
  render() {
    const { onClick } = this.props;
    return (
      <button data-testid="send-button" type="button" onClick={ onClick }>
        Adicionar filme
      </button>
    );
  }
}

FormButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SubmitForm extends Component {
  render() {
    const { click } = this.props;
    return (
      <button
        type="submit"
        data-testid="send-button"
        onClick={ click }
      >
        Adicionar filme
      </button>
    );
  }
}

SubmitForm.propTypes = {
  click: PropTypes.func.isRequired,
};

export default SubmitForm;

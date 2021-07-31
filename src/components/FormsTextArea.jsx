import React from 'react';
import PropTypes from 'prop-types';

class FormsTextArea extends React.Component {
  render() {
    const { id, value, text, onChange } = this.props;
    return (
      <label htmlFor={ id } data-testid={ `${id}-input-label` }>
        {text}
        <textarea
          id={ id }
          value={ value }
          cols="30"
          rows="10"
          onChange={ onChange }
          data-testid={ `${id}-input` }
        />
      </label>
    );
  }
}

FormsTextArea.propTypes = {
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default FormsTextArea;

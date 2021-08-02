import React from 'react';
import PropTypes from 'prop-Types';

class TextInput extends React.Component {
  render() {
    const { data: { testId, testLabel, text, name, value, handleChange } } = this.props;
    return (
      <label htmlFor={ testId } data-testid={ testLabel }>
        {text}
        <input
          id={ testId }
          type="text"
          name={ name }
          value={ value }
          data-testid={ testId }
          onChange={ handleChange }
        />
      </label>
    );
  }
}

TextInput.propTypes = {
  data: PropTypes.shape({
    testId: PropTypes.string,
    testLabel: PropTypes.string,
    text: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.string,
    handleChange: PropTypes.string,
  }).isRequired,
};

export default TextInput;

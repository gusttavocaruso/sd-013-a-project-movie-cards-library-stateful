import React from 'react';
import PropTypes from 'prop-types';

class FormsInput extends React.Component {
  render() {
    const { type, id, func, text, value } = this.props;
    const name = id === 'imagePath' ? 'image' : id; // image-input ao invés de imagePath-input
    return (
      <label key={ id } htmlFor={ id } data-testid={ `${name}-input-label` }>
        {text}
        <input
          data-testid={ `${name}-input` }
          type={ type }
          value={ value }
          name={ id }
          id={ id }
          onChange={ func }
        />
      </label>
    );
  }
}

FormsInput.propTypes = {
  value: PropTypes.string.isRequired,
  func: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  type: PropTypes.string,
};

FormsInput.defaultProps = {
  type: 'text',
};

export default FormsInput;

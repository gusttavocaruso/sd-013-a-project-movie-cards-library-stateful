import React from 'react';
import PropTypes from 'prop-types';

class InputLabelText extends React.Component {
  render() {
    const { property } = this.props;
    return (
      <label
        htmlFor={ property[2] }
        data-testid={ `${property[4]}-input-label` }
      >
        {property[3]}
        <input
          type={ property[0] }
          name={ property[2] }
          value={ property[1] }
          data-testid={ `${property[4]}-input` }
          onChange={ property[5] }
        />
      </label>
    );
  }
}

InputLabelText.propTypes = {
  property: PropTypes.shape([]).isRequired,
};

export default InputLabelText;

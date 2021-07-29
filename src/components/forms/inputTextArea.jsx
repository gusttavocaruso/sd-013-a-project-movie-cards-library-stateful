import React from 'react';
import PropTypes from 'prop-types';

class InputTextArea extends React.Component {
  render() {
    const { onChange, value } = this.props;
    return (
      <div>
        <label data-testid="storyline-input-label" htmlFor="storyline-ipt">
          Sinopse
          <textarea
            data-testid="storyline-input"
            id="storyline-ipt"
            value={ value }
            onChange={ onChange }
            name="storyline"
          />
        </label>
      </div>
    );
  }
}

InputTextArea.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default InputTextArea;

import React from 'react';
import PropTypes from 'prop-types';

class InputNumber extends React.Component {
  render() {
    const { onChange, value } = this.props;
    return (
      <div>
        <label data-testid="rating-input-label" htmlFor="rtg-ipt">
          Avaliação
          <input
            data-testid="rating-input"
            id="rtg-ipt"
            type="number"
            value={ value }
            onChange={ onChange }
            name="rating"
          />
        </label>
      </div>
    );
  }
}

InputNumber.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default InputNumber;

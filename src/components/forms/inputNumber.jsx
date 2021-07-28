import React from 'react';

class InputNumber extends React.Component {
  render() {
    const { onChange, value } = this.props;
    return (
        <div>
          <label data-testid="rating-input-label">
            Avaliação
            <input
              data-testid="rating-input"
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

export default InputNumber;

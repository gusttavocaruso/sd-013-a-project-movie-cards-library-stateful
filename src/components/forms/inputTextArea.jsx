import React from 'react';

class InputTextArea extends React.Component {
  render() {
    const { onChange, value } = this.props;
    return (
        <div>
          <label data-testid="storyline-input-label">
            Sinopse
            <textarea
              data-testid="storyline-input"
              value={ value }
              onChange={ onChange }
              name="storyline"
            />
          </label>
        </div>
    );
  }
}

export default InputTextArea;

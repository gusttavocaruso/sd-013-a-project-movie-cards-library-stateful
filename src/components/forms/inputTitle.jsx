import React from 'react';

class InputTitle extends React.Component {
  render() {
    const { onChange, value } = this.props;
    return (
      <div>
        <label data-testid="title-input-label">
          Título
          <input
            data-testid="title-input"
            type="text"
            value={ value }
            onChange={ onChange }
            name="title"
          />
        </label>
      </div>
    );
  }
}

export default InputTitle;

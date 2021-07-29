import React from 'react';

class InputSubtitle extends React.Component {
  render() {
    const { onChange, value } = this.props;
    return (
      <div>
        <label data-testid="subtitle-input-label" htmlFor="subtitle-ipt">
          Subtítulo
          <input
            data-testid="subtitle-input"
            id="subtitle-ipt"
            type="text"
            value={ value }
            onChange={ onChange }
            name="subtitle"
          />
        </label>
      </div>
    );
  }
}

export default InputSubtitle;

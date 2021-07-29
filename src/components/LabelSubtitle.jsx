import React from 'react';

class LabelSubtitle extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label htmlFor="subtitle" data-testid="subtitle-input-label">
        Subtítulo
        <input
          id="subtitle"
          type="text"
          name="subtitle"
          value={ value }
          data-testid="subtitle-input"
          onChange={ onChange }
        />
      </label>
    );
  }
}

export default LabelSubtitle;

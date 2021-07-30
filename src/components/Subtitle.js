import React from 'react';

class Subtitle extends React.Component {
  render() {
    const { subtitle, onChange } = this.props;

    return (
      <label data-testid="subtitle-input-label" htmlFor="subtitle">
        Subtítulo
        <input
          name="subtitle"
          onChange={ onChange }
          data-testid="subtitle-input"
          id="subtitle"
          value={ subtitle }
          type="text"
        />
      </label>
    );
  }
}

export default Subtitle;

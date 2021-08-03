import React from 'react';

class Subtitle extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <form>
        <label data-testid="subtitle-input-label" htmlFor="subtitle">
          Subtítulo
          <input
            name="subtitle"
            value={ value }
            id="subtitle"
            data-testid="subtitle-input"
            onChange={ onChange }
          />
        </label>
      </form>
    );
  }
}

export default Subtitle;

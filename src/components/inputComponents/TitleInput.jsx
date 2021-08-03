import React from 'react';

class Title extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label htmlFor="titleInput" data-testid="title-input-label">
        Título
        <input
          name="titleInput"
          type="text"
          value={ value }
          data-testid="title-input"
          onChange={ onChange }
        />
      </label>
    );
  }
}

export default Title;

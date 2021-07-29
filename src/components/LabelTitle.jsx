import React from 'react';

class LabelTitle extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label htmlFor="title" data-testid="title-input-label">
        Título
        <input
          id="title"
          type="text"
          name="title"
          value={ value }
          data-testid="title-input"
          onChange={ onChange }
        />
      </label>
    );
  }
}

export default LabelTitle;

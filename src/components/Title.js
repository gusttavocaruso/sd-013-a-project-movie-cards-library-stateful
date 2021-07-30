import React from 'react';

class Title extends React.Component {
  render() {
    const { title, onChange } = this.props;

    return (
      <label data-testid="title-input-label" htmlFor="title">
        Título
        <input
          name="title"
          data-testid="title-input"
          id="title"
          onChange={ onChange }
          type="text"
          value={ title }
        />
      </label>
    );
  }
}

export default Title;

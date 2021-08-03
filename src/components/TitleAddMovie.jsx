import React from 'react';

class Title extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <form data-testid="add-movie-form">
        <label data-testid="title-input-label" htmlFor="title">
          Título
          <input
            name="title"
            value={ value }
            id="title"
            data-testid="title-input"
            onChange={ onChange }
          />
        </label>
      </form>
    );
  }
}

export default Title;

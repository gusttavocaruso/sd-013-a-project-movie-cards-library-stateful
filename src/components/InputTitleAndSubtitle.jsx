import React from 'react';

class InputTitleAndSubtitle extends React.Component {
  render() {
    const { title, subtitle, onChangeFunction } = this.props;

    return(
      <span>
        <label data-testid="title-input-label" htmlFor="title-input">
          Título
          <input
            data-testid="title-input"
            name="title"
            type="text"
            value={ title }
            id="title-input"
            onChange={ this.handleChange }
          />
        </label>
        <label data-testid="subtitle-input-label" htmlFor="subtitle-input">
          Subtítulo
          <input
            data-testid="subtitle-input"
            name="subtitle"
            type="text"
            value={ subtitle }
            id="subtitle-input"
            onChange={ this.handleChange }
          />
        </label>
      </span>
    );
  }
}

export default InputTitleAndSubtitle;
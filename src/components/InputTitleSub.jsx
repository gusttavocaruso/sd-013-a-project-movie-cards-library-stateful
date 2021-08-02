import React, { Component } from 'react';

class InputTitleSub extends Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <section>
        <label
          data-testid="title-input-label"
          htmlFor="input_title"
        >
          Título
          <input
            data-testid="title-input"
            type="text"
            value={ value }
            name="title"
            onChange={ onChange }
            id="input_title"
          />
        </label>
        <label
          data-testid="subtitle-input-label"
          htmlFor="input_subTitle"
        >
          Subtítulo
          <input
            data-testid="subtitle-input"
            type="text"
            value={ value }
            name="subtitle"
            onChange={ onChange }
            id="input_subTitle"
          />
        </label>
      </section>
    );
  }
}

InputTitleSub.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default InputTitleSub;

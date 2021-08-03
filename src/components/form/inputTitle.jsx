import React from 'react';
import PropTypes from 'prop-types';

class InputTitle extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label data-testid="title-input-label" htmlFor="title-input">
        Título
        <input
          type="text"
          id="title-input"
          value={ value }
          data-testid="title-input"
          onChange={ onChange }
          name="title"
        />
      </label>
    );
  }
}

InputTitle.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
}.isRequired;

export default InputTitle;

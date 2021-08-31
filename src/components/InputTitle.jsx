import React from 'react';
import PropTypes from 'prop-types';

class InputTitle extends React.Component {
  render() {
    const { value, clickChange } = this.props;
    return (
      <label data-testid="title-input-label" htmlFor="title">
        Título
        <input
          type="text"
          value={ value }
          data-testid="title-input"
          onChange={ clickChange }
          name="title"
        />
      </label>
    );
  }
}

InputTitle.propTypes = {
  value: PropTypes.string,
  clickReset: PropTypes.func,
}.isRequired;

export default InputTitle;

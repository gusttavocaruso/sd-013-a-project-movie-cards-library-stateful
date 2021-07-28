import React from 'react';
import Proptypes from 'prop-types';

class InputTitle extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <section>
        <label htmlFor="title" data-testid="title-input-label">
          Título
          <input
            type="text"
            name="title"
            value={ value }
            data-testid="title-input"
            onChange={ onChange }
          />
        </label>
      </section>
    );
  }
}

InputTitle.propTypes = {
  onChange: Proptypes.func,
  value: Proptypes.string,
}.isrequired;

export default InputTitle;

import React from 'react';
import Proptypes from 'prop-types';

class InputSubtitle extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <section>
        <label htmlFor="sub" data-testid="subtitle-input-label">
          Subtítulo
          <input
            type="text"
            name="subtitle"
            value={ value }
            data-testid="subtitle-input"
            onChange={ onChange }
          />
        </label>
      </section>
    );
  }
}

InputSubtitle.propTypes = {
  onChange: Proptypes.func,
  value: Proptypes.string,
}.isrequired;

export default InputSubtitle;

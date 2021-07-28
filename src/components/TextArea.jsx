import React from 'react';
import Proptypes from 'prop-types';

class TextArea extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <section>
        <label htmlFor="storyline" data-testid="storyline-input-label">
          Sinopse
          <textarea
            name="storyline"
            value={ value }
            data-testid="storyline-input"
            onChange={ onChange }
          />
        </label>
      </section>
    );
  }
}

TextArea.propTypes = {
  onChange: Proptypes.func,
  value: Proptypes.string,
}.isrequired;

export default TextArea;

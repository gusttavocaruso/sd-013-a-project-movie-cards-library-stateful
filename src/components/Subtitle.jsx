import React, { Component } from 'react';
import Proptypes from 'prop-types';

class Subtitle extends Component {
  render() {
    const { subTitle, onChange } = this.props;

    return (
      <label htmlFor="subtitle" data-testid="subtitle-input-label">
        Subtítulo
        <input
          value={ subTitle }
          data-testid="subtitle-input"
          name="subtitle"
          id="subtitle"
          onChange={ onChange }
        />
      </label>
    );
  }
}

Subtitle.propTypes = {
  subTitle: Proptypes.string,
  onChange: Proptypes.func,
}.isRequired;

export default Subtitle;

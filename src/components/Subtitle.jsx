import React from 'react';
import PropTypes from 'prop-types';

class Subtitle extends React.Component {
  render() {
    const { valueComp, onChangeComp } = this.props;
    return (
      <label htmlFor="subtitle" data-testid="subtitle-input-label">
        Subtítulo
        <input
          name="subtitle"
          type="text"
          id="subtitle"
          data-testid="subtitle-input"
          value={ valueComp }
          onChange={ onChangeComp }
        />
      </label>
    );
  }
}

Subtitle.propTypes = {
  valueComp: PropTypes.string.isRequired,
  onChangeComp: PropTypes.func.isRequired,
};

export default Subtitle;

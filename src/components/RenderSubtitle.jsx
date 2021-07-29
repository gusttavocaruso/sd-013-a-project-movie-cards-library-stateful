import React from 'react';
import PropTypes from 'prop-types';

class RenderSubtitle extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label data-testid="subtitle-input-label" htmlFor="subTitleText">
        Subtítulo:
        <input
          type="text"
          name="subtitle"
          id="subTitleText"
          value={ value }
          onChange={ onChange }
          data-testid="subtitle-input"
        />
      </label>
    );
  }
}

RenderSubtitle.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default RenderSubtitle;

import React from 'react';
import PropTypes from 'prop-types';

class RenderTitle extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label data-testid="title-input-label" htmlFor="titleText">
        Título:
        <input
          type="text"
          name="title"
          id="titleText"
          value={ value }
          onChange={ onChange }
          data-testid="title-input"
        />
      </label>
    );
  }
}

RenderTitle.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default RenderTitle;

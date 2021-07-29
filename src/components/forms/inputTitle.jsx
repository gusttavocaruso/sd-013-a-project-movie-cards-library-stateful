import React from 'react';
import PropTypes from 'prop-types';

class InputTitle extends React.Component {
  render() {
    const { onChange, value } = this.props;
    return (
      <div>
        <label data-testid="title-input-label" htmlFor="tle-ipt">
          Título
          <input
            data-testid="title-input"
            id="tle-ipt"
            type="text"
            value={ value }
            onChange={ onChange }
            name="title"
          />
        </label>
      </div>
    );
  }
}

InputTitle.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default InputTitle;

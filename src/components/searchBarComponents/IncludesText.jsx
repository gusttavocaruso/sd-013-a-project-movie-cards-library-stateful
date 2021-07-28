import React from 'react';
import PropTypes from 'prop-types';

class IncludesText extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label
        data-testid="text-input-label"
        onChange={ onChange }
        htmlFor="input-filter"
      >
        Inclui o texto
        <input
          data-testid="text-input"
          type="text"
          id="input-filter"
          value={ value }
        />
      </label>
    );
  }
}

IncludesText.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

IncludesText.defaultProps = {
  value: '',
  onChange: undefined,
};
export default IncludesText;

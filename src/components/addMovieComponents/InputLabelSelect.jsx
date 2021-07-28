import React from 'react';
import PropTypes from 'prop-types';

class InputLabelText extends React.Component {
  render() {
    const { name, innerLabel, value, dataTestId, onChange } = this.props;
    return (
      <label
        htmlFor={ name }
        data-testid={ `${dataTestId}-input-label` }
      >
        {innerLabel}
        <select
          name={ name }
          data-testid={ `${dataTestId}-input` }
          value={ value }
          onChange={ onChange }
        >
          <option value="action" data-testid="genre-option">Ação</option>
          <option value="comedy" data-testid="genre-option">Comédia</option>
          <option value="thriller" data-testid="genre-option">Suspense</option>
        </select>
      </label>
    );
  }
}

InputLabelText.propTypes = {
  name: PropTypes.string.isRequired,
  innerLabel: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  dataTestId: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default InputLabelText;

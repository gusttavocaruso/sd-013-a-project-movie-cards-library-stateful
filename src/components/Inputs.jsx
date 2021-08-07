import React from 'react';
import PropTypes from 'prop-types';

class Inputs extends React.Component {
  render() {
    const {
      label,
      stateName,
      inputType,
      identifier,
      onChangeInput,
      inputValue,
      ...rest
    } = this.props;
    return (
      <label htmlFor={ `${identifier}` } data-testid={ `${identifier}-label` }>
        { label }
        <input
          name={ stateName }
          type={ inputType }
          id={ identifier }
          data-testid={ identifier }
          onChange={ onChangeInput }
          value={ inputValue }
          { ...rest }
        />
      </label>
    );
  }
}

Inputs.propTypes = {
  label: PropTypes.string.isRequired,
  stateName: PropTypes.string.isRequired,
  inputType: PropTypes.string.isRequired,
  identifier: PropTypes.string.isRequired,
  onChangeInput: PropTypes.func.isRequired,
  inputValue: PropTypes.node.isRequired,
  rest: PropTypes.node,
};

Inputs.defaultProps = {
  rest: null,
};

export default Inputs;

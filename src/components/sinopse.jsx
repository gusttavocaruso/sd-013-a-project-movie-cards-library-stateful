import React from 'react';
import PropTypes from 'prop-types';

class Sinopse extends React.Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <label htmlFor="TextArea" data-testid="storyline-input-label">
        Sinopse
        <textarea
          name="storyline"
          id=""
          cols="30"
          rows="10"
          value={ value }
          data-testid="storyline-input"
          onChange={ handleChange }
        />
      </label>
    );
  }
}

Sinopse.propTypes = {
  value: PropTypes.string,
  handleChange: PropTypes.func,
};
Sinopse.defaultProps = {
  value: '',
  handleChange: 'function',
};

export default Sinopse;

import React from 'react';
import PropTypes from 'prop-types';

class Sinopse extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label htmlFor="add-sinopse" data-testid="storyline-input-label">
        Sinopse
        <textarea
          data-testid="storyline-input"
          id="add-sinopse"
          name="storyline"
          type="text"
          value={ value }
          onChange={ onChange }
        />
      </label>
    );
  }
}

Sinopse.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

Sinopse.defaultProps = {
  value: '',
};

export default Sinopse;

import React from 'react';
import PropTypes from 'prop-types';

class Storyline extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <form>
        <label data-testid="storyline-input-label" htmlFor="storyline">
          Sinopse
          <input
            name="storyline"
            value={ value }
            id="storyline"
            data-testid="storyline-input"
            onChange={ onChange }
          />
        </label>
      </form>
    );
  }
}

Storyline.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Storyline;

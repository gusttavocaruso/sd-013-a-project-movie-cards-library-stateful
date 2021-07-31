import React from 'react';
import PropTypes from 'prop-types';

class Storyline extends React.Component {
  render() {
    const { onChange, storyline } = this.props;
    return (
      <label data-testid="storyline-input-label" htmlFor="image">
        Sinopse:
        <textarea
          type="text"
          name="storyline"
          value={ storyline }
          onChange={ onChange }
          data-testid="storyline-input"
        />
      </label>
    );
  }
}

Storyline.propTypes = {
  onChange: PropTypes.func.isRequired,
  storyline: PropTypes.string.isRequired,
};

export default Storyline;

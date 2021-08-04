import React from 'react';
import PropTypes from 'prop-types';

class Storyline extends React.Component {
  render() {
    const { onChange, value } = this.props;
    return (
      <label data-testid="storyline-input-label" htmlFor="image">
        Sinopse:
        <textarea
          type="text"
          name="storyline"
          value={ value }
          onChange={ onChange }
          data-testid="storyline-input"
        />
      </label>
    );
  }
}

Storyline.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default Storyline;
// Feito com Ajuda do Ygor Maia

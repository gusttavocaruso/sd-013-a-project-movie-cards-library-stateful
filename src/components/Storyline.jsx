import React from 'react';
import PropTypes from 'prop-types';

class Sinopse extends React.Component {
  render() {
    const { storyline } = this.props;
    return (
      <label data-testid="storyline-input-label" htmlFor="textarea">
        Sinopse
        <textarea
          type="text"
          data-testid="storyline-input"
          value={ storyline }
          onChange={ this.handleChange }
        />
      </label>
    );
  }
}

Sinopse.propTypes = {
  storyline: PropTypes.string.isRequired,
};

export default Sinopse;

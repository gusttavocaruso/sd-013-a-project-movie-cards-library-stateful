import React from 'react';
import PropTypes from 'prop-types';

class Storyline extends React.Component {
  render() {
    const { storyline, updateState } = this.props;
    return (
      <div>
        <label htmlFor="sinopse" data-testid="storyline-input-label">
          Sinopse
          <textarea
            name="storyline"
            value={ storyline }
            onChange={ updateState }
            data-testid="storyline-input"
            id="sinopse"
          />
        </label>
      </div>
    );
  }
}

Storyline.propTypes = {
  storyline: PropTypes.string,
  updateState: PropTypes.func,
};

Storyline.defaultProps = {
  storyline: '',
  updateState: () => { },
};

export default Storyline;

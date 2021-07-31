import React from 'react';
import PropTypes from 'prop-types';

class Subtitle extends React.Component {
  render() {
    const { subtitle, updateState } = this.props;
    return (
      <div>
        <label htmlFor="input-subtitle" data-testid="subtitle-input-label">
          Subtítulo
          <input
            name="subtitle"
            value={ subtitle }
            onChange={ updateState }
            data-testid="subtitle-input"
            type="text"
            id="input-subtitle"
          />
        </label>
      </div>
    );
  }
}

Subtitle.propTypes = {
  subtitle: PropTypes.string,
  updateState: PropTypes.func,
};

Subtitle.defaultProps = {
  subtitle: '',
  updateState: () => { },
};

export default Subtitle;

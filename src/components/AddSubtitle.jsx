import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddSubtitle extends Component {
  render() {
    const { subtitle, onChange } = this.props;
    return (
      <label htmlFor="inputSubtitle" data-testid="subtitle-input-label">
        Subtítulo
        <input
          id="subtitle"
          name="subtitle"
          type="text"
          data-testid="subtitle-input"
          value={ subtitle }
          onChange={ onChange }
        />
      </label>
    );
  }
}

AddSubtitle.propTypes = {
  subtitle: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default AddSubtitle;

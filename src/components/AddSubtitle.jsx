import PropTypes from 'prop-types';
import React from 'react';

class AddSubtitle extends React.Component {
  render() {
    const { subtitle, handleChangeText } = this.props;
    return (
      <label htmlFor="input-change-subtitle" data-testid="subtitle-input-label">
        Subtítulo
        <input
          type="text"
          name="subtitle"
          value={ subtitle }
          data-testid="subtitle-input"
          onChange={ handleChangeText }
          id="input-change-subtitle"
        />
      </label>
    );
  }
}

AddSubtitle.propTypes = {
  handleChangeText: PropTypes.func.isRequired,
  subtitle: PropTypes.string.isRequired,
};

export default AddSubtitle;

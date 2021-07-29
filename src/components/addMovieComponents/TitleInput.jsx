import React from 'react';
import PropTypes from 'prop-types';

class TitleInput extends React.Component {
  render() {
    const { HandleChange, componentValue } = this.props;
    return (
      <label data-testid="title-input-label" htmlFor="title">
        Título
        <input
          type="text"
          value={ componentValue }
          data-testid="title-input"
          onChange={ HandleChange }
          name="title"
        />
      </label>
    );
  }
}

TitleInput.propTypes = {
  HandleChange: PropTypes.func,
  componentValue: PropTypes.string,
};

TitleInput.defaultProps = {
  HandleChange: undefined,
  componentValue: undefined,
};

export default TitleInput;

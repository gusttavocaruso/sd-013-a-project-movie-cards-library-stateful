import React from 'react';
import PropTypes from 'prop-types';

class TitleInput extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label htmlFor="getTitle" data-testid="title-input-label">
        Título
        <input
          name="title"
          id="title"
          type="text"
          value={ value }
          data-testid="title-input"
          onChange={ onChange }
        />
      </label>
    );
  }
}

TitleInput.propTypes = { value: PropTypes.string }.isRequired;

TitleInput.defaultProps = {
  value: 'undefined',
};

export default TitleInput;

import React from 'react';
import PropTypes from 'prop-types';

class Title extends React.Component {
  render() {
    const { value, onChange } = this.props;

    return (
      <label htmlFor="title" data-testid="title-input-label">
        Título
        <input
          type="text"
          id="title"
          data-testid="title-input"
          name="title"
          value={ value }
          onChange={ onChange }
        />
      </label>
    );
  }
}

Title.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
}.isRequired;

export default Title;

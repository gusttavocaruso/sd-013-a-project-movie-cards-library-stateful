import React from 'react';
import PropTypes from 'prop-types';

class Title extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label htmlFor="add-title" data-testid="title-input-label">
        Título
        <input
          data-testid="title-input"
          id="add-title"
          name="title"
          type="text"
          value={ value }
          onChange={ onChange }
        />
      </label>
    );
  }
}

Title.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

Title.defaultProps = {
  value: '',
};

export default Title;

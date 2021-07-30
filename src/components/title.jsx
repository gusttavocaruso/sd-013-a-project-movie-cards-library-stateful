import React from 'react';
import PropTypes from 'prop-types';

class TitleInput extends React.Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <label htmlFor="InputText" data-testid="title-input-label">
        Título
        <input
          name="title"
          type="text"
          value={ value }
          data-testid="title-input"
          onChange={ handleChange }
        />
      </label>
    );
  }
}

TitleInput.propTypes = {
  value: PropTypes.string,
  handleChange: PropTypes.func,
};
TitleInput.defaultProps = {
  value: '',
  handleChange: 'function',
};

export default TitleInput;

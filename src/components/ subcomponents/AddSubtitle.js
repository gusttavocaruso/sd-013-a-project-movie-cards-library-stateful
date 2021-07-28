import React from 'react';
import PropTypes from 'prop-types';

class AddSubtitle extends React.Component {
  render() {
    const { value, handleChange } = this.props;

    return (
      <label htmlFor="add-subtitle" data-testid="subtitle-input-label">
        Subtítulo
        <input
          name="subtitle"
          id="add-subtitle"
          type="text"
          value={ value }
          data-testid="subtitle-input"
          onChange={ handleChange }
        />
      </label>
    );
  }
}

AddSubtitle.propTypes = {
  value: PropTypes.string,
  handleChange: PropTypes.func,
};

AddSubtitle.defaultProps = {
  value: '',
  handleChange: undefined,
};

export default AddSubtitle;

import React from 'react';
import PropTypes from 'prop-types';

class AddTitle extends React.Component {
  render() {
    const { value, handleChange } = this.props;

    return (
      <label htmlFor="add-title" data-testid="title-input-label">
        Título
        <input
          name="title"
          className="add-title"
          id="add-title"
          type="text"
          value={ value }
          data-testid="title-input"
          onChange={ handleChange }
        />
      </label>
    );
  }
}

AddTitle.propTypes = {
  value: PropTypes.string,
  handleChange: PropTypes.func,
};

AddTitle.defaultProps = {
  value: '',
  handleChange: undefined,
};

export default AddTitle;

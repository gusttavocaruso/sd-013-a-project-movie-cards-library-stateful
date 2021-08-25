import PropTypes from 'prop-types';
import React from 'react';

class AddTitle extends React.Component {
  render() {
    const { title, handleChangeText } = this.props;
    return (
      <label htmlFor="input-change-title" data-testid="title-input-label">
        Título
        <input
          type="text"
          name="title"
          value={ title }
          data-testid="title-input"
          onChange={ handleChangeText }
          id="input-change-title"
        />
      </label>
    );
  }
}

AddTitle.propTypes = {
  handleChangeText: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};

export default AddTitle;

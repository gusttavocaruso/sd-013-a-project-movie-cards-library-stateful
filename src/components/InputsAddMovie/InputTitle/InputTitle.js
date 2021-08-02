import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputTitle extends Component {
  render() {
    const { title, onChange } = this.props;
    return (
      <div>
        <label htmlFor="movie-title" data-testid="title-input-label">
          Título
          <input
            name="title"
            type="text"
            id="movie-title"
            value={ title }
            onChange={ onChange }
            data-testid="title-input"
          />
        </label>
      </div>
    );
  }
}

InputTitle.propTypes = {
  title: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default InputTitle;

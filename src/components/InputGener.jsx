import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputGener extends Component {
  render() {
    const { value, onChange } = this.props;

    return (
      <label
        data-testid="genre-input-label"
        htmlFor="input_genre"
      >
        Gênero
        <select
          data-testid="genre-input"
          value={ value }
          onChange={ onChange }
          id="input_genre"
          name={ genre }
        >
          <option
            data-testid="genre-option"
            value="action"
          >
            Ação
          </option>
          <option
            data-testid="genre-option"
            value="comedy"
          >
            Comédia
          </option>
          <option
            data-testid="genre-option"
            value="thriller"
          >
            Suspense
          </option>
        </select>
      </label>
    );
  }
}

InputGener.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default InputGener;

import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Textinput extends Component {
  render() {
    const { searchText, onSearchTextChange } = this.props;
    return (
      <label
        className="search-text-label"
        htmlFor="text-input"
        data-testid="text-input-label"
      >
        Inclui o texto
        <input
          className="search-text-input"
          name="text-input"
          data-testid="text-input"
          type="text"
          value={ searchText }
          onChange={ onSearchTextChange }
        />
      </label>
    );
  }
}

Textinput.propTypes = {
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
};

export default Textinput;
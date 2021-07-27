import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../SearchBar.css';

class SearchBar extends Component {
  constructor() {
    super();

    this.renderTextInput = this.renderTextInput.bind(this);
    this.renderCheckBox = this.renderCheckBox.bind(this);
    this.renderSelect = this.renderSelect.bind(this);
  }

  renderTextInput() {
    const { searchText, onSearchTextChange } = this.props;
    return (
      <label htmlFor="searchText" data-testid="text-input-label">
        Inclui o texto:
        <input
          type="text"
          name="searchText"
          id="searchText"
          value={ searchText }
          onChange={ onSearchTextChange }
          data-testid="text-input"
        />
      </label>
    );
  }

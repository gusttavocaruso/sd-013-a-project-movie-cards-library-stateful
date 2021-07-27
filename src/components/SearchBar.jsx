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
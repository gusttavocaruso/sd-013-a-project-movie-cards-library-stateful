import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './TitleandSubtitle.css';

class TitleandSubtitle extends Component {
  render() {
    const { title, subtitle, handleChange } = this.props;
    return (
      <div>
        <label
          htmlFor="input-title"
          data-testid="title-input-label"
          className="label-form"
        >
          Título
          <input
            name="title"
            id="input-title"
            placeholder="Insira o título do filme"
            type="text"
            value={ title }
            data-testid="title-input"
            onChange={ handleChange }
          />
        </label>
        <label
          htmlFor="input-subtitle"
          data-testid="subtitle-input-label"
          className="label-form"
        >
          Subtítulo
          <input
            name="subtitle"
            placeholder="Insira o subtítulo do filme"
            type="text"
            id="input-subtitle"
            value={ subtitle }
            data-testid="subtitle-input"
            onChange={ handleChange }
          />
        </label>
      </div>
    );
  }
}

TitleandSubtitle.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default TitleandSubtitle;

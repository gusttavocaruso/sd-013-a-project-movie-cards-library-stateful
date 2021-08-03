import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TitleSubtitle extends Component {
  render() {
    const { title, subtitle, handleChange } = this.props;
    return (
      <div>
        <label htmlFor="title-input" data-testid="title-input-label">
          Título
          <input
            id="title-input"
            type="text"
            name="title"
            value={ title }
            onChange={ handleChange }
            data-testid="title-input"
          />
        </label>
        <label htmlFor="subtitle-input" data-testid="subtitle-input-label">
          Subtítulo
          <input
            id="subtitle-input"
            type="text"
            name="subtitle"
            value={ subtitle }
            onChange={ handleChange }
            data-testid="subtitle-input"
          />
        </label>
      </div>
    );
  }
}

TitleSubtitle.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default TitleSubtitle;

import React, { Component } from 'react';
import PropTypes from 'prop-types';

class HeaderCard extends Component {
  render() {
    const { title, handleChange, subtitle } = this.props;

    return (
      <div>
        <label data-testid="title-input-label" htmlFor="title">
          Título
          <input
            id="title"
            type="text"
            name="title"
            data-testid="title-input"
            onChange={ handleChange }
            value={ title }
          />
        </label>

        <label data-testid="subtitle-input-label" htmlFor="subtitle">
          Subtítulo
          <input
            id="subtitle"
            type="text"
            name="subtitle"
            data-testid="subtitle-input"
            onChange={ handleChange }
            value={ subtitle }
          />
        </label>
      </div>
    );
  }
}

HeaderCard.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default HeaderCard;

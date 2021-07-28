import React from 'react';
import PropTypes from 'prop-types';

class Parte1 extends React.Component {
  render() {
    const { title, onChange, subtitle } = this.props;
    return (
      <div>
        <label htmlFor="title" data-testid="title-input-label">
          Sinopse
          <input
            type="text"
            name="title"
            id="title"
            data-testid="title-input"
            value={ title }
            onChange={ onChange }
          />
        </label>
        <label htmlFor="subtitle" data-testid="subtitle-input-label">
          Subtítulo
          <input
            type="text"
            name="subtitle"
            id="subtitle"
            data-testid="subtitle-input"
            value={ subtitle }
            onChange={ onChange }
          />
        </label>
      </div>
    );
  }
}
Parte1.propTypes = {
  title: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  subtitle: PropTypes.string.isRequired,
};

export default Parte1;

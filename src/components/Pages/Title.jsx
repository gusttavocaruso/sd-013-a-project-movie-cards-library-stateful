import React from 'react';
import PropTypes from 'prop-types';

class Title extends React.Component {
  render() {
    const { onChange, value } = this.props;

    return (

      <label data-testid="title-input-label" htmlFor="title">
        Título:
        <input
          type="text"
          name="title"
          value={ value }
          onChange={ onChange }
          data-testid="title-input"
        />
      </label>
    );
  }
}

Title.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default Title;
// Feito com Ygor Maia

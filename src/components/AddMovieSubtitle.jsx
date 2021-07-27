import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddMovieSubtitle extends Component {
  render() {
    const { subtitle, onChangeFunc } = this.props;
    return (
      <label data-testid="subtitle-input-label" htmlFor="subtitle">
        Subtítulo
        <input
          data-testid="subtitle-input"
          id="subtitle"
          type="text"
          name="subtitle"
          value={ subtitle }
          onChange={ onChangeFunc }
        />
      </label>
    );
  }
}

AddMovieSubtitle.propTypes = {
  subtitle: PropTypes.string.isRequired,
  onChangeFunc: PropTypes.func.isRequired,
};

export default AddMovieSubtitle;

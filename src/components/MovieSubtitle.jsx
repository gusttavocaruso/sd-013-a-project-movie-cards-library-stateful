import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MovieSubTitle extends Component {
  render() {
    const { subtitle, funcao } = this.props;
    return (
      <label htmlFor="movieSubTitle" data-testid="subtitle-input-label">
        Subtítulo
        <input
          type="text"
          name="movieSubTitle"
          data-testid="subtitle-input"
          value={ subtitle }
          onChange={ funcao }
        />
      </label>
    );
  }
}

MovieSubTitle.propTypes = {
  subtitle: PropTypes.string.isRequired,
  funcao: PropTypes.func.isRequired,
};

export default MovieSubTitle;

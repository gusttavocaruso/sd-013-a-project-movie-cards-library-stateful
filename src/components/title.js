import React from 'react';
import PropTypes from 'prop-types';

class Title extends React.Component {
  render() {
    const { title } = this.props;

    return (
      <label htmlFor="subtitulo" data-testid="title-input-label">
        Título
        <input
          data-testid="title-input"
          id="subtitulo"
          type="text"
          value={ title }
        />
      </label>
    );
  }
}

Title.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Title;

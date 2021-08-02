import React from 'react';
import PropTypes from 'prop-types';

class Title extends React.Component {
  render() {
    const { title } = this.props;
    return (
      <label data-testid="title-input-label" htmlFor="title">
        Título
        <input
          name="title"
          type="text"
          value={ title }
          onChange={ onChange }
          data-testid="title-input"
        />
      </label>
    );
  }
}

Title.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Title;

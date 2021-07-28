import React from 'react';
import PropTypes from 'prop-types';

class Title extends React.Component {
  render() {
    const { title, onChange } = this.props;
    return (
      <label htmlFor="title" data-testid="title-input-label">
        Sinopse
        <input
          type="text"
          name="title"
          id="title"
          data-testid="title-input"
          title={ title }
          onChange={ onChange }
        />
      </label>
    );
  }
}
Title.propTypes = {
  title: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Title;

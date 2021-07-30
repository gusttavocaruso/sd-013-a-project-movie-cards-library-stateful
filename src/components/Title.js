import React from 'react';
import PropTypes from 'prop-types';

class Title extends React.Component {
  render() {
    const { title, onChange } = this.props;

    return (
      <label data-testid="title-input-label" htmlFor="title">
        Título
        <input
          name="title"
          data-testid="title-input"
          id="title"
          onChange={ onChange }
          type="text"
          value={ title }
        />
      </label>
    );
  }
}

Title.propTypes = {
  title: PropTypes.string,
  onChange: PropTypes.func,
};

Title.defaultProps = {
  title: '',
  onChange: {},
};

export default Title;

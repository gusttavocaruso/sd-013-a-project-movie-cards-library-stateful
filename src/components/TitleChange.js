import React from 'react';
import PropTypes from 'prop-types';

class TitleChange extends React.Component {
  render() {
    const { title, onChange } = this.props;

    return (
      <label
        htmlFor="change-text"
        data-testid="title-input-label"
      >
        Título
        <input
          type="text"
          id="change-text"
          name="title"
          value={ title }
          data-testid="title-input"
          onChange={ onChange }
        />
      </label>
    );
  }
}

TitleChange.propTypes = {
  title: PropTypes.string,
  onChange: PropTypes.func,
};

TitleChange.defaultProps = {
  title: '',
  onChange: [],
};

export default TitleChange;

import React from 'react';
import PropTypes from 'prop-types';

class Title extends React.Component {
  render() {
    const { valueComp, onChangeComp } = this.props;
    return (
      <label htmlFor="title" data-testid="title-input-label">
        Título
        <input
          name="title"
          type="text"
          id="title"
          data-testid="title-input"
          value={ valueComp }
          onChange={ onChangeComp }
        />
      </label>
    );
  }
}

Title.propTypes = {
  valueComp: PropTypes.string.isRequired,
  onChangeComp: PropTypes.func.isRequired,
};

export default Title;

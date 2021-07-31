import React from 'react';
import PropTypes from 'prop-types';

class Title extends React.Component {
  render() {
    const { title, updateState } = this.props;
    return (
      <div>
        <label htmlFor="input-title" data-testid="title-input-label">
          Título
          <input
            name="title"
            value={ title }
            onChange={ updateState }
            data-testid="title-input"
            type="text"
            id="input-title"
          />
        </label>
      </div>
    );
  }
}

Title.propTypes = {
  title: PropTypes.string,
  updateState: PropTypes.func,
};

Title.defaultProps = {
  title: '',
  updateState: () => { },
};

export default Title;

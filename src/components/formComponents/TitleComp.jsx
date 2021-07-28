import React from 'react';
import PropTypes from 'prop-types';

class TitleComp extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label htmlFor="input-title" data-testid="title-input-label">
        Título
        <input
          value={ value }
          data-testid="title-input"
          type="text"
          onChange={ onChange }
          name="title"
          id="input-title"
        />
      </label>
    );
  }
}

TitleComp.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

TitleComp.defaultProps = {
  value: '',
  onChange: undefined,
};

export default TitleComp;

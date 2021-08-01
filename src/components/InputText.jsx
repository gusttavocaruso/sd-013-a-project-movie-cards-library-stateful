import React from 'react';
import PropTypes from 'prop-types';

class InputText extends React.Component {
  render() {
    const { searchTextKey, onSearchTextChangeKey } = this.props;

    return (
      <label data-testid="text-input-label" htmlFor="input-text">
        Inclui o texto:
        <input
          type="text"
          value={ searchTextKey }
          onChange={ onSearchTextChangeKey }
          data-testid="text-input"
        />
      </label>
    );
  }
}

InputText.propTypes = {
  searchTextKey: PropTypes.string,
  onSearchTextChangeKey: PropTypes.func,
};

InputText.defaultProps = {
  searchTextKey: '',
  onSearchTextChangeKey: PropTypes.func,
};

export default InputText;

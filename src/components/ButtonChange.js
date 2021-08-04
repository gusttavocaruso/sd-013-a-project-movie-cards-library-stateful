import React from 'react';
import PropTypes from 'prop-types';

class ButtonChange extends React.Component {
  render() {
    const { onClick } = this.props;

    return (
      <button
        type="submit"
        data-testid="send-button"
        onClick={ onClick }
      >
        Adicionar filme
      </button>
    );
  }
}

ButtonChange.propTypes = {
  onClick: PropTypes.func,
};

ButtonChange.defaultProps = {
  onClick: [],
};

export default ButtonChange;

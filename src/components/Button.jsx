import React from 'react';
import Proptypes from 'prop-types';

class Button extends React.Component {
  render() {
    const { onClick } = this.props;
    return (
      <section>
        <button
          type="submit"
          data-testid="send-button"
          onClick={ onClick }
        >
          Adicionar filme
        </button>
      </section>
    );
  }
}

Button.propTypes = {
  onClick: Proptypes.func,
}.isRequired;

export default Button;

import React from 'react';

class Button extends React.Component {
  render() {
    return (
      <div>
        <button
          data-testid="send-button"
          type="button"
        >
          Adicionar filme
        </button>
      </div>
    );
  }
}

//   Button.propTypes = {
//   handleChange: PropTypes.func.isRequired,
//   callBack: PropTypes.func.isRequired,
// };

export default Button;

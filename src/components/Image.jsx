import React from 'react';
import PropTypes from 'prop-types';

class Imagem extends React.Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     imagePath: '',
  //   };
  //   this.handleChange = this.handleChange.bind(this);
  // }

  // handleChange(event) {
  //   this.setState({ imagePath: event.target.value });
  // }

  render() {
    const { imagePath, handleChange } = this.props;
    return (
      <label data-testid="image-input-label" htmlFor="image">
        Imagem
        <input
          name="imagePath"
          type="text"
          data-testid="image-input"
          value={ imagePath }
          onChange={ handleChange }
        />
      </label>
    );
  }
}

Imagem.propTypes = {
  imagePath: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Imagem;

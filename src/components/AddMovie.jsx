// implement AddMovie component here
// https://pt-br.reactjs.org/docs/typechecking-with-proptypes.html
// https://imasters.com.br/front-end/mantendo-estados-de-componentes-no-react-com-state

import React from 'react';
import PropTypes from 'prop-types';

// const inicio = {
//   subtitle: '',
//   title: '',
//   imagePath: '',
//   storyline: '',
//   rating: 0,
//   genre: 'action',
// };

class AddMovie extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.handleChange = this.handleChange.bind(this);
  //   this.state = inicio;
  // }

  // handleChange({ target }) {
  //   const { name, value } = target;
  //   this.setState({ [name]: value, })
  // }

  render() {
    const { title, subtitle, imagePath } = this.props;
    return (
      <form data-testid="add-movie-form">
        <label data-testid="title-input-label" htmlFor="title">
          Título
          <input
            type="text"
            data-testid="title-input"
            value={ title }
            onChange={ this.handleChange }
          />
        </label>
        <label data-testid="subtitle-input-label" htmlFor="subtitle">
          Subtítulo
          <input
            type="text"
            data-testid="subtitle-input"
            value={ subtitle }
            onChange={ this.handleChange }
          />
        </label>
        <label data-testid="image-input-label" htmlFor="image">
          Imagem
          <input
            type="text"
            data-testid="image-input"
            value={ imagePath }
            onChange={ this.handleChange }
          />
        </label>
      </form>
    );
  }
}

AddMovie.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  imagePath: PropTypes.string.isRequired,
};

export default AddMovie;

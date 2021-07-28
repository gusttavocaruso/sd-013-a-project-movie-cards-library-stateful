// implement AddMovie component here
// https://pt-br.reactjs.org/docs/typechecking-with-proptypes.html
// https://imasters.com.br/front-end/mantendo-estados-de-componentes-no-react-com-state
// Partes do handleChange, foi pego do código da aula ao vivo antes do projeto.
import React from 'react';
// import PropTypes from 'prop-types';
import Title from './title';
import Subtitle from './subtitle';
import Imagem from './image';
import Sinopse from './storyline';
import Rate from './Rating';

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
    return (
      <form data-testid="add-movie-form">
        <Title />
        <Subtitle />
        <Imagem />
        <Sinopse />
        <Rate />
      </form>
    );
  }
}

// AddMovie.propTypes = {
// // genre: PropTypes.string.isRequired,
// };

export default AddMovie;

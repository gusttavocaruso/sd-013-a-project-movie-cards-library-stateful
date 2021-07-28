// implement AddMovie component here
// https://pt-br.reactjs.org/docs/typechecking-with-proptypes.html
// https://imasters.com.br/front-end/mantendo-estados-de-componentes-no-react-com-state
// Partes do handleChange, foi pego do código da aula ao vivo antes do projeto.
import React from 'react';
// import PropTypes from 'prop-types';
import Title from './Title';
import Subtitle from './Subtitle';
import Imagem from './Image';
import Sinopse from './Storyline';
import Rate from './Rate';
import Genre from './Genre';

class AddMovie extends React.Component {
  render() {
    return (
      <form data-testid="add-movie-form">
        <Title />
        <Subtitle />
        <Imagem />
        <Sinopse />
        <Rate />
        <Genre />
        {/* <button
          type="button"
          data-testid="send-button"
          onClick={ this.onClick }
          >
          Adicionar filme
        </button> */}
      </form>
    );
  }
}

export default AddMovie;

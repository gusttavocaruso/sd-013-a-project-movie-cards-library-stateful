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
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
    // Aula
    this.handleChange = this.handleChange.bind(this);
  }
  // Aula

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const {
      title,
      subtitle,
      imagePath,
      storyline,
      rating,
      genre,
    } = this.state;
    return (
      <form data-testid="add-movie-form">
        <Title title={ title } handleChange={ this.handleChange } />
        <Subtitle subtitle={ subtitle } handleChange={ this.handleChange } />
        <Imagem imagePath={ imagePath } handleChange={ this.handleChange } />
        <Sinopse storyline={ storyline } handleChange={ this.handleChange } />
        <Rate rating={ rating } handleChange={ this.handleChange } />
        <Genre genre={ genre } handleChange={ this.handleChange } />
      </form>
    );
  }
}

// AddMovie.propTypes = {

// };

export default AddMovie;

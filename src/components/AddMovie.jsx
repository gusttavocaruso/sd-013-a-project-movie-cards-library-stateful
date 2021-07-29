// implement AddMovie component here
// https://pt-br.reactjs.org/docs/typechecking-with-proptypes.html
// https://imasters.com.br/front-end/mantendo-estados-de-componentes-no-react-com-state
// Partes do handleChange, foi pego do código da aula ao vivo antes do projeto.
import React from 'react';
import PropTypes from 'prop-types';
import Title from './Title';
import Subtitle from './Subtitle';
import Imagem from './Image';
import Sinopse from './Storyline';
import Rate from './Rate';
import Genre from './Genre';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  // titleChange = (event) => {
  //   this.setState({ title: event.target.value });
  // } 

  // subtitleChange = (event) => {
  //   this.setState({ subtitle: event.target.value });
  // }

  // genreChange = (event) => {
  //   this.setState({ genre: event.target.value });
  // }

  // imagepathChange = (event) => {
  //   this.setState({ imagePath: event.target.value });
  // }

  // ratingChange = (event) => {
  //   this.setState({ rating: event.target.value });
  // }

  // storylineChange = (event) => {
  //   this.setState({ storyline: event.target.value });
  // }
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleClick = () => {
    const { onClick } = this.props;
    onClick(this.state);
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  };

  render() {
    const {
      subtitle,
      title,
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
        <button
          name="button"
          type="button"
          data-testid="send-button"
          onClick={ this.handleClick }
        >
          Adicionar filme
        </button>
      </form>
    );
  }
}

AddMovie.PropTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;

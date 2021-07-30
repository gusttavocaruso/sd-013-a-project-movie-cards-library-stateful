import React from 'react';
import PropTypes from 'prop-types';
import Title from './Title';
import Subtitle from './Subtitle';
import Image from './Image';
import Storyline from './Storyline';
import RatingInput from './RatingInput';
import Genre from './Genre';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleOnClick = this.handleOnClick.bind(this);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  }

  handleOnClick() {
    // Desestrutura a função que chega via props
    const { onClick } = this.props;
    // Tal função espera receber como parâmetro o objeto estado atual desse componente
    onClick(this.state);
    // Após enviar deve resetar o estado do objeto para os valores iniciais (limpando o formulário)
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
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
      <form
        data-testid="add-movie-form"
        action=""
      >
        <Title value={ title } handleChange={ this.handleChange } />
        <Subtitle value={ subtitle } handleChange={ this.handleChange } />
        <Image value={ imagePath } handleChange={ this.handleChange } />
        <Storyline value={ storyline } handleChange={ this.handleChange } />
        <RatingInput value={ rating } handleChange={ this.handleChange } />
        <Genre value={ genre } handleChange={ this.handleChange } />
        <button
          data-testid="send-button"
          type="button"
          onClick={ this.handleOnClick }
        >
          Adicionar filme
        </button>
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
  // subtitle: PropTypes.string.isRequired,
  // title: PropTypes.string.isRequired,
  // imagePath: PropTypes.string.isRequired,
  // storyline: PropTypes.string.isRequired,
  // rating: PropTypes.number.isRequired,
  // genre: PropTypes.string.isRequired,
  // handleChange: PropTypes.func.isRequired,
};

export default AddMovie;

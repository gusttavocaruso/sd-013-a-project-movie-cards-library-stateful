import React from 'react';
import PropTypes from 'prop-types';
import Title from './Title';
import Subtitle from './Subtitle';
import Synopsis from './Synopsis';
import Avaliation from './Avaliation';
import Genre from './Genre';
import ImagePath from './ImagePath';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };

    this.handleChange = this.handleChange.bind(this);
    this.btnClick = this.btnClick.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  btnClick(onClick) {
    onClick(this.state);
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
    const { onClick } = this.props;
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      // metodo render tava com muitas linhas, tive que seguir a dica no notion
      // do Matheus Duarte de dividir a logica em componentes
      // notion https://www.notion.so/Projeto-Movie-Cards-Library-Stateful-95781cdbc8eb4f4b871505ab952495ba
      <form data-testid="add-movie-form">
        <Title title={ title } onChange={ this.handleChange } />
        <Subtitle subTitle={ subtitle } onChange={ this.handleChange } />
        <ImagePath imagePath={ imagePath } onChange={ this.handleChange } />
        <Synopsis imagePath={ storyline } onChange={ this.handleChange } />
        <Avaliation rating={ Number(rating) } onChange={ this.handleChange } />
        <Genre genre={ genre } onChange={ this.handleChange } />
        <button
          data-testid="send-button"
          type="submit"
          onClick={ () => this.btnClick(onClick) }
        >
          Adicionar filme
        </button>
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.arrayOf(
    PropTypes.func,
  ).isRequired,
};

export default AddMovie;

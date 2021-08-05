import React from 'react';
import PropTypes from 'prop-types';
import InputTitle from './InputTitle';
import InputSubtitle from './InputSubtitle';
import InputImagem from './InputImagem';
import InputTextArea from './InputTextArea';
import InputNumber from './InputNumber';
import InputSelect from './InputSelect';
import './AddMovie.css';

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

    this.handleChange = this.handleChange.bind(this);
    this.resetStatus = this.resetStatus.bind(this);
  }

  // handlechande serve pra de forma genérica pegar informações dos filhos e por no status
  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  // resetStatus serve pra receber a callback do pai MLibrary que pega o status atual, e depois reseta o status
  resetStatus(event) {
    event.preventDefault();
    const { onClick } = this.props;
    onClick(this.state);
    this.setState({
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <div id="addMovie-container">
        <form action="" data-testid="add-movie-form" id="form-addMovie">
          <InputTitle value={ title } handleChange={ this.handleChange } />
          <InputSubtitle value={ subtitle } handleChange={ this.handleChange } />
          <InputImagem value={ imagePath } handleChange={ this.handleChange } />
          <InputTextArea value={ storyline } handleChange={ this.handleChange } />
          <InputNumber value={ rating } handleChange={ this.handleChange } />
          <InputSelect value={ genre } handleChange={ this.handleChange } />

          <button
            data-testid="send-button"
            onClick={ this.resetStatus }
            type="submit"
          >
            Adicionar filme
          </button>

        </form>
      </div>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func,
}.isRequired;

export default AddMovie;

// obtive ajuda e Dicas do Cassio Pereira

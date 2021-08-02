// implement AddMovie component here
import React from 'react';
import PropTypes from 'prop-types';
import Field from './Field';
import fields from './fields';

class AddMovie extends React.Component {
  constructor() {
    super();

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  onChangeText = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  onClickAddMovie = () => {
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
  }

  createField(data, value, onChange) {
    const { labelTestId, htmlFor, text, type, id, name, inputTestId } = data;
    return (
      <Field
        labelTestId={ labelTestId }
        htmlFor={ htmlFor }
        text={ text }
        type={ type }
        id={ id }
        name={ name }
        inputTestId={ inputTestId }
        value={ value }
        onChange={ onChange }
      />
    );
  }

  render() {
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        { this.createField(fields[0], title, this.onChangeText) }
        { this.createField(fields[1], subtitle, this.onChangeText) }
        { this.createField(fields[2], imagePath, this.onChangeText) }
        <label data-testid="storyline-input-label" htmlFor="sinopse">
          Sinopse
          <textarea
            id="sinopse"
            name="storyline"
            data-testid="storyline-input"
            value={ storyline }
            onChange={ this.onChangeText }
          />
        </label>
        { this.createField(fields[3], rating, this.onChangeText) }
        <label data-testid="genre-input-label" htmlFor="genero">
          Gênero
          <select
            data-testid="genre-input"
            id="genero"
            name="genre"
            value={ genre }
            onChange={ this.onChangeText }
          >
            <option data-testid="genre-option" value="action">Ação</option>
            <option data-testid="genre-option" value="comedy">Comédia</option>
            <option data-testid="genre-option" value="thriller">Suspense</option>
          </select>
        </label>
        <button type="button" data-testid="send-button" onClick={ this.onClickAddMovie }>
          Adicionar filme
        </button>
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;

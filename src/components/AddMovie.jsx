import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AddLabel from './AddLabel';

const info = {
  title: {
    labelName: 'Título',
    htmlFor: 'submitTitle',
    LabelDataTestid: 'title-input-label',
    id: 'submitTitle',
    type: 'text',
    imputDataTestid: 'title-input',
    name: 'title',
  },
  subtitle: {
    labelName: 'Subtítulo',
    htmlFor: 'submitSubtitle',
    LabelDataTestid: 'subtitle-input-label',
    id: 'submitSubtitle',
    type: 'text',
    imputDataTestid: 'subtitle-input',
    name: 'subtitle',
  },
  image: {
    labelName: 'Imagem',
    htmlFor: 'submitImg',
    LabelDataTestid: 'image-input-label',
    id: 'submitImg',
    type: 'text',
    imputDataTestid: 'image-input',
    name: 'imagePath',
  },
  sinopse: {
    labelName: 'Sinopse',
    htmlFor: 'submiTextarea',
    LabelDataTestid: 'storyline-input-label',
    id: 'submiTextarea',
    type: 'textarea',
    imputDataTestid: 'storyline-input',
    name: 'storyline',
  },
  rating: {
    labelName: 'Avaliação',
    htmlFor: 'submitRating',
    LabelDataTestid: 'rating-input-label',
    id: 'submitRating',
    type: 'number',
    imputDataTestid: 'rating-input',
    name: 'rating',
  },
};

class AddMovie extends Component {
  constructor(props) {
    super(props);
    this.handle = this.handle.bind(this);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  handleOnClick = () => {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    const { onClick } = this.props;
    const movie = { title, subtitle, imagePath, storyline, rating, genre };
    onClick(movie);
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  // A função handleChange foi extraida do matarial de estudo da Trybe
  handle({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    // const { onClick } = this.props;
    return (
      <form data-testid="add-movie-form">
        <AddLabel element={ info.title } value={ title } callback={ this.handle } />
        <AddLabel element={ info.subtitle } value={ subtitle } callback={ this.handle } />
        <AddLabel element={ info.image } value={ imagePath } callback={ this.handle } />
        <AddLabel element={ info.sinopse } value={ storyline } callback={ this.handle } />
        <AddLabel element={ info.rating } value={ rating } callback={ this.handle } />
        <label htmlFor="genre" data-testid="genre-input-label">
          Gênero
          <select
            id="genre"
            type="selected"
            data-testid="genre-input"
            name="genre"
            value={ genre }
            onChange={ this.handle }
          >
            <option value="action" data-testid="genre-option">Ação</option>
            <option value="comedy" data-testid="genre-option">Comédia</option>
            <option value="thriller" data-testid="genre-option">Suspense</option>
          </select>
        </label>
        <button
          type="button"
          data-testid="send-button"
          onClick={ this.handleOnClick }
        >
          Adicionar filme
        </button>
      </form>
    );
  }
}

AddMovie.defaultProps = {
  onClick: () => {},
};

AddMovie.propTypes = {
  onClick: PropTypes.func,
};

export default AddMovie;

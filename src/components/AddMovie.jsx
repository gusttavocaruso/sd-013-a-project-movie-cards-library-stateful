import React, { Component } from 'react';
import AddLabel from './AddLabel';
// import PropTypes from 'prop-types';

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
};

class AddMovie extends Component {
  constructor(props) {
    super(props);
    this.handle = this.handle.bind(this);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      // storyline: '',
      // rating: 0,
      // genre: 'action',
    };
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
    const { title, subtitle, imagePath } = this.state;
    return (
      <form data-testid="add-movie-form">
        <AddLabel element={ info.title } value={ title } callback={ this.handle } />
        <AddLabel element={ info.subtitle } value={ subtitle } callback={ this.handle } />
        <AddLabel element={ info.image } value={ imagePath } callback={ this.handle } />
      </form>
    );
  }
}

// AddMovie.defaultProps = {
//   onClick: () => {},
// };

// AddMovie.propTypes = {
//   onClick: PropTypes.func,
// };

export default AddMovie;

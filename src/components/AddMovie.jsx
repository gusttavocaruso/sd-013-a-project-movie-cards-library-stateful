// implement AddMovie component here
import React from 'react';

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
  }

  // Inspirada na sintaxe do componente MovieForm do projeto Movie Card Library CRUD
  updateState(field, newValue) {
    this.setState({ [field]: newValue });
  }

  renderTextInput() {
    const { title } = this.state;

    return (
      <label htmlFor="title-input" data-testid="title-input-label">
        Título:
        <input
          type="text"
          name="title-input"
          id="title-input"
          value={ title }
          onChange={ (event) => this.updateState('title', event.target.value) }
          data-testid="title-input"
        />
      </label>
    );
  }

  renderSubtitleInput() {
    const { subtitle } = this.state;

    return(
      <label htmlFor="" data-testid="subtitle-input-label">
        Subtítulo:
        <input type="text" name="" id="" />
      </label>
    );
  };

  render() {
    return (
      <form data-testid="add-movie-form">
        {this.renderTextInput()}
      </form>
    );
  }
}

export default AddMovie;

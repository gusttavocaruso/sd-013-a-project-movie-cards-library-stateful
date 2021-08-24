import React from 'react';

const INITIAL_STATE = {
  subtitle: '',
  title: '',
  imagePath: '',
  storyline: '',
  rating: 0,
  genre: 'action',
};

class AddMovie extends React.Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  // Inspirada na sintaxe do componente MovieForm do projeto Movie Card Library CRUD
  updateState(field, newValue) {
    this.setState({ [field]: newValue });
  }

  render() {
    const { onClick } = this.props;
    const { title } = this.state;

    return (
      <form data-testid="add-movie-form">
        {/* Req. 8 */}
        <label
          htmlFor="title-input"
          data-testid="title-input-label"
        >
          Título:
          <input
            type="text"
            name="title"
            id="title-input"
            placeholder="Insira o título do filme"
            value={ title }
            onChange={ (event) => this.updateState('title', event.target.value) }
            data-testid="title-input"
          />
        </label>

      </form>
    );
  }
}

export default AddMovie;

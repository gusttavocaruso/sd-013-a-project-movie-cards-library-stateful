import React from 'react';

class AddMovie extends React.Component {
  constructor() {
    super();

    this.state = ({
      subtitle: '',
      title: '',
      // imagePath: '',
      // storyline: '',
      // rating: 0,
      // genre: 'action',
    });
  }

  render() {
    const { title, subtitle } = this.state;

    const changeTitle = ({ target }) => {
      // console.log(target)
      const { name } = target;
      const value = target.type === 'checkbox' ? target.checked : target.value;
      this.setState({
        [name]: value,
      });
    };

    return (
      <form data-testid="add-movie-form">
        <label data-testid="title-input-label" htmlFor="input-label">
          Título
          <input
            id="input-label"
            type="text"
            name="title"
            value={ title }
            data-testid="title-input"
            onChange={ changeTitle }
          />
        </label>
        <label data-testid="subtitle-input-label" htmlFor="subtitle-input">
          Subtítulo
          <input
            id="subtitle-input"
            type="text"
            name="subtitle"
            value={ subtitle }
            data-testid="subtitle-input"
            onChange={ changeTitle }
          />
        </label>
      </form>
    );
  }
}

export default AddMovie;

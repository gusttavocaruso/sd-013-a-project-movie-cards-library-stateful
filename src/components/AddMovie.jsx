import React from 'react';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
    };
  }

  render() {
    const { title } = this.state;
    return (
      <div>
        <form data-testid="add-movie-form" />
        <label data-testid="title-input-label" htmlFor="titulo">
          Título
          <input
            id="titulo"
            type="text"
            data-testid="title-input"
            value={ title.value }
            onChange={ title }
          />
        </label>
      </div>
    );
  }
}

export default AddMovie;

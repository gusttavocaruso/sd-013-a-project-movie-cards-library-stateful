import React from 'react';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
    };
    // this.handleChange = this.handleChange.bind(this);
  }

  render() {
    const { title } = this.state;
    return (
      <div>
        <form data-testid="add-movie-form" />
        <label data-testid="title-input-label" htmlFor="titulo">
          Titulo
          <input
            id="titulo"
            type="text"
            value={ title.value }
            data-testid="title-input"
            onChange={ title }
          />
        </label>
      </div>
    );
  }
}

export default AddMovie;

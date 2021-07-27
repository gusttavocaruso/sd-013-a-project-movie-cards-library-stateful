import React, { Component } from 'react';

export default class AddMovie extends Component {
  constructor() {
    super();

    this.inputMovie = this.inputMovie.bind(this);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  inputMovie({ target }) {
    const { name, value } = target;


    this.setState = ({
      [name]: value,
    });
  }

  render() {
    return (
      <div>
        <form data-testid="add-movie-form">
          <label htmlFor="inputTitle" data-testid="title-input-label">
            {' '}
            Título
            <input
              id="inputTitle"
              type="text"
              name="title"
              // value={ this.state.title }
              onChange={ this.inputMovie }
              data-testid="title-input"
            />
          </label>
          <label htmlFor="inputSubTitle" 
          data-testid="subtitle-input-label">Subtítulo
          <input
          id='inputSubTitle'
          name='subtitle'
          data-testid="subtitle-input"
        //   value={ this. state.subtitle }
          onChange={ this.inputMovie } />          
          </label>
           <label htmlFor="inputImage"
            data-testid="image-input-label">Imagem
            <input 
            id="inputImage"
            name="imagePath"
            // value={ this. state.imagePath }
            data-testid="image-input"
            onChange={ this.inputMovie }
            />
           </label>
        </form>
      </div>
    );
  }
}

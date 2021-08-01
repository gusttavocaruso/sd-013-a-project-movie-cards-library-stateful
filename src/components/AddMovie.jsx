import React from 'react';
import PropTypes from 'prop-types';

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
  
  handleClick = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }
  
  render(){
  //  const { onClick } = this.props;

    const { subtitle, title, imagePath,
      storyline, rating, genre } = this.state

    return (
      <section>
        <form data-testid="add-movie-form">
          <label data-testid="title-input-label"
            htmlFor="input_title">
            Título
            <input
              data-testid="title-input"
              type="text"
              value={ title }
              name="title"
              onChange={ this.handleClick }
              id="input_title"
            />
          </label>
          <label data-testid="subtitle-input-label"
            htmlFor="input_subTitle">
            Subtítulo
            <input
              data-testid="subtitle-input"
              type="text"
              value={ subtitle } 
              name="subtitle"
              onChange={ this.handleClick }
              id="input_subTitle"
            />
          </label>
          <label data-testid="image-input-label"
            htmlFor="input_image"
          >
            Imagem
            <input
              data-testid="image-input"
              type="text"
              value={ imagePath }
              name="imagePath"
              onChange={ this.handleClick }
              id="input_image"
            />
          </label>
          <label data-testid="storyline-input-label"
            htmlFor="story_line_id_input">
            Sinopse
            <textarea
              data-testid="storyline-input"
              name="write"
              id="story_line_id_input"
              cols="30"
              rows="10"
              value={ storyline }
              name="storyline"
              onChange={ this.handleClick }
            />
          </label>
          <label data-testid="rating-input-label"
            htmlFor="input_assessment"
          >
            Avaliação
            <input
              data-testid="rating-input"
              type="number"
              value="this.state.rating"
              onChange={ this.handleClick }
              name={ rating }
              id="assessment"
            />
          </label>
          <label data-testid="genre-input-label"
            htmlFor="input_genre"
          >
            Gênero
            <select
              data-testid="genre-input"
              value="this.state.genre"
              onChange={ this.handleClick } 
              id="input_genre"
              name={ genre }
            >
              <option data-testid="genre-option"
                value="action" checked>
                Ação
              </option>
              <option data-testid="genre-option"
                value="comedy">
                Comédia
              </option>
              <option data-testid="genre-option"
                value="thriller">
                Suspense
              </option>
            </select>
          </label>
          {/* <button data-testid="send-button"
           type="submit" 
           onClick={ this.handleClick }>
            Adicionar filme
          </button> */}
        </form>
      </section>
    );
  }
}

AddMovie.prototypes = {
  // onClick: Prototypes.boolean,
  subtitle: PropTypes.string,
  title: PropTypes.string,
  imagePath: PropTypes.string,
  storyline: PropTypes.string,
  rating: PropTypes.number,
  genre: PropTypes.string,
};

export default AddMovie;

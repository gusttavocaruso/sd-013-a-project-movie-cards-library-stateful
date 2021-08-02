// implement AddMovie component here
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
    }; // Requisito 6

    this.handleChange = this.handleChange.bind(this);
    }

    handleChange( { target } ) {
    const { name, value } = target;

        this.setState({
            [name]: value,
        });
    }    

  render() {
    const { onClick } = this.props;
    const { title, subtitle, imagePath, storyline } = this.state;

    return (
        <form data-testid="add-movie-form" action=""> 

            // Requisito 8
            <label data-testid="title-input-label" htmlFor="title-input"> Título
            <input data-testid="title-input" name="title" type="text" value={ title } id="title-input" onChange={ this.handleChange } />
            </label>

            // Requisito 9
            <label data-testid="subtitle-input-label" htmlFor="subtitle-input"> Subtítulo
                <input data-testid="subtitle-input" name="subtitle" type="text" value={ subtitle } onChange={ this.handleChange } />
            </label>

            // Requisito 10
            <label data-testid="image-input-label" htmlFor="image-input"> Imagem
                <input data-testid="image-input" name="imagePath" type="text" value={ imagePath } id="image-input" onChange={ this.handleChange } />
            </label>

            // Requisito 11
            <label data-testid="storyline-input-label" htmlFor="storyline-input"> Sinopse
                <textarea data-testid="storyline-input" name="storyline" value={ storyline } id="storyline-input" onChange={ this.handleChange } cols="30" rows="10"></textarea>
            </label>
        </form>
    );
  }
}

AddMovie.PropTypes = {
  onClick: PropTypes.func,
};

export default AddMovie; 
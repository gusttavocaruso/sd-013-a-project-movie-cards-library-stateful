import React from "react";
import Form from "./Form";

class AddMovie extends React.Component {
  constructor() {
    super();
    this.state = {
      subtitle: "",
      title: "",
      imagePath: "",
      storyline: "",
      rating: 0,
      genre: "action",
      handleChange: ({ target }) => {
        const { name, value } = target;
        this.setState({
          [name]: value,
        });
      },
      handleSubmit: (event) => {
        console.log("clicou");
        event.preventDefault();
      },
    };
  }

  render() {
    const {
      subtitle,
      title,
      imagePath,
      storyline,
      rating,
      genre,
      handleChange,
      handleSubmit,
    } = this.state;
    return (
      <form data-testid="add-movie-form">
        <label htmlFor="title-input" data-testid="title-input-label">
          Título
          <input
            name="title"
            value={ title }
            data-testid="title-input"
            onChange={handleChange}
          />
        </label>
        <label htmlFor="subtitle-input" data-testid="subtitle-input-label">
          Subtítulo
          <input
            name="subtitle"
            type="text"
            value={ subtitle }
            data-testid="subtitle-input"
            onChange={handleChange}
          />
        </label>
        <label htmlFor="image-input" data-testid="image-input-label">
          Imagem
          <input
            name="imagePath"
            type="text"
            value={ imagePath }
            data-testid="image-input"
            onChange={handleChange}
          />
        </label>
        <Form 
          storyline={ storyline }
          rating={ rating }
          genre={ genre }
          handleChange={ handleChange }
          handleSubmit={ handleSubmit }
        />
      </form>
    );
  }
}

export default AddMovie;

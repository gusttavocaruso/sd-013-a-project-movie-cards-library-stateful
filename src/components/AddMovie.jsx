import React from "react";

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
    };
  }
  changeHandler = (e) => {
    let { value, name } = e.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { onClick } = this.props;
    return (
      <form data-testid="add-movie-form">
        <label htmlFor="title" data-testid="title-input-label">
          Título
          <input
            id="title"
            type="text"
            name="title"
            value={this.state.title}
            data-testid="title-input"
            onChange={this.changeHandler}
          />
        </label>
        <label htmlFor="subtitle" data-testid="subtitle-input-label">
          Subtítulo
          <input
            id="subtitle"
            type="text"
            name="subtitle"
            value={this.state.subtitle}
            data-testid="subtitle-input"
            onChange={this.changeHandler}
          />
        </label>
        <label htmlFor="image" data-testid="image-input-label">
          Imagem
          <input
            id="image"
            type="text"
            name="image"
            value={this.state.image}
            data-testid="image-input"
            onChange={this.changeHandler}
          />
        </label>
        Sinopse
        <label data-testid="storyline-input-label">
          <textarea
            value={this.state.storyline}
            onChange={this.changeHandler}
            data-testid="storyline-input"
          />
        </label>
        <label htmlFor="rating" data-testid="rating-input-label">
          Avaliação
          <input
            id="rating"
            type="number"
            name="rating"
            value={this.state.rating}
            data-testid="image-input"
            onChange={this.changeHandler}
          />
        </label>
        <label data-testid="select-input-label">
          Filtrar por gênero
          <select
            data-testid="select-input"
            value={this.state.genre}
            onChange={this.changeHandler}
          >
            <option data-testid="select-option" value="">
              Todos
            </option>
            <option data-testid="select-option" value="action">
              Ação
            </option>
            <option data-testid="select-option" value="comedy">
              Comédia
            </option>
            <option data-testid="select-option" value="thriller">
              Suspense
            </option>
          </select>
        </label>
      </form>
    );
  }
}

export default AddMovie;

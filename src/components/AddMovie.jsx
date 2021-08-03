import React from 'react';

class AddMovie extends React.Component {
    constructor() {
        super();
        this.state = {
            subtitle: '',
            title: '',
            imagePath: '',
            storyline: '',
            rating: 0,
            genre: 'action',
            handleChange: ({ target}) => {
                const { name, value } = target;
                this.setState({
                    [name]: value,
                })
            },
            handleSubmit: (event) => {
                console.log('clicou');
                event.preventDefault();
            }
        };
    }
    
    render() {
        const { subtitle, title, imagePath, storyline, rating, genre, handleChange, handleSubmit } = this.state; 
        return (
            <form data-testid="add-movie-form">
                <label htmlFor="title-input" data-testid="title-input-label" >
                    Título
                <input name="title" value={ title } data-testid="title-input" onChange={  handleChange } />
                </label>
                <label htmlFor="subtitle-input" data-testid="subtitle-input-label">
                    Subtítulo
                    <input name="subtitle" type="text" value={ subtitle } data-testid="subtitle-input" onChange={ handleChange } />
                </label>
                <label htmlFor="image-input" data-testid="image-input-label">
                    Imagem
                    <input name="imagePath" type="text" value={ imagePath } data-testid="image-input" onChange={ handleChange } />
                </label>
                <label htmlFor="storyline-input" data-testid="storyline-input-label">
                    <textarea name="storyline" data-testid="storyline-input" onChange={ handleChange } >{ storyline }</textarea>
                </label>
                <label htmlFor="rating-input" data-testid="rating-input-label">
                    Sinopse
                    <input name="rating" type="number" value={ rating } data-testid="rating-input" onChange={ handleChange } />
                </label>
                <label htmlFor="select-input" data-testid="genre-input-label">
                    Gênero
                    <select value={ genre } data-testid="genre-input" onChange={ handleChange }>
                        <option value="action" data-testid="genre-option">Ação</option>
                        <option value="comedy" data-testid="genre-option">Comédia</option>
                        <option value="thriller" data-testid="genre-option">Suspense</option>
                    </select>
                </label>
                <button type="submit" data-testid="send-button" onClick={ handleSubmit }>Adicionar filme</button>
            </form>
        );
    }
}

export default AddMovie;
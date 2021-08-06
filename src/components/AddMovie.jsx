
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

		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
		this.setState({
			[event.target.name]: event.target.value,
		});
		
	}

	render() {
		const { onClick } = this.props;
		const {title, subtitle, imagePath} = this.state;
		return (
			<form data-testid="add-movie-form">
				<label htmlFor="title" data-testid="title-input-label">
					Titulo
					<input 
					id="title" 
					value={title} 
					name = "title"
					data-testid="title-input"
					onChange={this.handleChange}>
					</input>
				</label>
				<label htmlFor="subtitle" data-testid="subtitle-input-label">
				Subtítulo
				<input 
				value={subtitle} 
				data-testid="subtitle-input" 
				name="subtitle"
				id="subtitle" 
				onChange={this.handleChange}>
				</input>
				</label>
				<label htmlFor="image" data-testid="image-input-label">
					Imagem
					<input 
					value={imagePath}
					name="image"
					id="image" 
					data-testid="image-input" onChange={this.handleChange}></input>
				</label>
			</form>
		)
	}
}

export default AddMovie;
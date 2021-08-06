
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
			title: event.target.value,
		});
		
	}

	render() {
		const { onClick } = this.props;
		const {title} = this.state;
		return (
			<form data-testid="add-movie-form">
				<label htmlFor="inputTitle" data-testid="title-input-label">
					Titulo
					<input 
					id="inputTitle" 
					value={title} 
					data-testid="title-input"
					onChange={this.handleChange}>
					</input>
				</label>
			</form>
		)
	}
}

export default AddMovie;
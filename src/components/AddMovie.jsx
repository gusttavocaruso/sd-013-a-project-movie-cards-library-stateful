import React from 'react';
import PropTypes from 'prop-types';
import RenderGenre from './RenderGenre';
import RenderImg from './RenderImg';
import RenderRating from './RenderRating';
import RenderStoryline from './RenderStoryline';
import RenderSubtitle from './RenderSubtitle';
import RenderTitle from './RenderTitle';

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
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    const { onClick } = this.props;
    return (
      <section>
        <form data-testid="add-movie-form">
          <RenderTitle value={ title } onChange={ this.handleChange } />
          <RenderSubtitle value={ subtitle } onChange={ this.handleChange } />
          <RenderImg value={ imagePath } onChange={ this.handleChange } />
          <RenderStoryline value={ storyline } onChange={ this.handleChange } />
          <RenderRating value={ rating } onChange={ this.handleChange } />
          <RenderGenre value={ genre } onChange={ this.handleChange } />
          <button
            data-testid="send-button"
            type="button"
            onClick={ (e) => {
              e.preventDefault();
              this.setState({
                subtitle: '',
                title: '',
                imagePath: '',
                storyline: '',
                rating: 0,
                genre: 'action',
              });
              onClick(this.state);
            } }
          >
            Adicionar filme
          </button>
        </form>
      </section>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;

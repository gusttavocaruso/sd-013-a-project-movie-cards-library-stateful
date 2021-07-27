/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/mouse-events-have-key-events */
// implement MovieCard component here
import React from 'react';

import PropTypes from 'prop-types';

import '../MovieCard.css';

import Rating from './Rating';

class MovieCard extends React.Component {
  constructor(props) {
    super(props);

    this.handleHover = this.handleHover.bind(this);
    this.handleLeave = this.handleLeave.bind(this);

    const { movie } = this.props;
    this.state = {
      display: movie.imagePath,
    };
  }

  handleHover() {
    const { movie } = this.props;
    this.setState({
      display: movie.preview,
    });
  }

  handleLeave() {
    const { movie } = this.props;
    this.setState({
      display: movie.imagePath,
    });
  }

  render() {
    const { movie } = this.props;
    const { display } = this.state;
    return (
      <div className="movie-card-container">
        <img
          className="movie-image"
          src={ display }
          alt={ movie.title }
          onMouseOver={ this.handleHover }
          onMouseLeave={ this.handleLeave }
        />
        <hr className="h-rule" />
        <div className="movie-info">
          <span>
            <h4>{ movie.title }</h4>
          </span>
          <span className="subtitle">
            <h5>
              { movie.subtitle }
            </h5>
          </span>
          <span>
            <p>
              { movie.storyline }
            </p>
          </span>
          <Rating rating={ movie.rating } />
        </div>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.number,
    imagePath: PropTypes.string,
    preview: PropTypes.string,
  }).isRequired,
};

export default MovieCard;

import React from 'react';
import PropTypes from 'prop-types';

class Text extends React.Component {
  constructor() {
    super();
    this.xablau = this.xablau.bind(this);
  }

  xablau(event) {
    const { newMovie } = this.props;
    newMovie(event); // newMovie é uma função criada em AddMovie
  }

  render() {
    const { title, subtitle, storyline } = this.props;

    return (
      <div>
        <label htmlFor="title" data-testid="title-input-label">
          Título
          <input
            type="text"
            name="title"
            data-testid="title-input"
            onChange={ this.xablau }
            value={ title }
          />
        </label>
        <label htmlFor="subtitle" data-testid="subtitle-input-label">
          Subtítulo
          <input
            type="text"
            name="subtitle"
            onChange={ this.xablau }
            value={ subtitle }
            data-testid="subtitle-input"
          />
        </label>
        <label htmlFor="storyline" data-testid="storyline-input-label">
          Sinopse
          <textarea
            name="storyline"
            value={ storyline }
            onChange={ this.xablau }
            data-testid="storyline-input"
          />
        </label>
      </div>
    );
  }
}
Text.propTypes = {
  newMovie: PropTypes.func,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  storyline: PropTypes.string,
};
Text.defaultProps = {
  newMovie: PropTypes.func,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  storyline: PropTypes.string,
};
export default Text;

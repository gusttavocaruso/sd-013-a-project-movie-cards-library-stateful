import React from 'react';
import PropTypes from 'prop-types';

class TextAreaAddMovie extends React.Component {
  render() {
    const { storyline, onTextAreaChange } = this.props;
    return (
      <section>
        <label htmlFor="text-area-add-movie" data-testid="storyline-input-label">
          Sinopse
          <textarea
            id="text-area-add-movie"
            name="storyline"
            value={ storyline }
            data-testid="storyline-input"
            onChange={ onTextAreaChange }
            placeholder="Digite uma pequena Sinopse"
          />
        </label>
      </section>
    );
  }
}

TextAreaAddMovie.propTypes = {
  storyline: PropTypes.string.isRequired,
  onTextAreaChange: PropTypes.func.isRequired,
};

export default TextAreaAddMovie;

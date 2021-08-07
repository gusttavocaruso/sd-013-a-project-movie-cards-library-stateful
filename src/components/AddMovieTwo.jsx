import React from 'react';
import PropTypes from 'prop-types';
import InputComponent from './Inputs';
import SelectComponent from './Select';
import addMovieSelectOptions from './addMovieOptionsSelect';

class AddMovieTwo extends React.Component {
  render() {
    const { handleChange, state } = this.props;
    const { storyline, rating, genre } = state;

    return (
      <div>
        <InputComponent
          label="Sinopse"
          stateName="storyline"
          inputType="text"
          identifier="storyline-input"
          onChangeInput={ handleChange }
          inputValue={ storyline }
        />
        <InputComponent
          label="Avaliação"
          stateName="rating"
          inputType="number"
          identifier="rating-input"
          onChangeInput={ handleChange }
          inputValue={ rating }
        />
        <SelectComponent
          label="Gênero"
          identifier="genre"
          getValue={ genre }
          onChangeComponent={ handleChange }
          options={ addMovieSelectOptions }
          name="genre"
        />
      </div>
    );
  }
}

AddMovieTwo.propTypes = {
  state: PropTypes.shape({
    storyline: PropTypes.string.isRequired,
    rating: PropTypes.node.isRequired,
    genre: PropTypes.string.isRequired,
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default AddMovieTwo;

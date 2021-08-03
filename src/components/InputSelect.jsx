import React from 'react';

class InputSelect extends React.Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <label htmlFor="select-add-movie" data-testid="genre-input-label">
        Gênero
        <select
          name="genre"
          id="select-add-movie"
          data-testid="genre-input"
          value={ value }
          onChange={ handleChange }
        >
          <option data-testid="genre-option" value="action"> Ação </option>
          <option data-testid="genre-option" value="comedy"> Comédia </option>
          <option data-testid="genre-option" value="thriller"> Suspense </option>
        </select>
      </label>
    );
  }
}

export default InputSelect;

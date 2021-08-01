import React from 'react';

class Select extends React.Component {
  render() {
    const { onSelectedGenreChange } = this.props;
    const { selectedGenre } = this.props;

    return (
      <label data-testid="select-input-label" htmlFor="selectArea">
        Filtrar por gênero
        <select
          id="selectArea"
          value={ selectedGenre }
          onChange={ onSelectedGenreChange }
          data-testid="select-input"
        >
          <option value="" data-testid="select-option">Todos</option>
          <option value="action" data-testid="select-option">Ação</option>
          <option value="comedy" data-testid="select-option">Comédia</option>
          <option value="thriller" data-testid="select-option">Suspense</option>
        </select>
      </label>
    );
  }
}

Select.propTypes = {
  selectedGenre: PropTypes.string.isRequired,
  onSelectedGenreChange: PropTypes.func.isRequired,
};

export default Select;

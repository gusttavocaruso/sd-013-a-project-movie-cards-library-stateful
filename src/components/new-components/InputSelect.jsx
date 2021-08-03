import React from 'react';
import PropTypes from 'prop-types';

class InputSelect extends React.Component {
  render() {
    const { selectedGenreKey, onSelectedGenreChangeKey } = this.props;

    return (
      <label data-testid="select-input-label" htmlFor="input-select">
        Filtrar por gênero
        <select
          id="input-select"
          value={ selectedGenreKey }
          onChange={ onSelectedGenreChangeKey }
          data-testid="select-input"
        >
          <option value="" data-testid="select-option">
            Todos
          </option>
          <option value="action" data-testid="select-option">
            Ação
          </option>
          <option value="comedy" data-testid="select-option">
            Comédia
          </option>
          <option value="thriller" data-testid="select-option">
            Suspense
          </option>

        </select>
      </label>
    );
  }
}

InputSelect.propTypes = {
  selectedGenreKey: PropTypes.string,
  onSelectedGenreChangeKey: PropTypes.func,
};

InputSelect.defaultProps = {
  selectedGenreKey: '',
  onSelectedGenreChangeKey: PropTypes.func,
};

export default InputSelect;

import React from 'react';
import PropTypes from 'prop-types';

class Select extends React.Component {
  render() {
    const { selectedGenreKey, onSelectedGenreChangeKey } = this.props;

    return (
      <label data-testid="select-input-label" htmlFor="input-text-select">
        Filtrar por gênero
        <select
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

Select.propTypes = {
  selectedGenreKey: PropTypes.string,
  onSelectedGenreChangeKey: PropTypes.func,
};

Select.defaultProps = {
  selectedGenreKey: '',
  onSelectedGenreChangeKey: PropTypes.func,
};

export default Select;

import React from 'react';
import PropTypes from 'prop-types';

class FormsSelectInput extends React.Component {
  render() {
    const { id, value, onChange } = this.props;
    return (
      <label htmlFor="genre" data-testid={ `${id}-input-label` }>
        Gênero
        <select
          id="genre"
          data-testid={ `${id}-input` }
          value={ value }
          onChange={ onChange }
        >
          <option value="action" data-testid="genre-option">Ação</option>
          <option value="comedy" data-testid="genre-option">Comédia</option>
          <option value="thriller" data-testid="genre-option">Suspense</option>
        </select>
      </label>
    );
  }
}

FormsSelectInput.propTypes = {
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default FormsSelectInput;

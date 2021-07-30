import React from 'react';
import PropTypes from 'prop-types';

class Select extends React.Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <label htmlFor="Select" data-testid="genre-input-label">
        Gênero
        <select
          name="genre"
          id="Select"
          value={ value }
          data-testid="genre-input"
          onChange={ handleChange }
        >
          <option value="action" data-testid="genre-option">Ação</option>
          <option value="comedy" data-testid="genre-option">Comédia</option>
          <option value="thriller" data-testid="genre-option">Suspense</option>
        </select>
      </label>
    );
  }
}

Select.propTypes = {
  value: PropTypes.string,
  handleChange: PropTypes.func,
};
Select.defaultProps = {
  value: '',
  handleChange: 'function',
};

export default Select;

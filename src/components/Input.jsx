import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.Component {
  render() {
    const { item, change } = this.props;

    if (item.id !== 'storyline' && item.id !== 'genre') {
      return (
        <label htmlFor={ item.id } data-testid={ `${item.id}-input-label` }>
          {item.label}
          <input
            type={ item.id === 'rating' ? 'number' : 'text' }
            name={ item.id === 'image' ? item.name : item.id }
            value={ item.value }
            onChange={ change }
            data-testid={ `${item.id}-input` }
            style={ { width: '100%' } }
          />
        </label>);
    }

    if (item.id === 'storyline') {
      return (
        <label htmlFor={ item.id } data-testid={ `${item.id}-input-label` }>
          {item.label}
          <textarea
            name={ item.id }
            id={ item.id }
            data-testid={ `${item.id}-input` }
            style={ { width: '100%' } }
          />
        </label>);
    }

    if (item.id === 'genre') {
      return (
        <label htmlFor={ item.id } data-testid={ `${item.id}-input-label` }>
          {item.label}
          <select
            name={ item.id }
            data-testid={ `${item.id}-input` }
            onClick={ change }
            style={ { width: '100%' } }
          >
            <option value="action" data-testid="genre-option">Ação</option>
            <option value="comedy" data-testid="genre-option">Comédia</option>
            <option value="thriller" data-testid="genre-option">Suspense</option>
          </select>
        </label>);
    }
  }
}

Input.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string,
    label: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool]),
  }).isRequired,
  change: PropTypes.func.isRequired,
};

export default Input;

import React from 'react';
import PropTypes from 'prop-types';

export default class InputGeneric extends React.Component {
  render() {
    const { descicao, title, onChange, datatestid, type } = this.props;
    return (
      <label htmlFor="#" data-testid={ datatestid[0] }>
        {descicao}
        <input
          type={ type }
          value={ title }
          onChange={ onChange }
          data-testid={ datatestid[1] }
        />
      </label>
    );
  }
}

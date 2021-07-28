import React from 'react';
import PropTypes from 'prop-types';

export default class InputGeneric extends React.Component {
  render() {
    const { namedescicao, title, onChange, datatestid } = this.props;
    return (
      <label htmlFor="#" data-testid={ datatestid[0] }>
        {namedescicao}
        <input
          type="text"
          value={ title }
          onChange={ onChange }
          data-testid={ datatestid[1] }
        />
      </label>
    );
  }
}

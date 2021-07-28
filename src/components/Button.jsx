import React from 'react';
import PropTypes from 'prop-types';

export default class Button extends React.Component {
  render() {
    const { datatestid, onClick, descricao } = this.props;
    return (
      <button type="button" data-testid={ datatestid } onClick={ onClick }>
        {descricao}
      </button>
    );
  }
}

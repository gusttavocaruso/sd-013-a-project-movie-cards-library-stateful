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

Button.propTypes = {
  datatestid: PropTypes.string,
  onClick: PropTypes.func,
  descricao: PropTypes.string,
};

Button.defaultProps = {
  datatestid: '',
  onClick: '',
  descricao: '',
};

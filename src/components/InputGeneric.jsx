import React from 'react';
import PropTypes from 'prop-types';

export default class InputGeneric extends React.Component {
  render() {
    const { descicao, title, onChange, datatestid, type = 'text' } = this.props;
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

InputGeneric.propTypes = {
  datatestid: PropTypes.arrayOf(PropTypes.string),
  onChange: PropTypes.func,
  descicao: PropTypes.string,
  title: PropTypes.string,
  type: PropTypes.string,
};

InputGeneric.defaultProps = {
  datatestid: [],
  onChange: '',
  descicao: '',
  title: '',
  type: '',
};

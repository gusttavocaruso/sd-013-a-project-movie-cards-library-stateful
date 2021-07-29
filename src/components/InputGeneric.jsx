import React from 'react';
import PropTypes from 'prop-types';

export default class InputGeneric extends React.Component {
  render() {
    const { descicao, title, onChange, type, name } = this.props;
    let datatestid = [];

    if (name === 'imagePath') {
      datatestid = ['image-input-label', 'image-input'];
    } else {
      datatestid = [`${name}-input-label`, `${name}-input`];
    }

    return (
      <label htmlFor="#" data-testid={ datatestid[0] }>
        {descicao}
        <input
          type={ type }
          value={ title }
          name={ name }
          onChange={ onChange }
          data-testid={ datatestid[1] }
        />
      </label>
    );
  }
}

InputGeneric.propTypes = {
  onChange: PropTypes.func,
  descicao: PropTypes.string,
  title: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
};

InputGeneric.defaultProps = {
  onChange: '',
  descicao: '',
  title: '',
  type: '',
  name: '',
};

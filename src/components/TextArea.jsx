import React from 'react';
import PropTypes from 'prop-types';

export default class TextArea extends React.Component {
  render() {
    const { descicao, title, onChange, datatestid, name } = this.props;
    return (
      <label htmlFor="#" data-testid={ datatestid[0] }>
        {descicao}
        <input
          value={ title }
          name={ name }
          onChange={ onChange }
          data-testid={ datatestid[1] }
        />
      </label>
    );
  }
}

TextArea.propTypes = {
  datatestid: PropTypes.arrayOf(PropTypes.string),
  onChange: PropTypes.func,
  descicao: PropTypes.string,
  title: PropTypes.string,
  name: PropTypes.string,
};

TextArea.defaultProps = {
  datatestid: [],
  onChange: '',
  descicao: '',
  title: '',
  name: '',
};

import React from 'react';
import PropTypes from 'prop-types';

export default class TextArea extends React.Component {
  render() {
    const { descicao, title, onChange, datatestid } = this.props;
    return (
      <label htmlFor="#" data-testid={ datatestid[0] }>
        {descicao}
        <input
          value={ title }
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
};

TextArea.defaultProps = {
  datatestid: [],
  onChange: '',
  descicao: '',
  title: '',
};

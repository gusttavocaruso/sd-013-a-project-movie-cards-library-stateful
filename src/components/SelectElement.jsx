import React from 'react';
import PropTypes from 'prop-types';

export default class SelectElement extends React.Component {
  render() {
    const { descicao, onChange, datatestid } = this.props;
    return (
      <label htmlFor="#" data-testid={ datatestid[0] }>
        {descicao}
        <select data-testid={ datatestid[1] } id="select-genre" onChange={ onChange }>
          <option data-testid={ datatestid[2] } value="action">Ação</option>
          <option data-testid={ datatestid[2] } value="comedy">Comédia</option>
          <option data-testid={ datatestid[2] } value="thriller">Suspense</option>
        </select>
      </label>
    );
  }
}

SelectElement.propTypes = {
  datatestid: PropTypes.arrayOf(PropTypes.string),
  onChange: PropTypes.func,
  descicao: PropTypes.string,
};

SelectElement.defaultProps = {
  datatestid: [],
  onChange: '',
  descicao: '',
};

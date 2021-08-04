import React from 'react';
// import Proptypes from 'prop-types';

class Inputgene extends React.Component {
  render() {
    const { text, value, name, handleChange, type = 'text' } = this.props;
    return (
      <label
        htmlFor={ name }
        data-testid={ `${(name === 'imagePath') ? 'image' : name}-input-label` }
      >
        <input type={ text } name={ name } onChange={ handleChange } />
      </label>
    );
  }
}

export default Inputgene;

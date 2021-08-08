import React from 'react';
import PropTypes from 'prop-types';
import Input from './Input';

class Storyline extends React.Component {
  render() {
    const { storyline, onChange } = this.props;

    return (
      <Input
        labelText="Sinopse"
        labelDataType="storyline-input-label"
        value={ storyline }
        onChange={ onChange }
        inputDataType="storyline-input"
        htmlFor="storyline"
      />
    );
  }
}

const { string, func } = PropTypes;

Storyline.propTypes = {
  storyline: string,
  onChange: func,
}.isRequired;

export default Storyline;

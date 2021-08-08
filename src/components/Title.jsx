import React from 'react';
import PropTypes from 'prop-types';
import Input from './Input';

class Title extends React.Component {
  render() {
    const { title, onChange } = this.props;

    return (
      <Input
        labelText="Título"
        labelDataType="title-input-label"
        inputDataType="title-input"
        value={ title }
        onChange={ onChange }
        htmlFor="title"
      />
    );
  }
}

const { string, func } = PropTypes;

Title.propTypes = {
  title: string,
  onChange: func,
}.isRequired;

export default Title;

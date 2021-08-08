import React from 'react';
import PropTypes from 'prop-types';
import Input from './Input';

class Subtitle extends React.Component {
  render() {
    const { subtitle, onChange } = this.props;

    return (
      <Input
        labelText="Subtítulo"
        labelDataType="subtitle-input-label"
        value={ subtitle }
        onChange={ onChange }
        htmlFor="subtitle"
        inputDataType="subtitle-input"
      />
    );
  }
}

const { string, func } = PropTypes;

Subtitle.propTypes = {
  subtitle: string,
  onChange: func,
}.isRequired;

export default Subtitle;

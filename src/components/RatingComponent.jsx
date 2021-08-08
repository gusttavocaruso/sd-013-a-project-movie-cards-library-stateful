import React from 'react';
import PropTypes from 'prop-types';
import Input from './Input';

class RatingComponent extends React.Component {
  render() {
    const { rating, onChange } = this.props;

    return (
      <Input
        labelText="Avaliação"
        labelDataType="rating-input-label"
        value={ rating }
        onChange={ onChange }
        min="0"
        max="5"
        step="0.1"
        type="number"
        inputDataType="rating-input"
        htmlFor="rating"
      />
    );
  }
}

const { string, func } = PropTypes;

RatingComponent.propTypes = {
  rating: string,
  onChange: func,
}.isRequired;

export default RatingComponent;

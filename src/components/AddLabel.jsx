import React from 'react';
import PropTypes from 'prop-types';

class AddLabel extends React.Component {
  render() {
    const { element, value, callback } = this.props;
    const {
      htmlFor, LabelDataTestid, id, type, imputDataTestid, name, labelName } = element;

    return (
      <label htmlFor={ htmlFor } data-testid={ LabelDataTestid }>
        { labelName }
        <input
          id={ id }
          type={ type }
          data-testid={ imputDataTestid }
          name={ name }
          value={ value }
          onChange={ callback }
        />
      </label>
    );
  }
}

AddLabel.propTypes = {
  element: PropTypes.shape({
    htmlFor: PropTypes.string,
    LabelDataTestid: PropTypes.string,
    id: PropTypes.string,
    type: PropTypes.string,
    imputDataTestid: PropTypes.string,
    name: PropTypes.string,
    labelName: PropTypes.string,
  }).isRequired,
  value: PropTypes.string.isRequired,
  callback: PropTypes.func.isRequired,
};

export default AddLabel;

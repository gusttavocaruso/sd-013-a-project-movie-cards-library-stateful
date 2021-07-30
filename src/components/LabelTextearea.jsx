import React from 'react';
import PropTypes from 'prop-types';

class LabelTextarea extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label htmlFor="textarea" data-testid="storyline-input-label">
        Sinopse
        <textarea
          data-testid="storyline-input"
          name="textarea"
          value={ value }
          id="textarea"
          onChange={ onChange }
        />
      </label>
    );
  }
}

LabelTextarea.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default LabelTextarea;

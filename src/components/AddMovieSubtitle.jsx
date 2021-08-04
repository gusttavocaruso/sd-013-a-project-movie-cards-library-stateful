import React from 'react';
import PropTypes from 'prop-types';

class AddMovieSubtitle extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label htmlFor="subtitle" data-testid="subtitle-input-label">
        Subtítulo
        <input
          type="text"
          value={ value }
          name="subtitle"
          data-testid="subtitle-input"
          onChange={ onChange }
        />
      </label>
    );
  }
}

AddMovieSubtitle.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default AddMovieSubtitle;

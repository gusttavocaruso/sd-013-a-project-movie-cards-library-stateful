import React from 'react';
import PropTypes from 'prop-types';

class InputLabelText extends React.Component {
  render() {
    const { property } = this.props;
    return (
      <label
        htmlFor={ property[2] }
        data-testid={ `${property[4]}-input-label` }
      >
        { property[3] }
        <select
          name={ property[2] }
          data-testid={ `${property[4]}-input` }
          value={ property[1] }
          onChange={ property[5] }
        >
          <option value="action" data-testid="genre-option">Ação</option>
          <option value="comedy" data-testid="genre-option">Comédia</option>
          <option value="thriller" data-testid="genre-option">Suspense</option>
        </select>
      </label>
    );
  }
}

InputLabelText.propTypes = {
  property: PropTypes.shape([]).isRequired,
};

export default InputLabelText;

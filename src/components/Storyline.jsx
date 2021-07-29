import React from 'react';
import PropTypes from 'prop-types';

class Sinopse extends React.Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     storyline: '',
  //   };
  //   this.handleChange = this.handleChange.bind(this);
  // }

  // handleChange(event) {
  //   this.setState({ storyline: event.target.value });
  // }

  render() {
    const { storyline, handleChange } = this.props;
    return (
      <label data-testid="storyline-input-label" htmlFor="textarea">
        Sinopse
        <textarea
          name="storyline"
          type="text"
          data-testid="storyline-input"
          value={ storyline }
          onChange={ handleChange }
        />
      </label>
    );
  }
}
Sinopse.propTypes = {
  storyline: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Sinopse;

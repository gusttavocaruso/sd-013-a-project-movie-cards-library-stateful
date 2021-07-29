import React from 'react';
import PropTypes from 'prop-types';

class Subtitle extends React.Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     subtitle: '',
  //   };
  //   this.handleChange = this.handleChange.bind(this);
  // }

  // handleChange(event) {
  //   this.setState({ subtitle: event.target.value });
  // }

  render() {
    const { subtitle, handleChange } = this.props;
    return (
      <label data-testid="subtitle-input-label" htmlFor="subtitle">
        Subtítulo
        <input
          name="subtitle"
          type="text"
          data-testid="subtitle-input"
          value={ subtitle }
          onChange={ handleChange }
        />
      </label>
    );
  }
}

Subtitle.propTypes = {
  subtitle: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Subtitle;

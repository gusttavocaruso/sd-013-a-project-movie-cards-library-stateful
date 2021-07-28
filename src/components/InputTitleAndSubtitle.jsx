import React from 'react';
import PropTypes from 'prop-types';

class InputTitleAndSubtitle extends React.Component {
  render() {
    const { title, subtitle, onChangeFunction } = this.props;

    return (
      <span>
        <label data-testid="title-input-label" htmlFor="title-input">
          Título
          <input
            data-testid="title-input"
            name="title"
            type="text"
            value={ title }
            id="title-input"
            onChange={ onChangeFunction }
          />
        </label>
        <label data-testid="subtitle-input-label" htmlFor="subtitle-input">
          Subtítulo
          <input
            data-testid="subtitle-input"
            name="subtitle"
            type="text"
            value={ subtitle }
            id="subtitle-input"
            onChange={ onChangeFunction }
          />
        </label>
      </span>
    );
  }
}

InputTitleAndSubtitle.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  onChangeFunction: PropTypes.func.isRequired,
};

InputTitleAndSubtitle.defaultProps = {
  title: 'Um Maluco no Pedaço',
  subtitle: 'Now this is the story all about how...',
};

export default InputTitleAndSubtitle;

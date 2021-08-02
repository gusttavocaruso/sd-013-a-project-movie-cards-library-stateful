import React from 'react';
import PropTypes from 'prop-types';

class TitleAndSubtitle extends React.Component {
  render() {
    const { onChange, title, subtitle } = this.props;
    return (
      <div>
        <label htmlFor="title" data-testid="title-input-label">
          Título:
          <input
            type="text"
            name="title"
            id="title"
            className="input-box"
            value={ title }
            data-testid="title-input"
            onChange={ onChange }
          />
        </label>
        <label htmlFor="subtitle" data-testid="subtitle-input-label">
          Subtítulo:
          <input
            type="text"
            name="subtitle"
            id="subtitle"
            className="input-box"
            value={ subtitle }
            data-testid="subtitle-input"
            onChange={ onChange }
          />
        </label>
      </div>
    );
  }
}

TitleAndSubtitle.propTypes = {
  onChange: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

export default TitleAndSubtitle;

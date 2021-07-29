import React from 'react';
import PropTypes from 'prop-types';

class ButtonWatch extends React.Component {
  render() {
    const { weblink } = this.props;
    return (
      <a
        href={ weblink }
        className="watch-movie"
        target="_blank"
        rel="noopener noreferrer"
      >
        Assistir
      </a>
    );
  }
}

ButtonWatch.propTypes = {
  weblink: PropTypes.string,
};

ButtonWatch.defaultProps = {
  weblink: 'https://www.stremio.com/',
};

export default ButtonWatch;

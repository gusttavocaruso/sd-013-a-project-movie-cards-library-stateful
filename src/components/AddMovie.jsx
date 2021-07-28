import React from 'react';
// import PropTypes from 'prop-types';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // subtitle: '',
      // title: '',
      // imagePath: '',
      // storyLine: '',
      // rating: 0,
      // genre: 'action',
    };
  }

  render() {
    return (
      <forms data-testid="add-movie-form">
        Add movie here
      </forms>
    );
  }
}

export default AddMovie;

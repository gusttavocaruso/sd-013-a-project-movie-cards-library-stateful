import React from 'react';
import PropTypes from 'prop-types';

export default class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  render() {
    const { onClick } = this.props;
    return (
      <form action="" data-testid="add-movie-form">
        <label htmlFor="#" data-testid="title-input-label">
          Título
          <input type="text" value={ this.title } onChange={ onClick } data-testid="title-input" />
        </label>
      </form>
    );
  }
}

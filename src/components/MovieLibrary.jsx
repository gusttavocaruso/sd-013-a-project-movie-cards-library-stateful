import React from 'react';

class MovieLibrary extends React.Components {
  constructor(props) {
    super(props);
    const { movies } = this.props;

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: 'action',
      movies,
    };
  }

  render() {
    return (
      <div>
        teste
      </div>
    );
  }
}

export default MovieLibrary;

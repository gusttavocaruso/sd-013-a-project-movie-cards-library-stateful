import React from 'react';
// import PropTypes from 'prop-types';
import SearchBar from './SearchBar';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);

    // const { movies } = this.props;

    this.state = {
      searchText: '',
      // bookmarkedOnly: false,
      // selectedGenre: '',
      // movies,
    };
  }

  render() {
    const { searchText } = this.state;

    return (
      <div>
        <SearchBar searchText={ searchText } />
      </div>
    );
  }
}

// MovieLibrary.propTypes = {
//   movies: PropTypes.func,
// };

// MovieLibrary.defaultProps = {
//   movies: [],
// };

export default MovieLibrary;

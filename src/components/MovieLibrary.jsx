import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);

    const { movies } = this.props;

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };

    this.onChange = this.onChange.bind(this);
  }

  // Ideia de refatoração
  // https://github.com/tryber/sd-013-a-project-movie-cards-library-stateful/pull/20
  onChange = ({ target }) => {
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const { name } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    return (
      <div>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.onChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.onChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.onChange }
        />
        <MovieList
          movies={ movies }
        />
        <AddMovie />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.shape([]).isRequired,
};

export default MovieLibrary;

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
    };
  }

  hanbleChange = (e) => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  }

  onSearchTextChange = (e) => {
    const { value } = e.target;
    const { movies } = this.props;
    this.setState({ searchText: value });

    const moveisTextFilter = movies
      .filter(({ title, storyline, subtitle }) => title.includes(value)
    || subtitle.includes(value)
    || storyline.includes(value));

    if (!value) return this.setState({ movies });
    this.setState({ movies: moveisTextFilter });
  };

  onBookmarkedChange = (e) => {
    const { checked } = e.target;
    const { movies } = this.props;
    const { bookmarkedOnly } = this.state;
    this.setState({ bookmarkedOnly: checked });

    const moveisTextFilter = movies
      .filter(({ bookmarked }) => bookmarked);

    if (bookmarkedOnly) return this.setState({ movies });
    this.setState({ movies: moveisTextFilter });
  };

  onSelectedGenreChange = (e) => {
    const { value } = e.target;
    const { movies } = this.props;
    const { selectedGenre } = this.state;
    this.setState({ selectedGenre: value });

    if (selectedGenre) return this.setState({ movies });

    const moveisTextFilter = movies
      .filter(({ genre }) => genre === value);

    this.setState({ movies: moveisTextFilter });
  };

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.onSearchTextChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.onBookmarkedChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.onSelectedGenreChange }
        />
        <MovieList movies={ movies } />
        <AddMovie onClick={ this.hanbleChange } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape({

  })),
};

MovieLibrary.defaultProps = {
  movies: [],
};

export default MovieLibrary;

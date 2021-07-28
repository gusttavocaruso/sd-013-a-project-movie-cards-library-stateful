import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';
import './style.css';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
    };
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { movies } = this.props;
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <div>
        <div className="SearchBar">
          <SearchBar
            searchText={ searchText }
            onSearchTextChange={ this.handleChange }
            bookmarkedOnly={ bookmarkedOnly }
            onBookmarkedChange={ this.handleChange }
            selectedGenre={ selectedGenre }
            onSelectedGenreChange={ this.handleChange }
          />
        </div>
        <MovieList
          movies={ movies }
          valueTitle={ searchText }
          checkbox={ bookmarkedOnly }
        />
        <div className="AddMovie">
          <AddMovie />
        </div>
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieLibrary;

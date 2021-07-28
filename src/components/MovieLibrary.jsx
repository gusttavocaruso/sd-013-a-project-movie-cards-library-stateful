import react from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';
import MovieList from './MovieList';


class MovieLibrary extends React.Component {
    constructor(props) {
    
    super(props);

    const { movies } = this.props;

    this.state = {
        searchText: '',
        bookmarkedOnly: false,
        selectedGenre:'',
        movies,
    }
}
    render() {
        const { searchText,  bookmarkedOnly, selectedGenre, movies}
        return (
            <div>
                <SearchBar
                    searchText={ searchText }
                    onSearchTextChange={ this.onSearchTextChange }
                    bookmarkedOnly={ bookmarkedOnly }
                    onBookmarkedChange={ this.onBookmarkedChange }
                    selectedGenre={ selectedGenre }
                    onSelectedGenreChange={ this.onSelectedGenreChange }
                />
                <AddMovie
                    onClick={ this.onClick }
                />
                <MovieList
                    movies={ movies }
                />
            
            </div>
            
        );
    }
}

MovieLibrary.propTypes = {
    movies: PropTypes.array,
}.isRequired;

export default MovieLibrary;

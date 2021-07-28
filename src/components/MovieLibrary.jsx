import React from 'react';
import SearchBar from './SearchBar';

class MovieLibrary extends React.Component {
    constructor() {
        super();
        
    }
    
    render() {
        return (
            <SearchBar />
            <MovieList />
            <AddMovie />
        );
    };
}

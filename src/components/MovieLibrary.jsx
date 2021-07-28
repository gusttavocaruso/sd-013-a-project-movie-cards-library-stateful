import React, { Component } from 'react';
import SearchBar from './SearchBar'
import AddMovie from './AddMovie'; 


export default class MovieLibrary extends Component {
  render(){
    const { movies } =this.props
    return(
      <>        
        <SearchBar />
        <AddMovie  onClick={ () => {} } />
      </>
    )
  }
}



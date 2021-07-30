import React from 'react';
import PropTypes from 'prop-types';

import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    // A princípio eu pensei em fazer o filtro dentro desse componente,
    // mas analisando p PR do Tomas Santos, gostei da solução de trazer o
    // movies que chega como props já filtrado.
    // Então toda vez que o render de MovieLibrary for executado a função que
    // está contida em MovieLibrary vai editar/filtrar o dataset e enviar via props (já pronto) para o MovieList
    // Este por sua vez só será responsável por renderizar cada item do array via map para chamar o MovieCard para cada item.
    // searchText, bookmarkedOnly, selectedGenre
    return (
      <div data-testid="movie-list" className="movie-list">
        { movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
      </div>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
  // searchText: PropTypes.string.isRequired,
  // bookmarkedOnly: PropTypes.bool.isRequired,
  // selectedGenre: PropTypes.string.isRequired,
};

export default MovieList;

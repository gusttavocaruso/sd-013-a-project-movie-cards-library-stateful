// // SelectGenre (Componente filho de AddMovie)

// import React from 'react';
// import PropTypes from 'prop-types';

// class SelectGenre extends React.Component {
//   render() {
//     const { genre, handleChange } = this.props;

//     return (
//       <label data-testid="genre-input-label" htmlFor="storyline">
//         Gênero
//         <select
//           id="storyline"
//           name="storyline"
//           data-testid="genre-input"
//           onChange={ handleChange }
//           value={ genre }
//         >
//           <option data-testid="genre-option" value="action">Ação</option>
//           <option data-testid="genre-option" value="comedy">Comédia</option>
//           <option data-testid="genre-option" value="thriller">Suspense</option>
//         </select>
//       </label>
//     );
//   }
// }

// SelectGenre.propTypes = {
//   genre: PropTypes.string.isRequired,
//   handleChange: PropTypes.func.isRequired,
// };

// export default SelectGenre;

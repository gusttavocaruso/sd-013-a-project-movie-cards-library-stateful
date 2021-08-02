import React from 'react';
import PropTypes from 'prop-types';
import Title from './Pages/Title';
import Subtitle from './Pages/Subtitle';
import Imagepath from './Pages/Imagepath';
import Storyline from './Pages/Storyline';
import Rating from './Pages/Rating';
import Genre from './Pages/Genre';

class AddMovie extends React.Component {
  render() {
    const { title, subtitle, imagePath, storyLine, rating, genre } = this.props;
    return (
      <form>
        <Title value={ title } />
        <Subtitle value={ subtitle } />
        <Imagepath value={ imagePath } />
        <Storyline value={ storyLine } />
        <Rating value={ rating } />
        <Genre value={ genre } />
      </form>
    );
  }
}

AddMovie.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  imagePath: PropTypes.string.isRequired,
  storyLine: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  genre: PropTypes.string.isRequired,
};
export default AddMovie;

import React from 'react';
import InputTitle from './InputTitle';
import InputSubtitle from './InputSubtitle';

class AddMovie extends React.Component {
  render() {
    return (
      <div>
        <form action="" data-testid="add-movie-form">
          <InputTitle />
          <InputSubtitle />
        </form>
      </div>
    );
  }
}

export default AddMovie;
